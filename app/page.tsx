import { ToggleTheme } from '@/components/ui/theme-toggle'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

const HomePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      {session ? <p>{session?.user.name} is logged in</p> : <p>Logged out</p>}
      <ToggleTheme />
    </div>
  )
}

export default HomePage