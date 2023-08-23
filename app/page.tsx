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
        <span className={spanCN}>Data Scientist / Software Engineer</span> who
        specializes in -
      </p>
      <ul>
        <li>
          developing predictive models to tackle complex problem statements
        </li>
        <li>building custom and accessible software experiences</li>
      </ul>
      <p>
        You can find me exploring real-life applications of NLP and Computer
        Vision as a part of my Data Science graduate degree in{" "}
        <span className={spanCN}>University of Washington, Seattle</span>.
      </p>
      <p>
        To check out my craft at previous companies, you can visit the{" "}
        <PrettyLink href="/work" target="_blank">
          work
        </PrettyLink>{" "}
        section. I also share my experience through{" "}
        <PrettyLink href="/speaking" target="_blank">
          conference talks
        </PrettyLink>
        .
        {/* I also tinker with software and data during my free time, which you
        can find in the{" "}
        <PrettyLink href="/projects" target="_blank">
          projects
        </PrettyLink>{" "}
        section. I also{" "}
        <PrettyLink href="" target="_blank">
          blog
        </PrettyLink>{" "}
        about them. */}
      </p>

      {/* <p>
        Got no time to go through all my work? No problem, here's an elevator
        pitch.
      </p> */}
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
