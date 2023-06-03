import { FC, ReactNode } from "react"
import styles from "./title.module.css"
import Link from "next/link"
import { kalam } from "../fonts"

interface Data {
  children: ReactNode
  hasHomeRoute?: Boolean
}

const Title: FC<Data> = ({ children, hasHomeRoute = true }) => {
  return (
    <header className={hasHomeRoute ? styles.header : styles.header2}>
      <h1 className={styles.title}>
        {hasHomeRoute ? (
          <>
            <Link href="/">rn</Link>
            <span className={`${kalam.className} ${styles.span}`}>
              {"'s "}
              {children}
            </span>
          </>
        ) : (
          children
        )}
      </h1>
    </header>
  )
}

export default Title
