import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        height: 'calc(100vh - 64px)', // 64px - header height
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loading
