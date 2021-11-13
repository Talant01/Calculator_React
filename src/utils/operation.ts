import Mexp from 'math-expression-evaluator'
const isOperation = (char: string) => {
  if (char === '+' || char === '-' || char === '/' || char === '*') return true
  return false
}

const isDigit = (char: string) => {
  return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(char)
}

const expParser = (expression: string, char: string) => {
  const result = {
    expression: '',
    total: 0,
  }

  if (char === 'C') return result
  else if (char === 'backspace') {
    result.expression =
      expression.length === 0 ? '' : expression.slice(0, expression.length - 1)
    try {
      result.total = parseFloat(Mexp.eval(result.expression))
    } catch (e) {
      result.total = 0
      console.log(e)
    }
  } else if (char === '=') {
    try {
      result.expression = Mexp.eval(expression)
    } catch (e) {
      result.expression = ''
      console.log(e)
    }
  } else if (
    isOperation(char) &&
    expression.length > 0 &&
    isOperation(expression[expression.length - 1])
  ) {
    result.expression = expression.slice(0, expression.length - 1) + char
  } else {
    result.expression = expression + char
    try {
      result.total = parseFloat(Mexp.eval(result.expression))
    } catch (e) {
      result.total = 0
      console.log(e)
    }
  }

  return result
}

interface IState {
  rate: {
    [key: string]: string
  }
  currency: string
  amount: number
}

const calculateAmountRate = (state: IState, currency: string) => {
  if (currency === state.currency || currency === '' || state.currency === '')
    return state.amount

  return parseFloat(state.rate[currency.toUpperCase()]) * state.amount
}

const numberParse = (number: number, char: string) => {
  if (char === 'C') return 0
  if (isNaN(number) || number === null)
    return isDigit(char) ? parseFloat(char) : 0
  if (char === 'backspace')
    return number.toString().length === 1
      ? 0
      : parseFloat(number.toString().slice(0, number.toString().length - 1))
  if (char === '.')
    return number.toString().includes('.') === false
      ? parseFloat(number.toFixed(1))
      : number
  return parseFloat(number.toString() + char)
}

export { expParser, calculateAmountRate, numberParse }
