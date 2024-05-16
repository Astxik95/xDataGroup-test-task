import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: '36px',
      }}
    >
      <h1>Hi there!</h1>
      <h4>Let's explore The Star Wars!</h4>
    </Box>
  )
}
