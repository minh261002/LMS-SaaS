"use client"

import { Button } from '@/components/ui/button'
import { ToggleTheme } from '@/components/ui/theme-toggle'
import { authClient } from '@/providers/auth-client'
import { ErrorContext } from 'better-auth/react'
import { toast } from 'sonner'

const HomePage = () => {
  const {
    data: session,
  } = authClient.useSession()

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed out successfully")
        },
        onError: (error: ErrorContext) => {
          toast.error(error.error?.message || "Failed to sign out")
        },
      },
    })
  }

  return (
    <div>
      {session ? (
        <>
          <p>{session?.user.email} is logged in</p>
          <Button onClick={handleSignOut}>Sign out</Button>
        </>
      ) : <p>Logged out</p>}
      <ToggleTheme />
    </div>
  )
}

export default HomePage