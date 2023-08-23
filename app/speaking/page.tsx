import talks from "@/data/talks"
import Title from "@/app/(components)/title"
import Talks from "../(components)/talks"

const Work = () => {
  return (
    <>
      <Title>talks</Title>
      <section>
        {talks.map((d, i) => (
          <Talks data={d} key={i} />
        ))}
      </section>
    </>
  )
}

export default Work
