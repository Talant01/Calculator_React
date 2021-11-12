import React from 'react'
import Buttons from '../Buttons/Buttons'
import Display from './Display'
import { basicValues } from '../../utils/keypad'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../store'

export default function Basic() {
  const dispatch = useDispatch()
  const { setExp } = bindActionCreators(actionCreators, dispatch)

  return (
    <React.Fragment>
      <Display />
      <Buttons values={basicValues} onPress={setExp} />
    </React.Fragment>
  )
}
