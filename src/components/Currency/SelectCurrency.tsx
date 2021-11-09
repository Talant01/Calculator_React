import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import React from 'react'
import { IDisplayCurrencySelect } from '../../interfaces/display'

const currencies = [
  {
    label: 'USD',
    value: 'usd',
  },
  {
    label: 'KGS',
    value: 'kgs',
  },
  {
    label: 'RUB',
    value: 'rub',
  },
  {
    label: 'KZT',
    value: 'kzt',
  },
  {
    label: 'HKD',
    value: 'hkd',
  },
]

const SelectCurrency: React.FC<IDisplayCurrencySelect> = ({ onChange }) => {
  const [value, setValue] = React.useState(currencies[0].value)

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string)
    setValue(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth size="small" variant="standard" margin="dense">
        <Select value={value} label="Currency" onChange={handleChange}>
          {currencies.map((currency, id) => {
            return (
              <MenuItem key={currency.label + id} value={currency.value}>
                {currency.label}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
export default SelectCurrency
