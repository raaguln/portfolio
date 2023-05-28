import PrettyLink from "./(components)/prettyLink"
import Title from "./(components)/title"

export default function Home() {
  return (
    <main>
      <Title>raagul nagendran</Title>
      <p>
        Your friendly neighbourhood Data Scientist / Software Engineer based out of Seattle. I love digging
        into data to uncover trends, build highly custom software experiences
        and optimizing for the fastest user experience.
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
        section.
      </p>

      <p>
        Got no time to go through all my work? No problem, here's an elevator
        pitch.
      </p>
      <p>
        You can find me on{" "}
        <PrettyLink href="https://github.com/beyondtheinferno" target="_blank">
          Github
        </PrettyLink>
        ,{" "}
        <PrettyLink href="https://www.linkedin.com/in/raagul-n/" target="_blank">
          LinkedIn
        </PrettyLink>
        , or{" "}
        <PrettyLink href="https://twitter.com/byontheinferno" target="_blank">
          Twitter
        </PrettyLink>.
      </p>
      {/* <Link href="">Mail</Link> */}
    </main>
  )
}
