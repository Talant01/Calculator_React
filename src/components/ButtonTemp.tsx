import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { IButtonProps } from '../interfaces/button'

const ButtonTemp: React.FC<ButtonProps & IButtonProps> = ({
  value,
  onPress,
  color = 'primary',
  variant = 'outlined',
}) => {

  return (
    <Button
      variant={variant}
      color={color}
      onClick={(e) => onPress(value)}
      sx={{
        borderRadius: '8px',
      }}
    >
      {value}
    </Button>
  )
}

export default ButtonTemp
