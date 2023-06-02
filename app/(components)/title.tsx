import { FC, ReactNode } from "react"
import styles from "./title.module.css"
import Link from "next/link"
import { kalam } from "../fonts"

interface Data {
  children: ReactNode
  homeRoute?: Boolean
}

const Title: FC<Data> = ({ children, homeRoute = true }) => {
  return (
    <header
      className={homeRoute ? styles.titleContainer : styles.titleContainer2}>
      <h1 className={styles.title}>
        {homeRoute ? (
          <>
            <span className={`${kalam.className} ${styles.span}`}>
              <Link href="/">rn</Link>
            </span>
            {" / "}
          </>
        ) : null}
        {children}
      </h1>
    </header>
  )
}

export default Title
