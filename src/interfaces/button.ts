export interface IButtonProps {
    value: string
    onPress(value: string): void
}

export interface IButtonsProps {
    values: string[]
    onPress(value: string): void

}