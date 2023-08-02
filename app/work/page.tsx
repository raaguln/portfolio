import projects from "@/data/projects"
import Project from "@/app/(components)/project"
import Title from "@/app/(components)/title"
import styles from "./work.module.css"

const Work = () => {
  return (
    <>
      <Title>work</Title>
      <section className={styles.section}>
        {projects.map((d, i) => (
          <Project data={d} key={i} />
        ))}
      </section>
    </>
  )
}

export default Work
