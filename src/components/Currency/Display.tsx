import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { IDisplayCurrency } from '../../interfaces/display'
import SelectCurrency from './SelectCurrency'

const Display: React.FC<IDisplayCurrency> = ({
  toValue,
  fromValue,
  state,
  onChangeFrom,
  onChangeTo,
}) => {
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
        <SelectCurrency onChange={onChangeFrom} />
        <Typography color="primary" variant="subtitle1">
          {eval(fromValue)}
          {!state ? '_' : ''}
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
        <SelectCurrency onChange={onChangeTo} />
        <Typography color="primary" variant="subtitle1">
          {eval(toValue)}
          {state ? '_' : ''}
        </Typography>
      </Typography>
    </Box>
  )
}

export default Display
