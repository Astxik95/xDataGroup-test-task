import { Box, Button, Input } from '@mui/material'

const Search = ({ handleSearch, placeholder }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Input
        placeholder={placeholder}
        type="text"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        fullWidth
        margin="normal"
        autoComplete="off"
        sx={{ height: '48px', margin: 0 }}
      />
    </Box>
  )
}

export default Search
