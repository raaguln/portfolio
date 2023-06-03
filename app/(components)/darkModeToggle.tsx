"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import styles from "./darkModeToggle.module.css"
import Button from "./button"

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const { theme, setTheme } = useTheme()
  const displayText = theme && theme === "light" ? "dark" : "light"
  const toggle = () => {
    if (theme && theme === "light") return setTheme("dark")
    else setTheme("light")
  }
  if (!mounted) {
    return null
  }
  return (
    <aside className={styles.container}>
      <Button onClick={toggle}>{displayText}</Button>
    </aside>
  )
}
