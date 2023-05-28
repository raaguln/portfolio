import { FC, ReactNode } from "react"
import styles from "./title.module.css"

interface Data {
  children: ReactNode
}

const Title: FC<Data> = ({ children }) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  )
}

export default Title
