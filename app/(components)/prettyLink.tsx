import { FC, ReactNode } from "react"
import Link from "next/link"
import styles from "./prettyLink.module.css"

interface LinkProps {
  href: string,
  target: string,
  children: ReactNode
}

const PrettyLink: FC<LinkProps> = (props) => {
  const {href, target, children} = props
  return (
    <span className={styles.span}>
      <Link href={href} target={target}>{children}</Link>
    </span>
  )
}

export default PrettyLink
