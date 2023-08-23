import projects from "@/data/projects"
import Project from "@/app/(components)/project"
import Title from "@/app/(components)/title"

const Work = () => {
  return (
    <>
      <Title>work</Title>
      <section>
        {projects.map((d, i) => (
          <Project data={d} key={i} />
        ))}
      </section>
    </>
  )
}

export default Work
