import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Display from './Display'
import mexp from 'math-expression-evaluator'
import expParser from '../../utils/expParser'

const values = [
  { value: 'C', disable: false },
  { value: '()', disable: false },
  { value: '%', disable: false },
  { value: '/', disable: false },
  { value: '7', disable: false },
  { value: '8', disable: false },
  { value: '9', disable: false },
  { value: '*', disable: false },
  { value: '4', disable: false },
  { value: '5', disable: false },
  { value: '6', disable: false },
  { value: '-', disable: false },
  { value: '1', disable: false },
  { value: '2', disable: false },
  { value: '3', disable: false },
  { value: '+', disable: false },
  { value: '+/-', disable: true },
  { value: '0', disable: false },
  { value: '.', disable: false },
  { value: '=', disable: false }
]

export default function Basic() {
  const [expression, setExpression] = useState<string>('0')
  const [result, setResult] = useState<number | undefined>(undefined)

  const onPress = (value: string) => {
    if (value === '=') {
      setExpression(result + '')
      setResult(0)
    } else {
      const exp = expParser(expression, value)
      setExpression(exp)
    }
  }

  useEffect(() => {
    try {
      const tmpResult = mexp.eval(expression)
      if (tmpResult !== undefined) setResult(parseFloat(tmpResult))
    } catch (e) {
      setResult(undefined)
    }
  }, [expression])

  return (
    <React.Fragment>
      <Display expression={expression} result={result} />
      <Buttons values={values} onPress={onPress} />
    </React.Fragment>
  )
}
