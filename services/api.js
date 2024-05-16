const API_BASE_URL = 'https://swapi.dev/api'

export const getPeople = async (search = '') => {
  const response = await fetch(`${API_BASE_URL}/people?search=${search}`)
  console.log(response, 'response')
  if (!response.ok) {
    throw new Error('Failed to fetch people')
  }
  const data = await response.json()
  return data.results
}

export const getPersonById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/people/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch person')
  }
  return response.json()
}

export const getPlanets = async (search = '') => {
  const response = await fetch(`${API_BASE_URL}/planets?search=${search}`)
  if (!response.ok) {
    throw new Error('Failed to fetch planets')
  }
  const data = await response.json()
  return data.results
}

export const getPlanetById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/planets/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch planet')
  }
  return response.json()
}

export const getStarShips = async (search = '') => {
  const response = await fetch(`${API_BASE_URL}/starships?search=${search}`)
  if (!response.ok) {
    throw new Error('Failed to fetch starships')
  }
  const data = await response.json()
  return data.results
}

export const getStarShipById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/starships/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch starship')
  }
  return response.json()
}
