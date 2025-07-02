import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MailIcon } from 'lucide-react'
import Image from 'next/image'

const LoginPage = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl'>Welcome back !</CardTitle>
                <CardDescription>Login with Email or Google Account to continue</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <Button className='w-full cursor-pointer' variant='outline'>
                    <Image src="/images/google.png" alt="google" width={20} height={20} className='mr-2' />   Continue with Google
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