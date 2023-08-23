import { FC } from "react"
import Link from "next/link"
import { TalksData } from "@/data/talks"
import { kalam } from "../fonts"
import styles from "./project.module.css"

interface Data {
  data: TalksData
}

const Talks: FC<Data> = ({ data }) => {
  const {
    title,
    conferenceName,
    description,
    img,
    imgCaption,
    imgAlt,
    url,
    // date,
  } = data
  return (
    <article className={styles.project}>
      <div className={styles.sticky}>
        {url ? (
          <span className={styles.span}>
            <Link href={url} target="_blank">
              <h3 className={styles.projectTitle}>{title}</h3>
            </Link>
          </span>
        ) : (
          <h3 className={styles.projectTitle}>{title}</h3>
        )}
        {conferenceName ? (
          <h4 className={`${styles.brand} ${kalam.className}`}>
            {conferenceName}
          </h4>
        ) : null}
      </div>
      <figure className={styles.imgContainer}>
        <img className={styles.img} src={img} alt={imgAlt} />
        <figcaption className={styles.imgCaption}>{imgCaption}</figcaption>
      </figure>

      <p className={styles.description}>{description}</p>
      {/* {interestingDetails ? (
      <p className={styles.description}>
        <span className={`${styles.interesting} ${kalam.className}`}>
          What's interesting:
        </span>{" "}
        {interestingDetails}
      </p>
    ) : null} */}
    </article>
  )
}

export default Talks
