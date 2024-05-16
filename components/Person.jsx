'use client'

import { useRouter } from 'next/navigation'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const Person = ({ data, index }) => {
  const router = useRouter()
  const { name, gender, birth_year, films } = data

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
          Gender: {gender}
        </Typography>
        <Typography variant="body2">Birth Year: {birth_year}</Typography>
        <Typography variant="body2">Films count: {films.length}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ fontWeight: 600 }}
          onClick={() => router.push(`people/${index + 1}`)}
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Person
