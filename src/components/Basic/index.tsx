import React from 'react'
import Buttons from '../Buttons/Buttons'
import Display from './Display'
import { basicValues } from '../../utils/keypad'
import { useAppDispatch } from '../../store/hooks'
import { setExpression } from '../../store/slices/basicSlice'

export default function Basic() {
  const dispatch = useAppDispatch()

  const onPress = (value: string) => {
    dispatch(setExpression(value))
  }

  return (
    <React.Fragment>
      <Display />
      <Buttons values={basicValues} onPress={onPress} />
    </React.Fragment>
  )
}
