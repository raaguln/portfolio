export interface TalksData {
  title: string
  conferenceName: string
  description: string
  img: string
  imgAlt: string
  imgCaption: string
  url: string
  date: string
}

const talks: TalksData[] = [
  {
    title:
      "Optimization Strategies for Building Performant Data Visualizations",
    conferenceName: "React Global Summit",
    description: "Talk starts at 2h 24m 41s.",
    img: "images/react-global-summit.png",
    imgAlt: "Screencapture of my talk show live streamed on YouTube.",
    imgCaption: "Screencapture of my talk show live streamed on YouTube.",
    url: "https://www.youtube.com/watch?v=0HhWIvPhbu0&list=PLUXa0Jhsedd0yWI8W6qzD-RsiKygmia6L&t=8681s",
    date: "",
  },
  {
    title:
      "Optimization Strategies for Building Performant Data Visualizations",
    conferenceName: "React India",
    description: "Talk starts at 3h 56m 11s.",
    img: "images/react-india.png",
    imgAlt: "Screencapture of my talk show live streamed on YouTube.",
    imgCaption: "Screencapture of my talk show live streamed on YouTube.",
    url: "https://www.youtube.com/watch?v=_JuLIGeXsxI&list=PLUXa0Jhsedd0yWI8W6qzD-RsiKygmia6L&t=14171s",
    date: "",
  },
]

export default talks
