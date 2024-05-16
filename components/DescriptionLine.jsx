import { Box } from '@mui/material'

const DescriptionLine = ({ icon, label, value }) => {
  return (
    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontWeight: 600,
        }}
      >
        {icon}
        {label}:
      </Box>
      <span>{value}</span>
    </Box>
  )
}

export default DescriptionLine
