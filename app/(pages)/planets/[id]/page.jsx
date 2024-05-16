'use client'
import { useEffect, useState } from 'react'
import { Container, Box } from '@mui/material'
import { getPlanetById } from '../../../../services/api'
import Loading from '@/components/Loading'
import DescriptionLine from '@/components/DescriptionLine'
import Typography from '@mui/material/Typography'
import {
  CloudSync,
  ThreeSixty,
  OpenInFull,
  CloudQueue,
  Fitbit,
  Terrain,
  Groups,
  Apartment,
} from '@mui/icons-material'

const Page = ({ params }) => {
  const [planet, setPlanet] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPlanetById(Number(params.id))
        setPlanet(data)
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
          {planet.name ? (
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
                {planet.name}
              </Typography>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <DescriptionLine
                  icon={<CloudSync fontSize="small" />}
                  label="Rotation Period"
                  value={planet.rotation_period}
                />
                <DescriptionLine
                  icon={<ThreeSixty fontSize="small" />}
                  label="Orbital Period"
                  value={planet.orbital_period}
                />
                <DescriptionLine
                  icon={<OpenInFull fontSize="small" />}
                  label="Diameter"
                  value={planet.diameter}
                />
                <DescriptionLine
                  icon={<CloudQueue fontSize="small" />}
                  label="Climate"
                  value={planet.climate}
                />
                <DescriptionLine
                  icon={<Fitbit fontSize="small" />}
                  label="Gravity"
                  value={planet.gravity}
                />
                <DescriptionLine
                  icon={<Terrain fontSize="small" />}
                  label="Terrain"
                  value={planet.terrain}
                />
                <DescriptionLine
                  icon={<Groups fontSize="small" />}
                  label="Population"
                  value={planet.population}
                />
                <DescriptionLine
                  icon={<Apartment fontSize="small" />}
                  label="Residents"
                  value={planet.residents.length}
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
