import projects from "@/data/projects"
import Project from "../(components)/project"
import Title from "../(components)/title"

const Work = () => {
  return (
    <>
      <Title>work</Title>
      <section className="">
        {projects.map((d, i) => (
          <Project data={d} key={i} />
        ))}
      </section>
    </>
  )
}

export default Work
