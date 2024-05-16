import { Alert, Box, Snackbar } from '@mui/material'

const ErrorHandler = ({ open, handleClose, errorMessage }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => handleClose()}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={() => handleClose()}
        severity="error"
        variant="filled"
        sx={{ width: '100%' }}
      >
        <Box>{errorMessage}</Box>
      </Alert>
    </Snackbar>
  )
}

export default ErrorHandler
