'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  TextField,
  Button,
  Container,
  Typography,
  Snackbar,
  Alert,
  Box,
  FormHelperText,
} from '@mui/material'
import { login } from '../../utils/auth'

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginFailed, setIsLoginFailed] = useState(false)

  const handleLogin = async () => {
    try {
      await login(username, password)
      router.push('/people')
    } catch (error) {
      setIsLoginFailed(true)
      console.error('Login failed:', error.message)
    }
  }

  return (
    <Container maxWidth="sm" sx={{ paddingBlock: '30px' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
        autoComplete="off"
      />
      <FormHelperText>Username: test123</FormHelperText>
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        autoComplete="off"
      />
      <FormHelperText>Password: test123</FormHelperText>
      <Button
        sx={{ marginTop: '24px' }}
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>
      <Snackbar
        open={isLoginFailed}
        autoHideDuration={6000}
        onClose={() => setIsLoginFailed(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setIsLoginFailed(false)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          <Box>
            Login Failed! Please use these credentials:
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Username: test123
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Password: test123
            </Box>
          </Box>
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default Login
