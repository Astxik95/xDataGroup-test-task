const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    return !!token
  }
  return false
}

const login = async (username, password) => {
  if (username === 'test123' && password === 'test123') {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', 'example_token')
    }
  } else {
    throw new Error('Invalid username or password')
  }
}

const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')
  }
}

export { isAuthenticated, login, logout }
