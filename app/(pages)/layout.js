'use client'

import { isAuthenticated } from '@/utils/auth'
import { useRouter } from 'next/navigation'

const PagesLayout = ({ children }) => {
  const router = useRouter()
  const isAuthUser = isAuthenticated()

  if (!isAuthUser) {
    router.push('/login')
  }

  return <>{children}</>
}

export default PagesLayout
