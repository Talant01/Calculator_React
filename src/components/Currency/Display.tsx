import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchCurrencyRate } from '../../store/slices/currencySlice'
import SelectCurrency from './SelectCurrency'

const Display = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.currency)

  const onFromChange = (value: string) => {
    dispatch(fetchCurrencyRate({currency: value, state: false}))
  }

  const onToChange = (value: string) => {
    console.log('hello')
    dispatch(fetchCurrencyRate({currency: value, state: true}))
  }

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
      <Typography
        variant="subtitle2"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SelectCurrency onChange={onFromChange}/>
        <Typography color="primary" variant="subtitle1">
          {state.from.amount}
          {!state.state ? '_' : ''}
        </Typography>
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SelectCurrency onChange={onToChange}/>
        <Typography color="primary" variant="subtitle1">
          {state.to.amount}
          {state.state ? '_' : ''}
        </Typography>
      </Typography>
    </Box>
  )
}

export default Display
