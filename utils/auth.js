const isAuthenticated = () => {
  const token = localStorage.getItem('token')
  return !!token
}

const login = async (username, password) => {
  if (username === 'test123' && password === 'test123') {
    localStorage.setItem('token', 'example_token')
  } else {
    throw new Error('Invalid username or password')
  }
}

const logout = () => {
  localStorage.removeItem('token')
}

export { isAuthenticated, login, logout }
