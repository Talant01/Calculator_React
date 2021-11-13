import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {expParser} from '../../utils/operation'

interface basicState {
  expression: string
  total: number
}

const initialState: basicState = {
  expression: '',
  total: 0,
}

export const basicSlice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    setExpression: (state, action: PayloadAction<string>) => {
      const result = expParser(state.expression, action.payload)
      state.expression = result.expression
      state.total = result.total
    }
  },
})

export const {setExpression} = basicSlice.actions
export default basicSlice
