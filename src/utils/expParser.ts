const isOperation = (char: string) => {
  if (char === '+' || char === '-' || char === '/' || char === '*') return true
  return false
}

const expParser = (expression: string, char: string) => {
  if (char === 'C') return '0'
  if (isOperation(char) && isOperation(expression[expression.length - 1]))
    return expression.slice(0, expression.length - 1) + char
  if (isOperation(char)) return expression + char
  return expression + char
}

export default expParser
