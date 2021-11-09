import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { IButtonProps } from '../../interfaces/button'

const ButtonTemp: React.FC<ButtonProps & IButtonProps> = ({
  value,
  onPress,
  disable,
  color = 'primary',
  variant = 'outlined',
}) => {
  const labelValue = value === 'backspace' ? <span>&#11013;</span> :
                     value === 'down' ? <span>&#8595;</span> :
                     value === 'up' ? <span>&#8593;</span> :
                     value
  return (
    <Button
      variant={variant}
      color={color}
      onClick={(e) => onPress(value)}
      disabled={disable}
      sx={{
        borderRadius: '8px',
      }}
    >
      {labelValue}
    </Button>
  )
}

export default ButtonTemp
