"use client"

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

interface featureProps {
  title: string
  description: string
  icon: string
}

const features: featureProps[] = [
  {
    title: 'Comprehensive Courses',
    description: 'Access a wide range of courses covering various topics and industries.',
    icon: '📚',
  },
  {
    title: 'Interactive Learning',
    description: 'Engage with interactive lessons, quizzes, and hands-on projects.',
    icon: '🎓',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your progress and stay motivated with real-time updates.',
    icon: '🎯',
  },
  {
    title: 'Expert Instructors',
    description: 'Learn from experienced instructors with a passion for teaching.',
    icon: '👨‍🏫',
  },
  {
    title: 'Flexible Learning',
    description: 'Learn at your own pace with flexible scheduling and access to your courses.',
    icon: '🕒',
  },
  {
    title: 'Community Support',
    description: 'Connect with a community of learners and instructors to share ideas and insights.',
    icon: '👥',
  },
  {
    title: 'Certification',
    description: 'Earn recognized certifications to validate your skills and advance your career.',
    icon: '🎓',
  },
  {
    title: 'Real-World Applications',
    description: 'Apply your knowledge to real-world problems and projects.',
    icon: '💼',
  },
]

const HomePage = () => {

  return (
    <>
      <section className='relative py-20'>
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">The Future of Online Education</Badge>

          <h1 className='text-4xl md:text-6xl font-bold text-primary'>
            Elevate your Learning Experience
          </h1>

          <p className='max-w-[700px] text-muted-foreground'>
            Discover a new way to learn with our modern, interactive learning management system.
            Access high-quality courses anytime, anywhere, and on any device.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mt-8'>
            <Link href="/courses" className={buttonVariants({
              size: 'lg',
            })}>
              Explore Courses
            </Link>

            <Link href="/login" className={buttonVariants({
              size: 'lg',
              variant: 'outline',
            })}>
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {features.map((feature: featureProps, index: number) => (
          <Card key={index} className='hover:shadow-lg transition-shadow'>
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground'>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  )
}

export default HomePage