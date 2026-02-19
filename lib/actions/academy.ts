'use server';

import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import Partner from '@/models/Partner';
import { Partner as IPartner } from '@/types';
import { revalidatePath } from 'next/cache';

export async function submitExam(courseId: string, answers: number[]) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: 'Unauthorized' };
  }

  await dbConnect();
  
  const course = await Course.findById(courseId);
  if (!course || !course.exam) {
    return { error: 'Course or Exam not found' };
  }

  // Calculate Score
  let correctCount = 0;
  course.exam.questions.forEach((q, index) => {
    if (answers[index] === q.correctAnswer) {
      correctCount++;
    }
  });

  const score = Math.round((correctCount / course.exam.questions.length) * 100);
  const passed = score >= course.exam.passingScore;

  // Update Partner Progress
  const partner = await Partner.findById(session.user.id);
  
  if (!partner) {
    return { error: 'Partner not found' };
  }
  
  const progressIndex = partner.partnerProgress.findIndex((p) => p.courseId === courseId);
  
  if (progressIndex > -1) {
    partner.partnerProgress[progressIndex].examScore = score;
    partner.partnerProgress[progressIndex].examAttempts = (partner.partnerProgress[progressIndex].examAttempts || 0) + 1;
    if (passed) {
      partner.partnerProgress[progressIndex].isCompleted = true;
      partner.partnerProgress[progressIndex].progressPercentage = 100;
    }
  } else {
    partner.partnerProgress.push({
      courseId,
      completedLessons: [], // Should technically have lessons marked if they took exam?
      progressPercentage: passed ? 100 : 0,
      isCompleted: passed,
      examScore: score,
      examAttempts: 1
    });
  }

  // Check for All Courses Completed Bonus
  if (passed && !partner.hasReceivedAcademyBonus) {
      const allCourses = await Course.find({ published: true });
      // Note: We just updated/pushed the current course, so if count matches, they are done.
      // But we need to be careful if partnerProgress has duplicates or old data.
      // Ideally we check if every published course ID is present and completed in partnerProgress.
      
      const allCompleted = allCourses.every((c) => 
          partner.partnerProgress.some((p) => p.courseId === c._id.toString() && p.isCompleted)
      );

      if (allCompleted) {
          partner.hasReceivedAcademyBonus = true;
          partner.stats.pendingCommission += 10; // $10 Bonus
          partner.stats.totalCommissionEarned += 10; // It is earned, just pending payment
          
          // Log it? (Would need to import AuditLog)
      }
  }

  await partner.save();

  revalidatePath(`/partner/dashboard/academy`);
  return { success: true, score, passed, passingScore: course.exam.passingScore };
}

export async function completeLesson(courseId: string, lessonSlug: string) {
  const session = await auth();
  if (!session?.user?.id) return { error: 'Unauthorized' };

  await dbConnect();
  
  const partner = await Partner.findById(session.user.id);
  if (!partner) return { error: 'Partner not found' };

  const course = await Course.findById(courseId);
  if (!course) return { error: 'Course not found' };

  const progressIndex = partner.partnerProgress.findIndex((p) => p.courseId === courseId);

  if (progressIndex > -1) {
    if (!partner.partnerProgress[progressIndex].completedLessons.includes(lessonSlug)) {
        partner.partnerProgress[progressIndex].completedLessons.push(lessonSlug);
    }
    
    // Update percentage (simple logic: lessons count)
    // Note: This logic assumes we know total lessons. 
    // For now, let's just stick to tracking the array.
    const completedCount = partner.partnerProgress[progressIndex].completedLessons.length;
    const totalLessons = course.lessons.length;
    partner.partnerProgress[progressIndex].progressPercentage = Math.min(100, Math.round((completedCount / totalLessons) * 100));
    
  } else {
    partner.partnerProgress.push({
        courseId,
        completedLessons: [lessonSlug],
        progressPercentage: Math.round((1 / course.lessons.length) * 100),
        isCompleted: false,
    });
  }

  await partner.save();
  revalidatePath('/partner/dashboard/academy');
  return { success: true };
}

export async function getCourses() {
  await dbConnect();
  // Ensure courses exist
  const count = await Course.countDocuments();
  if (count === 0) {
    await seedCourses();
  }
  
  return await Course.find({ published: true }).sort({ createdAt: 1 }).lean();
}

export async function getCourse(slug: string) {
  await dbConnect();
  return await Course.findOne({ slug, published: true }).lean();
}

export async function getPartnerProgress(email: string) {
  await dbConnect();
  const partner = await Partner.findOne({ email }).lean() as unknown as IPartner;
  return partner?.partnerProgress || [];
}

import { courses as initialCourses } from '@/lib/data/academy-content';

export async function seedCourses() {
  await dbConnect();
  
  try {
    // Check if courses already exist to avoid overwriting/duplicating on every load
    // But for this demo, we might want to ensure they are up to date
    const count = await Course.countDocuments();
    if (count > 0) return;

    console.log('Seeding Academy Courses...');

    for (const courseData of initialCourses) {
      await Course.create({
        ...courseData,
        published: true,
      });
    }

    console.log('Seeding Complete');
  } catch (error) {
    console.error('Error seeding courses:', error);
  }
}
