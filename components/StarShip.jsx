'use client'

import { useRouter } from 'next/navigation'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const StarShip = ({ data, index }) => {
  const router = useRouter()
  const { name, model, length, passengers } = data

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Person #{index + 1}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Model: {model}
        </Typography>
        <Typography variant="body2">Length: {length}</Typography>
        <Typography variant="body2">Passengers: {passengers}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ fontWeight: 600 }}
          onClick={() => router.push(`starships/${index + 1}`)}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default StarShip
