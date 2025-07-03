'use client'

import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ToggleTheme } from '@/components/ui/theme-toggle'
import { authClient } from '@/providers/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserDropdown from './UserDropdown'

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Courses",
        href: "/courses",
    },
    {
        label: "Manager",
        href: "/dashboard",
    }
]

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60'>
            <div className='flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8'>
                <Link href="/" className='mr-4'>
                    <Image src="/images/logo.svg" alt="logo" width={200} height={200} />
                </Link>

                {/* desktop */}
                <nav className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
                    <div className='flex items-center space-x-2'>
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.href} className='text-sm font-medium transition-colors hover:text-primary'>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className='flex items-center space-x-4'>
                        <ToggleTheme />
                        {isPending ? (
                            <Skeleton className='w-10 h-10 rounded-full' />
                        ) : session ? (
                            <UserDropdown
                                session={session}
                            />
                        ) : (
                            <>
                                <Link href="/login" className={buttonVariants()}>Login</Link>
                                <Link href="/signup" className={buttonVariants({ variant: "outline" })}>Get Started</Link>
                            </>
                        )

                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar