'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from 'next/link'
import { Button } from '@mui/material'
import { isAuthenticated, logout } from '@/utils/auth'
import { useRouter, usePathname } from 'next/navigation'

const pages = [
  {
    name: 'People',
    path: '/people',
  },
  {
    name: 'Planets',
    path: '/planets',
  },
  {
    name: 'Starships',
    path: '/starships',
  },
]

const Header = () => {
  const isAuthUser = isAuthenticated()
  const router = useRouter()
  const pathName = usePathname()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: 'flex',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              a: {
                color: '#fff',
                display: 'inline-block',
                paddingBottom: '8px',
                textDecoration: 'none',
              },
            }}
          >
            {pages.map((page) => (
              <Link
                href={page.path}
                key={page.path}
                style={{
                  borderBottom: pathName.includes(page.path)
                    ? '2px solid #fff'
                    : 'none',
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
          <Box
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}
          >
            {!isAuthUser ? (
              <Button
                variant="outlined"
                onClick={() => router.push('/login')}
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  '&:hover': {
                    borderColor: '#fff',
                  },
                }}
              >
                Log In
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={handleLogout}
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  '&:hover': {
                    borderColor: '#fff',
                  },
                }}
              >
                Log Out
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
