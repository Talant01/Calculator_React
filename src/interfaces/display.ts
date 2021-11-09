export interface IDisplay {
    expression: string
    result: number | undefined
}

export interface IDisplayCurrency {
    onChange(value: string): void
}