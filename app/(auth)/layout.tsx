import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative flex min-h-svh flex-col gap-6 items-center justify-center'>
            <Link href="/" >
                <Image src="/images/logo.svg" alt="logo" width={250} height={250}
                    className='dark:invert'
                />
            </Link>
            <div className='w-full flex flex-col max-w-sm gap-6'>
                {children}
            </div>

            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground'>
                <span>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </span>
            </div>
        </div>
    )
}

export default AuthLayout