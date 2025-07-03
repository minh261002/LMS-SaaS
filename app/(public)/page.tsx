"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface featureProps {
  title: string
  description: string
  icon: string
  gradient: string
}

interface statProps {
  number: string
  label: string
  suffix?: string
}

interface testimonialProps {
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

const features: featureProps[] = [
  {
    title: 'Comprehensive Courses',
    description: 'Access a wide range of courses covering various topics and industries.',
    icon: '📚',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Interactive Learning',
    description: 'Engage with interactive lessons, quizzes, and hands-on projects.',
    icon: '🎓',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your progress and stay motivated with real-time updates.',
    icon: '🎯',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Expert Instructors',
    description: 'Learn from experienced instructors with a passion for teaching.',
    icon: '👨‍🏫',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Flexible Learning',
    description: 'Learn at your own pace with flexible scheduling and access to your courses.',
    icon: '🕒',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Community Support',
    description: 'Connect with a community of learners and instructors to share ideas and insights.',
    icon: '👥',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    title: 'Certification',
    description: 'Earn recognized certifications to validate your skills and advance your career.',
    icon: '🏆',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Real-World Applications',
    description: 'Apply your knowledge to real-world problems and projects.',
    icon: '💼',
    gradient: 'from-rose-500 to-pink-500'
  },
]

const stats: statProps[] = [
  {
    number: '50000',
    label: 'Active Students',
    suffix: '+'
  },
  {
    number: '500',
    label: 'Expert Instructors',
    suffix: '+'
  },
  {
    number: '1000',
    label: 'Available Courses',
    suffix: '+'
  },
  {
    number: '95',
    label: 'Success Rate',
    suffix: '%'
  }
]

const testimonials: testimonialProps[] = [
  {
    name: 'Sarah Johnson',
    role: 'Software Developer at Google',
    content: 'This platform transformed my career completely. The courses are incredibly well-structured and the instructors are world-class experts.',
    avatar: '👩‍💻',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Senior Data Scientist at Meta',
    content: 'The interactive learning approach and real-world projects helped me land my dream job in tech. Absolutely game-changing experience!',
    avatar: '👨‍💼',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager at Microsoft',
    content: 'Flexible scheduling allowed me to learn while working full-time. The community support is amazing and truly inspiring!',
    avatar: '👩‍🎓',
    rating: 5
  }
]

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}



const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}



// Animated Counter Component with Framer Motion
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <motion.span
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  )
}

// Floating Particles Component with Framer Motion
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number,
    x: number,
    y: number,
    xOffset: number,
    duration: number,
    delay: number
  }>>([])

  useEffect(() => {
    setMounted(true)
    const particleData = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Use percentage instead of window.innerWidth
      y: Math.random() * 100, // Use percentage instead of window.innerHeight
      xOffset: Math.random() * 50 - 25,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 5
    }))
    setParticles(particleData)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

const HomePage = () => {

  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className='relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900'>
        <FloatingParticles />

        {/* Animated Background Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-32 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        <div className="relative flex flex-col items-center text-center space-y-8 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="bg-white/50 backdrop-blur-sm border-white/20 shadow-lg">
              ✨ The Future of Online Education
            </Badge>
          </motion.div>

          <motion.h1
            className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate your Learning Experience
          </motion.h1>

          <motion.p
            className='max-w-[800px] text-lg md:text-xl text-muted-foreground'
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            🚀 Discover a revolutionary way to learn with our cutting-edge, AI-powered learning management system.
            Access premium courses anytime, anywhere, on any device.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 mt-12'
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={{ delay: 0.6 }}
          >
            <motion.div variants={scaleIn}>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/courses">
                  🎯 Explore Courses
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">
                  ⚡ Start Learning
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className='py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            className='grid grid-cols-2 md:grid-cols-4 gap-8'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat: statProps, index: number) => (
              <motion.div
                key={index}
                className='text-center'
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2'>
                  <AnimatedCounter end={parseInt(stat.number)} suffix={stat.suffix} />
                </div>
                <div className='text-gray-300 font-medium text-lg'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className='py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='text-center mb-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>
              🌟 Why Choose Our Platform?
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Experience the future of education with our cutting-edge features designed to accelerate your success
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature: featureProps, index: number) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className='h-full border-0 bg-white/80 backdrop-blur-sm overflow-hidden relative group'>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardHeader className="relative z-10">
                    <motion.div
                      className="text-5xl mb-6"
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className='text-muted-foreground'>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section className='py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden'>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="w-full h-full">
            <polygon fill="#ffffff" fillOpacity="0.1" points="0,1000 0,0 1000,0" />
          </svg>
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <motion.div
            className='text-center mb-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
              💬 Success Stories
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Join thousands of professionals who transformed their careers with our platform
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial: testimonialProps, index: number) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -12,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className='h-full bg-white/80 backdrop-blur-sm border-0 overflow-hidden relative'>
                  <CardContent className='pt-8 relative z-10'>
                    <div className='flex flex-col space-y-6'>
                      {/* Star Rating */}
                      <motion.div
                        className='flex space-x-1'
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            className='text-yellow-400 text-xl'
                            variants={scaleIn}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            ⭐
                          </motion.span>
                        ))}
                      </motion.div>

                      <div className='text-muted-foreground italic text-lg leading-relaxed'>
                        &ldquo;{testimonial.content}&rdquo;
                      </div>
                      <div className='flex items-center space-x-4 pt-4 border-t border-gray-200'>
                        <motion.div
                          className='text-3xl'
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {testimonial.avatar}
                        </motion.div>
                        <div>
                          <div className='font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'>{testimonial.name}</div>
                          <div className='text-sm text-muted-foreground font-medium'>{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive How It Works Section */}
      <section className='py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='text-center mb-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
              🚀 How It Works
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Transform your career in just 3 revolutionary steps
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-12'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: 1,
                title: 'Choose Your Adventure',
                description: 'Browse our galaxy of premium courses and select the perfect learning journey for your goals',
                icon: '🎯',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                step: 2,
                title: 'Learn Like a Pro',
                description: 'Engage with cutting-edge content, AI-powered assessments, and interactive experiences',
                icon: '🧠',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                step: 3,
                title: 'Become Certified',
                description: 'Graduate with industry-recognized credentials and join our elite alumni network',
                icon: '🏆',
                gradient: 'from-green-500 to-emerald-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className='text-center group'
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`relative w-24 h-24 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg`}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-white">{item.step}</span>
                </motion.div>
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className='text-2xl font-bold mb-4'>
                  {item.title}
                </h3>
                <p className='text-muted-foreground text-lg leading-relaxed'>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='text-center mb-20'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>
              💎 Choose Your Learning Path
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Flexible pricing options designed to fit every learner&apos;s journey
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Starter",
                price: "$19",
                period: "/month",
                description: "Perfect for beginners starting their learning journey",
                features: ["Access to 100+ courses", "Mobile app access", "Community support", "Basic certificates"],
                gradient: "from-blue-500 to-cyan-500",
                popular: false
              },
              {
                name: "Pro",
                price: "$49",
                period: "/month",
                description: "Most popular choice for serious learners",
                features: ["Access to ALL courses", "Live workshops", "1-on-1 mentoring", "Premium certificates", "Priority support"],
                gradient: "from-purple-500 to-pink-500",
                popular: true
              },
              {
                name: "Enterprise",
                price: "$99",
                period: "/month",
                description: "For teams and organizations",
                features: ["Everything in Pro", "Team management", "Custom courses", "Analytics dashboard", "24/7 support"],
                gradient: "from-orange-500 to-red-500",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: -12 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      🔥 MOST POPULAR
                    </span>
                  </motion.div>
                )}
                <Card className={`h-full p-8 ${plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''} bg-white/80 backdrop-blur-sm relative overflow-hidden`}>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0`}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-800 dark:to-gray-900'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='text-center mb-16'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              ❓ Frequently Asked Questions
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Everything you need to know about our platform
            </p>
          </motion.div>

          <motion.div
            className='max-w-3xl mx-auto'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                question: "How do I access the courses?",
                answer: "Once you sign up, you&apos;ll get instant access to our learning platform. You can access courses from any device - computer, tablet, or mobile phone."
              },
              {
                question: "Are there any prerequisites?",
                answer: "Most of our courses are designed for beginners. We clearly mark any prerequisites in the course description, and we offer preparatory materials when needed."
              },
              {
                question: "Can I get a refund?",
                answer: "Yes! We offer a 30-day money-back guarantee. If you&apos;re not satisfied with your learning experience, we&apos;ll refund your payment in full."
              },
              {
                question: "Do you offer certificates?",
                answer: "Absolutely! Upon completion of each course, you&apos;ll receive a certificate that you can add to your LinkedIn profile and resume."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mb-4"
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <motion.div
                    initial={false}
                    className="cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <span className="mr-3 text-2xl">🤔</span>
                      {faq.question}
                    </h3>
                    <Separator className="my-3" />
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-24 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white relative overflow-hidden'>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </motion.div>

        <div className='container mx-auto px-4 text-center relative z-10'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
              📧 Stay in the Loop
            </h2>
            <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
              Get the latest courses, learning tips, and exclusive offers delivered to your inbox
            </p>

            <motion.div
              className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'
              variants={staggerContainer}
            >
              <motion.div variants={scaleIn} className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 bg-white text-gray-900"
                />
              </motion.div>
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" size="lg">
                  Subscribe 🚀
                </Button>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-sm opacity-70 mt-4"
              variants={fadeIn}
            >
              No spam, unsubscribe at any time. We respect your privacy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Live Stats & Social Proof */}
      <section className='py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='text-center mb-16'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
              🔥 Join the Learning Revolution
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              See what&apos;s happening right now on our platform
            </p>
          </motion.div>

          {/* Live Activity Feed */}
          <motion.div
            className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3 text-3xl">⚡</span>
                  Live Activity
                </h3>
                <div className="space-y-4">
                  {[
                    { user: "Sarah M.", action: "just completed", course: "React Masterclass", time: "2 min ago", avatar: "👩‍💻" },
                    { user: "Mike Chen", action: "started learning", course: "Python for AI", time: "5 min ago", avatar: "👨‍💼" },
                    { user: "Anna K.", action: "earned certificate in", course: "UI/UX Design", time: "8 min ago", avatar: "👩‍🎨" },
                    { user: "David L.", action: "joined workshop", course: "Machine Learning", time: "12 min ago", avatar: "👨‍🔬" }
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-3 bg-white/60 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.5, repeat: Infinity, repeatDelay: 8 }}
                    >
                      <span className="text-2xl">{activity.avatar}</span>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-semibold">{activity.user}</span> {activity.action}{" "}
                          <span className="font-semibold text-blue-600">{activity.course}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3 text-3xl">🏆</span>
                  Recent Achievements
                </h3>
                <div className="space-y-4">
                  {[
                    { achievement: "First Course Completed", count: "2,847", icon: "🎓", color: "text-blue-600" },
                    { achievement: "Certificates Earned", count: "1,293", icon: "📜", color: "text-purple-600" },
                    { achievement: "Skills Mastered", count: "4,521", icon: "⚡", color: "text-green-600" },
                    { achievement: "Career Changes", count: "687", icon: "🚀", color: "text-orange-600" }
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white/60 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <span className="font-medium">{achievement.achievement}</span>
                      </div>
                      <motion.span
                        className={`font-bold text-xl ${achievement.color}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2, type: "spring" }}
                      >
                        {achievement.count}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Company Logos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-muted-foreground mb-8">Trusted by learners from top companies</p>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 opacity-60"
              variants={staggerContainer}
            >
              {["Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix"].map((company, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Epic CTA Section */}
      <section className='py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden'>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className='container mx-auto px-4 text-center relative z-10'>
          <motion.h2
            className='text-4xl md:text-7xl font-bold mb-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            🎓 Ready to Transform Your Future?
          </motion.h2>
          <motion.p
            className='text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Join over 50,000 ambitious learners who are already revolutionizing their careers with our world-class platform
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            transition={{ delay: 0.4 }}
          >
            <motion.div variants={scaleIn}>
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/courses">
                  🚀 Start Your Journey
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={scaleIn}>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 border-white text-gray-900 hover:bg-white hover:opacity-80">
                <Link href="/login">
                  ✨ Free Trial Available
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center space-x-8 text-sm opacity-80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            transition={{ delay: 0.6 }}
          >
            {[
              { text: "No Credit Card Required", color: "bg-green-400" },
              { text: "30-Day Money Back Guarantee", color: "bg-blue-400" },
              { text: "24/7 Premium Support", color: "bg-purple-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                variants={fadeIn}
              >
                <motion.span
                  className={`w-2 h-2 ${item.color} rounded-full`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage