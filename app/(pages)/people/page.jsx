'use client'
import { useEffect, useState } from 'react'
import { getPeople } from '../../../services/api'
import Person from '@/components/Person'
import Loading from '@/components/Loading'
import { Box, Typography } from '@mui/material'
import Search from '@/components/Search'
import ErrorHandler from '@/components/ErrorHandler'

const People = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)
  const [failure, setFailure] = useState('')

  const fetchData = async (searchQuery) => {
    try {
      const data = await getPeople(searchQuery)
      setPeople(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching people:', error.message)
      setFailure(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData('')
  }, [])

  const handleSearch = (value) => {
    fetchData(value)
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            padding: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'space-between',
              marginBlock: '24px',
            }}
          >
            <Typography variant="h4">People List</Typography>
            <Search
              handleSearch={handleSearch}
              placeholder="Search by name..."
            />
          </Box>
          <Box
            sx={{
              display: 'grid',
              flex: 1,
              gridTemplateColumns: {
                lg: 'repeat(4, 1fr)',
                md: 'repeat(3, 1fr)',
                xs: 'repeat(2, 1fr)',
              },
              gap: '20px',
              justifyContent: 'space-between',
            }}
          >
            {people.length
              ? people.map((item, index) => (
                  <Person data={item} index={index} key={item.name} />
                ))
              : 'No Data'}
          </Box>
          {failure && (
            <ErrorHandler
              open={!!failure}
              handleClose={() => setFailure('')}
              errorMessage={failure}
            />
          )}
        </Box>
      )}
    </Box>
  )
}

export default People
