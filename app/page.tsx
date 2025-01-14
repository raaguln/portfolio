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
      <p><em>
        PS: Hurry before offer expires: I'm available for hire! Here's my{" "}
        <PrettyLink href="https://drive.google.com/file/d/1Oe-9FVPjw7C5Mx5blY5fEkzrikELqoRD/view" target="_blank">
          resume
        </PrettyLink>.
        </em>
      </p>
      <p>Hello there! I am Raagul. I have spent 3+ years crafting and deploying performant software applications at Conde Nast. 
        A few of the notable achievements that I'm proud of are -</p>
      <ul>
        <li>decreasing the load time of a website from 15+ seconds to under 2s, which lead to our team landing 4x more 
          sponsored projects. (implementation discussed at <PrettyLink href="https://www.youtube.com/watch?v=0HhWIvPhbu0&t=8681s" target="_blank">this conference</PrettyLink>)</li>
        <li>leading development on WIRED’s data-driven <PrettyLink href="https://www.wired.com/story/welfare-state-algorithms/" target="_blank">storytelling website</PrettyLink> 
        {" "}that visualized the outcome of biased real-world AI systems. (name credited at the footer)</li>
      </ul>
      <p>Thoroughly captivated by the data science behind the WIRED's investigation, I moved from India to Seattle (WA, USA) 
        to unravel the mysteries of data science and AI at the <span className={spanCN}>University of Washington</span>. With this as an additional toolkit to 
        my skillset, I seek to implement data-driven approach to solving business problems, and build performant and end-to-end
        fullstack products that help the users.</p>
      {/* <p>
      Now, I'm actively honing my skills by exploring diverse projects, ranging from{" "}
      <span className={spanCN}>churn analysis</span>{" "}to the cutting-edge realm of {" "}
      <span className={spanCN}>fine-tuning large language models</span>. Through these endeavors, 
      I'm gaining hands-on experience with experimental design methodologies and statistical machine learning, 
      solidifying my foundation for a future in ethical and impactful data science.
      </p> */}
      <p>
        To check out my previous work, you can visit the{" "}
        <PrettyLink href="/work" target="_blank">
          work
        </PrettyLink>{" "}
        section. I also have talked on the topics of web performance and optimization in{" "}
        <PrettyLink href="/speaking" target="_blank">
          conference talks
        </PrettyLink>.
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
        <PrettyLink
          href="https://www.linkedin.com/in/raagul-n/"
          target="_blank">
          linkedIn
        </PrettyLink>
        ,{" "}
        <PrettyLink href="https://github.com/beyondtheinferno" target="_blank">
          github
        </PrettyLink>
        , or {" "}
        <PrettyLink href="https://x.com/raagulnagendran" target="_blank">
          twitter
        </PrettyLink>
        .
      </p>
      
      <DarkModeToggle />
    </>
  )
}
