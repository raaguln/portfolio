import { FC } from "react"
import Link from "next/link"
import { ProjectData } from "@/data/projects"
import { kalam } from "../fonts"
import styles from "./project.module.css"

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
        <span className={styles.span}>
          <Link href={url} target="_blank">
            <h4 className={styles.projectTitle}>{title}</h4>
          </Link>
        </span>
      ) : (
        <h3 className={styles.projectTitle}>{title}</h3>
      )}
      {brand ? (
        <h4 className={`${styles.brand} ${kalam.className}`}>{brand}</h4>
      ) : null}
      <p className={styles.description}>{description}</p>
      {interestingDetails ? (
        <p className={styles.description}>
          <span className={`${styles.interesting} ${kalam.className}`}>
            What's interesting:
          </span>{" "}
          {interestingDetails}
        </p>
      ) : null}
    </article>
  )
}

export default Project
