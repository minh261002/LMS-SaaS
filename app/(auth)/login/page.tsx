"use client"

import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { authClient } from '@/providers/auth-client'
import { ErrorContext } from 'better-auth/react'
import { Loader2, MailIcon } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

const LoginPage = () => {

    const [isGooglePending, startGoogleTransition] = useTransition();

    async function handleGoogleSignIn() {
        startGoogleTransition(async () => {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Login successful, redirecting...");
                    },
                    onError: (error: ErrorContext) => {
                        toast.error(error.error?.message || "Login failed, please try again.");
                    },
                },
            });
        })
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl'>Welcome back !</CardTitle>
                <CardDescription>Login with Email or Google Account to continue</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <Button onClick={handleGoogleSignIn}
                    className='w-full cursor-pointer'
                    variant='outline'
                    disabled={isGooglePending}
                >

                    {isGooglePending ? (
                        <Loader2 className='size-4 mr-2 animate-spin' />
                    ) : (
                        <>
                            <Image src="/images/google.png" alt="google" width={20} height={20} className='mr-2' />   Continue with Google
                        </>
                    )}
                </Button>

                <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
                    <span className='relative z-10 bg-card px-2 text-muted-foreground'>Or continue with</span>
                </div>

                <div className="grid gap-3">
                    <div className="grid gap-2">
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            placeholder='Enter your email'
                            type='email'
                        />
                    </div>
                </div>

                <Button className='w-full cursor-pointer'>
                    <MailIcon className="size-4 mr-2" />
                    Continue with Email
                </Button>
            </CardContent>
        </Card>
    )
}

export default LoginPage