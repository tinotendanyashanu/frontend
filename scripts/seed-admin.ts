
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import Partner from '../models/Partner';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable inside .env.local');
  process.exit(1);
}

async function seedAdmin() {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log('Connected to MongoDB');

    const adminEmail = 'contact@leothetechguy.com';
    const existingAdmin = await Partner.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log('Admin user already exists.');
      // Optional: Update to ensure role is admin
      if (existingAdmin.role !== 'admin') {
          existingAdmin.role = 'admin';
          await existingAdmin.save();
          console.log('Updated existing user to admin role.');
      }
    } else {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      const newAdmin = new Partner({
        name: 'Leo Admin',
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
        tier: 'enterprise', // Irrelevant for admin but good for schema
        status: 'active',
        stats: {
            totalReferredRevenue: 0,
            totalCommissionEarned: 0,
            pendingCommission: 0,
            paidCommission: 0
        }
      });

      await newAdmin.save();
      console.log('Admin user created successfully.');
      console.log('Email:', adminEmail);
      console.log('Password: admin123');
    }

  } catch (error) {
    console.error('Error seeding admin:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
}

seedAdmin();
