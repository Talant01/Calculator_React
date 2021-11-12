import Mexp from 'math-expression-evaluator'

const isOperation = (char: string) => {
  if (char === '+' || char === '-' || char === '/' || char === '*') return true
  return false
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

export default expParser
