import DarkModeToggle from "./(components)/darkModeToggle"
import PrettyLink from "./(components)/prettyLink"
import Title from "./(components)/title"
import { kalam } from "./fonts"
import styles from "./page.module.css"

export default function Home() {
  const spanCN = `${kalam.className} ${styles.span}`
  return (
    <>
      <Title hasHomeRoute={false}>raagul nagendran</Title>
      <p>
        Your friendly neighbourhood{" "}
        <span className={spanCN}>Data Scientist / Software Engineer</span>{" "}
        currently based out of Seattle. I love digging into data to uncover
        trends, build highly custom and accessible software experiences and
        optimizing for the fastest user experience.
      </p>
      <p>
        To check out my craft at previous companies, you can visit the{" "}
        <PrettyLink href="/work" target="_blank">
          work
        </PrettyLink>{" "}
        section. I also tinker with software and data during my free time, which
        you can find in the{" "}
        <PrettyLink href="/projects" target="_blank">
          projects
        </PrettyLink>{" "}
        section. I also{" "}
        <PrettyLink href="" target="_blank">
          blog
        </PrettyLink>{" "}
        about them.
      </p>

      <p>
        Got no time to go through all my work? No problem, here's an elevator
        pitch.
      </p>
      <p>
        You can find me on{" "}
        <PrettyLink href="https://github.com/beyondtheinferno" target="_blank">
          github
        </PrettyLink>
        ,{" "}
        <PrettyLink
          href="https://www.linkedin.com/in/raagul-n/"
          target="_blank">
          linkedIn
        </PrettyLink>
        , or{" "}
        <PrettyLink href="https://twitter.com/byontheinferno" target="_blank">
          twitter
        </PrettyLink>
        .
      </p>
      {/* <Link href="">Mail</Link> */}
      <DarkModeToggle />
    </>
  )
}
