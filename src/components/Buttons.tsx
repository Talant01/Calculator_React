import { Grid } from '@mui/material'
import React from 'react'
import { IButtonsProps } from '../interfaces/button'
import ButtonTemp from './ButtonTemp'

const Buttons: React.FC<IButtonsProps> = ({ values, onPress }) => {
  return (
    <Grid
      container
      component="div"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {values.map((value, id) => {
        return (
          <Grid item xs={3} key={value + id}>
            <ButtonTemp value={value} onPress={onPress}/>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Buttons
