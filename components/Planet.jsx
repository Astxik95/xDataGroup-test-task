'use client'

import { useRouter } from 'next/navigation'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const Planet = ({ data, index }) => {
  const router = useRouter()
  const { name, diameter, climate, population } = data

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Planet #{index + 1}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Diameter: {diameter}
        </Typography>
        <Typography variant="body2">Climate: {climate}</Typography>
        <Typography variant="body2">Population: {population}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ fontWeight: 600 }}
          onClick={() => router.push(`planets/${index + 1}`)}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Planet
