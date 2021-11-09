import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SelectCurrency from './SelectCurrency'

const Display = () => {
  const [from, setFrom] = useState<string>('')
  const [to, setTo] = useState<string>('')

  const onChangeFrom = (value: string) => {
    setFrom(value)
  }

  const onChangeTo = (value: string) => {
    setTo(value)
  }

  console.log(from + ' ' + to)
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
          5000USD
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
          500KGS
        </Typography>
      </Typography>
    </Box>
  )
}

export default Display
