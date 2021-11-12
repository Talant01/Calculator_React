import expParser from '../../utils/expParser'
import { EVALUATE, SET_EXPRESSION } from '../types'

const initialState = {
  expression: '',
  total: 0,
}

interface ISetAction {
  type: string
  payload: {
    value: string
  }
}

interface IEvalAction {
  type: string
  payload: {
    value: string
  }
}

type TCalcAction = ISetAction | IEvalAction

const calculateReducer = (state = initialState, action: TCalcAction) => {
  switch (action.type) {
    case SET_EXPRESSION:
      const result = expParser(state.expression, action.payload.value)
      return {
        ...state,
        expression: result.expression,
        total: result.total,
      }
    case EVALUATE:
      return {
        ...state,
        expression: state.total.toString(),
        total: 0,
      }
    default:
      return state
  }
}

export default calculateReducer
