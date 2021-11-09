import React from 'react'
import Buttons from '../Buttons/Buttons'
import Display from './Display'

const values = [
  { value: '7', disable: false },
  { value: '8', disable: false },
  { value: '9', disable: false },
  { value: 'backspace', disable: false },
  { value: '4', disable: false },
  { value: '5', disable: false },
  { value: '6', disable: false },
  { value: 'C', disable: false },
  { value: '1', disable: false },
  { value: '2', disable: false },
  { value: '3', disable: false },
  { value: 'up', disable: false },
  { value: '+/-', disable: true },
  { value: '0', disable: false },
  { value: '.', disable: false },
  { value: 'down', disable: true }
]

export default function Currency() {

  const onPress = (value: string) => {
    console.log(value)
  }

  return (
    <React.Fragment>
      <Display/>
      <Buttons values={values} onPress={onPress} />
    </React.Fragment>
  )
}
