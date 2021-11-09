export interface IDisplay {
  expression: string
  result: number | undefined
}

export interface IDisplayCurrency {
  toValue: string
  fromValue: string
  state: Boolean
  onChangeFrom(value: string): void
  onChangeTo(value: string): void
}

export interface IDisplayCurrencySelect {
  onChange(value: string): void
}
