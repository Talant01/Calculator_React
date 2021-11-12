import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import { State } from '../../store/reducers/index'

const Display = () => {
  const { expression, total } = useSelector((state: State) => state.calculate)

  return (
    <Box
      sx={{
        maxWidth: '100%',
        textAlign: 'right',
        borderRadius: '5px',
        padding: '5px 10px',
        marginBottom: '5%',
        border: '1px solid',
        borderColor: 'primary.main',
      }}
    >
      <Typography color="primary" variant="h6">
        {expression}
      </Typography>
      <Typography
        color="dark"
        variant="subtitle2"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography color="primary" variant="subtitle1">
          Result:
        </Typography>
        {total}
      </Typography>
    </Box>
  )
}

export default Display
