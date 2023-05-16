import { FC } from "react"
import styles from "./project.module.css"
import { ProjectData } from "@/data/projects"

interface Data {
  data: ProjectData
}

const Project: FC<Data> = ({ data }) => {
  const {
    title,
    brand,
    description,
    img,
    imgCaption,
    imgAlt,
    url,
    interestingDetails,
    // date,
  } = data
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <figure>
          <img className={styles.img} src={img} alt={imgAlt} />
          <figcaption className={styles.imgCaption}>{imgCaption}</figcaption>
        </figure>
      </div>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <h4 className={styles.projectTitle}>{title}</h4>
        </a>
      ) : (
        <h4 className={styles.projectTitle}>{title}</h4>
      )}
      {brand ? <h5 className={styles.brand}>{brand}</h5> : null}
      <p className={styles.description}>{description}</p>
      {interestingDetails ? (
        <p className={styles.description}>
          <b>What's interesting:</b> {interestingDetails}
        </p>
      ) : null}
    </article>
  )
}

export default Project
