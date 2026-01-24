import { notFound } from 'next/navigation';
import { services, getServiceById } from '@/data/services';
import ServiceDetailClient from '@/components/ServiceDetailClient';

// Generate static params for all services
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = getServiceById(id);
  
  if (!service) {
    return {
      title: 'Service Not Found | LeoTheTechGuy',
    };
  }

  return {
    title: `${service.title} | LeoTheTechGuy`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
