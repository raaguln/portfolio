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
        <span className={spanCN}>Data Scientist</span> who's pivoting from Software 
        Engineering (previously SDE 1 at Condé Nast).
      </p>
      <p>
      I worked on developing an explanatory website for WIRED that highlighted the 
      issues of data bias and simplified machine learning interpretability 
      in Rotterdam's welfare fraud detection algorithm. This experience fueled 
      my desire to delve deeper into the field, propelling me to the{" "}
      <span className={spanCN}>Master's in Data Science</span> program at the{" "}
      <span className={spanCN}>University of Washington, Seattle</span>.
      </p>
      <p>
      Now, I'm actively honing my skills by exploring diverse projects, ranging from{" "}
      <span className={spanCN}>churn analysis</span>{" "}to the cutting-edge realm of {" "}
      <span className={spanCN}>fine-tuning large language models</span>. Through these endeavors, 
      I'm gaining hands-on experience with experimental design methodologies and statistical machine learning, 
      solidifying my foundation for a future in ethical and impactful data science.
      </p>
      <p>
        To check out my craft at previous company, you can visit the{" "}
        <PrettyLink href="/work" target="_blank">
          work
        </PrettyLink>{" "}
        section. I also have shared my web development experience through{" "}
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
        You can reach out to me through{" "}
        <PrettyLink href="mailto:raaguln@uw.edu" target="_blank">
          email
        </PrettyLink>
        ,{" "}
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
      <p>
        Here's the link to my{" "}
        <PrettyLink href="https://drive.google.com/file/d/1mWdIyyQ3irhFO9lwWPT5P7V9fDhVl_8j/view" target="_blank">
          resume
        </PrettyLink>.
      </p>
      {/* <Link href="">Mail</Link> */}
      <DarkModeToggle />
    </>
  )
}
