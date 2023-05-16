import projects from "@/data/projects"
import Project from "./project"

const Work = () => {
  return (
    <>
      <h1 className="">Work</h1>
      <section className="">
        {projects.map((d, i) => (
          <Project data={d} key={i} />
        ))}
      </section>
    </>
  )
}

export default Work
