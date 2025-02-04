import { isAuthenticated } from '@/app/auth/auth'
import logoImg from '@/assets/logo_img.svg'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (isAuthenticated()) {
    redirect('/')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <Image
          src={logoImg}
          className="w-60 dark:invert"
          alt="logo"
        />
      <div className="w-full max-w-xs">{children}</div>
    </div>
  )
}