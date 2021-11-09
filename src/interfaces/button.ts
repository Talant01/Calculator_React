interface IValue {
  value: string
  disable: boolean
}

export interface IButtonProps {
  value: string
  onPress(value: string): void
  disable: boolean
}

export interface IButtonsProps {
  values: Array<IValue>
  onPress(value: string): void
}
