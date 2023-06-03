// "use client"
import { MouseEvent, ReactNode, FC } from "react"
import styles from "./button.module.css"

interface Props {
  children: ReactNode
  onClick: (event: MouseEvent<HTMLElement>) => void
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
