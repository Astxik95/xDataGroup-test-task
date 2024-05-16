'use client'
import { useEffect, useState } from 'react'
import { Container, Box } from '@mui/material'
import { getPersonById } from '../../../../services/api'
import Loading from '@/components/Loading'
import DescriptionLine from '@/components/DescriptionLine'
import Typography from '@mui/material/Typography'
import {
  Height,
  Scale,
  Face,
  RemoveRedEye,
  Event,
  Female,
  Male,
  MovieCreation,
} from '@mui/icons-material'

const Page = ({ params }) => {
  const [person, setPerson] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPersonById(Number(params.id))
        setPerson(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching person:', error.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [params])

  return (
    <Container maxWidth="xl">
      {loading ? (
        <Loading />
      ) : (
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
          {person.name ? (
            <Box>
              <Typography
                variant="h4"
                noWrap
                sx={{
                  mr: 2,
                  display: 'flex',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  marginBottom: '24px',
                }}
              >
                {person.name}
              </Typography>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <DescriptionLine
                  icon={<Height fontSize="small" />}
                  label="Height"
                  value={`${person.height}cm`}
                />
                <DescriptionLine
                  icon={<Scale fontSize="small" />}
                  label="Weight"
                  value={`${person.mass}kg`}
                />
                <DescriptionLine
                  icon={<Face fontSize="small" />}
                  label="Hair Color"
                  value={person.hair_color}
                />
                <DescriptionLine
                  icon={<Face fontSize="small" />}
                  label="Skin Color"
                  value={person.skin_color}
                />
                <DescriptionLine
                  icon={<RemoveRedEye fontSize="small" />}
                  label="Eye Color"
                  value={person.eye_color}
                />
                <DescriptionLine
                  icon={<Event fontSize="small" />}
                  label="Birth Year"
                  value={person.birth_year}
                />
                <DescriptionLine
                  icon={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Female fontSize="small" />/<Male fontSize="small" />
                    </Box>
                  }
                  label="Gender"
                  value={person.gender}
                />
                <DescriptionLine
                  icon={<MovieCreation fontSize="small" />}
                  label="Films"
                  value={person.films.length}
                />
              </Box>
            </Box>
          ) : (
            'Not Found'
          )}
        </Box>
      )}
    </Container>
  )
}

export default Page
