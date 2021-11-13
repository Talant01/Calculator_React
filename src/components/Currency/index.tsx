import React from 'react'
import Buttons from '../Buttons/Buttons'
import Display from './Display'
import { currencyValues } from '../../utils/keypad'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { changeAmount, toggleState } from '../../store/slices/currencySlice'

export default function Currency() {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.currency)

  const onPress = (value: string) => {
    if (value === 'up' || value === 'down') dispatch(toggleState())
    else dispatch(changeAmount(value))
  }

  const updatedValues = currencyValues.map((value) => {
    if (value.value === 'up' && !state.state)
      return { value: value.value, disable: true }
    if (value.value === 'down' && state.state)
      return { value: value.value, disable: true }
    return value
  })

  return (
    <React.Fragment>
      <Display />
      <Buttons values={updatedValues} onPress={onPress} />
    </React.Fragment>
  )
}
