import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import styles from './button.module.css'

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string
}

const PrimaryButton = ({text, ...rest}:Props) => {
    return (
        <button className={styles.primary} {...rest}>
            {text}
        </button>
    )
}

export default PrimaryButton