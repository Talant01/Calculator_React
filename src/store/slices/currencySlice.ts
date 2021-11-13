import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { calculateAmountRate, numberParse } from '../../utils/operation'

interface ICurrencyState {
  from: {
    currency: string
    amount: number
    rate: {
      [key: string]: string
    }
  }
  to: {
    currency: string
    amount: number
    rate: {
      [key: string]: string
    }
  }
  state: boolean
}

interface IFetchAction {
  rate: {
    [key: string]: string
  }
  currency: string,
  state: boolean
}

interface IData {
    currency: string,
    state: boolean
}

const initialState: ICurrencyState = {
  from: {
    currency: '',
    amount: 0,
    rate: {},
  },
  to: {
    currency: '',
    amount: 0,
    rate: {},
  },
  state: false,
}

export const fetchCurrencyRate = createAsyncThunk(
  'currency/fetchCurrency',
  (data: IData) =>
    axios
      .get(`${process.env.REACT_APP_CURRENCY_URI}${data.currency.toUpperCase()}`)
      .then((response) => {
        return {
          rate: response.data.data,
          currency: data.currency,
          state: data.state
        }
      })
      .catch((error) => error)
)

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeAmount: (state, action: PayloadAction<string>) => {
      if (state.state === false) {
        state.from.amount = numberParse(state.from.amount, action.payload)
        state.to.amount = calculateAmountRate(state.from, state.to.currency)
      } else {
        state.to.amount = numberParse(state.to.amount, action.payload)
        state.from.amount = calculateAmountRate(state.to, state.from.currency)
      }
    },
    toggleState: (state) => {
      state.state = !state.state
    },
  },
  extraReducers: {
    [fetchCurrencyRate.pending.type]: (state, action: PayloadAction<IFetchAction>) => {
        
    },
    [fetchCurrencyRate.fulfilled.type]: (
      state,
      action: PayloadAction<IFetchAction>
    ) => {
      if (action.payload.state === false) {
        state.from.rate = action.payload.rate
        state.from.currency = action.payload.currency
      } else {
        state.to.rate = action.payload.rate
        state.to.currency = action.payload.currency
      }
      if (state.state) state.from.amount = calculateAmountRate(state.to, state.from.currency)
      else state.to.amount = calculateAmountRate(state.from, state.to.currency)
    },
  },
})

export const { toggleState, changeAmount } = currencySlice.actions
export default currencySlice
