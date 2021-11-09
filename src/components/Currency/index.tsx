import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Display from './Display'
import axios from 'axios'

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
  { value: 'down', disable: false },
]

export default function Currency() {
  const [state, setState] = useState<Boolean>(false)
  const [toValue, setToValue] = useState<string>('')
  const [fromValue, setFromValue] = useState<string>('')
  const [from, setFrom] = useState<string>('usd')
  const [to, setTo] = useState<string>('usd')

  const onPress = (value: string) => {
    if (value === 'up') setState(false)
    else if (value === 'down') setState(true)
    else {
      if (state) {
        if (value === 'C') setToValue('')
        else if (value === 'backspace')
          setToValue(fromValue.slice(0, fromValue.length - 1))
        else setToValue(toValue + value)
      } else {
        if (value === 'C') setFromValue('')
        else if (value === 'backspace')
          setFromValue(fromValue.slice(0, fromValue.length - 1))
        else setFromValue(fromValue + value)
      }
    }
  }

  const onChangeFrom = (value: string) => {
    setFrom(value)
  }

  const onChangeTo = (value: string) => {
    setTo(value)
  }

  const updatedValues = values.map((value) => {
    if (value.value === 'up' && !state)
      return { value: value.value, disable: true }
    if (value.value === 'down' && state)
      return { value: value.value, disable: true }
    return value
  })

  useEffect(() => {
    if (!state) {
      axios
        .get(
          `https://freecurrencyapi.net/api/v2/latest?apikey=32a7e800-3e44-11ec-8f2e-7d76219731f7&base_currency=${from.toUpperCase()}`
        )
        .then(function ({ data }) {
          let rate = 1
          if (from !== to) rate = data.data[to.toUpperCase()]

          setToValue(
            (rate * parseFloat(fromValue !== '' ? fromValue : '0')).toFixed(2)
          )
        })
        .catch(function (err) {
          console.log(err)
        })
    } else {
      axios
        .get(
          `https://freecurrencyapi.net/api/v2/latest?apikey=32a7e800-3e44-11ec-8f2e-7d76219731f7&base_currency=${to.toUpperCase()}`
        )
        .then(function ({ data }) {
          let rate = 1
          if (from !== to) rate = data.data[from.toUpperCase()]

          setFromValue(
            (rate * parseFloat(toValue !== '' ? toValue : '0')).toFixed(2)
          )
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }, [toValue, fromValue, from, to])

  return (
    <React.Fragment>
      <Display
        onChangeFrom={onChangeFrom}
        onChangeTo={onChangeTo}
        state={state}
        toValue={toValue}
        fromValue={fromValue}
      />
      <Buttons values={updatedValues} onPress={onPress} />
    </React.Fragment>
  )
}
