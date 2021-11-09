import React, { useEffect, useState } from 'react'
import Buttons from '../Buttons'
import Display from './Display'
import mexp from 'math-expression-evaluator'
import expParser from '../../utils/expParser'

const values = [
  'C',
  '()',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '+/-',
  '0',
  '.',
  '=',
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
