'use client'
import { useEffect, useState } from 'react'
import { Container, Box } from '@mui/material'
import { getStarShipById } from '../../../../services/api'
import Loading from '@/components/Loading'
import DescriptionLine from '@/components/DescriptionLine'
import Typography from '@mui/material/Typography'
import {
  ModeStandby,
  Business,
  CreditCard,
  Handyman,
  Settings,
  StarRate,
  Class,
  AirplanemodeActive,
  Groups,
} from '@mui/icons-material'

const Page = ({ params }) => {
  const [starShip, setStarShip] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStarShipById(Number(params.id))
        setStarShip(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching person:', error.message)
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
          {starShip.name ? (
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
                {starShip.name}
              </Typography>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <DescriptionLine
                  icon={<ModeStandby fontSize="small" />}
                  label="Model"
                  value={starShip.model}
                />
                <DescriptionLine
                  icon={<Business fontSize="small" />}
                  label="Manufacturer"
                  value={starShip.manufacturer}
                />
                <DescriptionLine
                  icon={<CreditCard fontSize="small" />}
                  label="Cost in credits"
                  value={starShip.cost_in_credits}
                />
                <DescriptionLine
                  icon={<Handyman fontSize="small" />}
                  label="Crew"
                  value={starShip.crew}
                />
                <DescriptionLine
                  icon={<Groups fontSize="small" />}
                  label="Passengers"
                  value={starShip.passengers}
                />
                <DescriptionLine
                  icon={<Settings fontSize="small" />}
                  label="Consumables"
                  value={starShip.consumables}
                />
                <DescriptionLine
                  icon={<StarRate fontSize="small" />}
                  label="Hyperdrive Rating"
                  value={starShip.hyperdrive_rating}
                />
                <DescriptionLine
                  icon={<Class fontSize="small" />}
                  label="Starship Class"
                  value={starShip.starship_class}
                />
                <DescriptionLine
                  icon={<AirplanemodeActive fontSize="small" />}
                  label="Pilots"
                  value={starShip.pilots.length}
                />
              </Box>
            </Box>
          ) : null}
        </Box>
      )}
    </Container>
  )
}

export default Page
