export interface ProjectData {
  title: string
  brand: string
  description: string
  interestingDetails: string
  img: string
  imgAlt: string
  imgCaption: string
  url: string
  date: string
}

const projects: ProjectData[] = [
  {
    title: "Inside the Suspicion Machine",
    brand: "WIRED",
    description:
      "Developed the interactive scrollytelling website that highlighted how a machine learning algorithm fostered discrimination and biases in real life. Converted 2 years of investigative reporting (Lighthouse Reports + WIRED) using engaging visualizations in a digestable format for public consumption.",
    interestingDetails:
      "Screen reader accessible. The distribution chart (CROSSING THE LINE) animates thousands of SVG <circle> elements at ~60fps, even on mobile devices. How does this happen? Find out here.",
    img: "images/data-story-lab.png",
    imgAlt:
      "Distribution chart highlighting the algorithm's biased decision making.",
    imgCaption:
      "Distribution chart highlighting the algorithm's biased decision making.",
    url: "https://www.wired.com/story/welfare-state-algorithms/",
    date: "",
  },
  {
    title: "2020, What a Year",
    brand: "Condé Nast",
    description: `Internal scrollytelling website analyzing trends and patterns from Condé Nast articles.
      Consists of animated cluster charts, parallax image gallery, custom visualizations and lots more - 
      all animated through scroll-triggers.`,
    interestingDetails: `A lot of performance optimizations were done to ensure core web vitals along
     with FCP and TTI had the best score possible. We are talking about Web Workers, animation optimizations,
     rendering optimizations and lazy loading.`,
    img: "images/what-a-year.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://2020whatayear.conde.io/",
    date: "",
  },
  {
    title: "Custom Thanksgiving Menu Quiz",
    brand: "Epicurious",
    description: `Developed an interactive quiz customizes a highly curated and tailored Thanksgiving menu from 172
    possible recipes based on user’s choices. `,
    interestingDetails: `3x longer time spent than average Epicurious article. Got featured on Fox10 news. Using editorial guidance for building the menu based on user's input, we built a custom
    decision tree (algorithm for the app + visualization to debug all possible recommendations).`,
    img: "images/epi-thanksgiving-quiz.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://www.epicurious.com/recipes-menus/quiz-thanksgiving-menu-ideas-article",
    date: "",
  },
  {
    title: "Karl Lagerfeld - A Celebration",
    brand: "Vogue",
    description:
      "Developed a tribute website to demonstrate ten designers celebrating the legacy of Karl Lagerfeld, the theme for Met Gala 2023.",
    interestingDetails: "",
    img: "images/data-story-lab.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://www.vogue.com/article/karl-lagerfeld-tribute-may-2023-cover",
    date: "",
  },
  {
    title: "Portfolio - Data Story Lab",
    brand: "Condé Nast",
    description:
      "Portfolio website for the Data Story Lab team - the data visualization team from Condé Nast which I was a part of.",
    interestingDetails:
      "The parallax effects were fun to develop, and are more fun to play around with!",
    img: "images/data-story-lab.png",
    imgAlt: "Landing page of the Data Story Lab team's portfolio page.",
    imgCaption: "Landing page of the Data Story Lab team's portfolio page.",
    url: "https://datavisualization.condenast.com/",
    date: "",
  },
  {
    title: "Mapping the Flavors of China",
    brand: "Epicurious",
    description:
      "An interactive China map to highlight the regional cuisine specialities. Engage with the map on desktop using hover, and explore the cuisines on mobile through a touch-friendly map layout.",
    interestingDetails: `Managing the hover popups for each region was challenging. Allowing
     recipe links to be accessible while moving within the popup, avoiding overlap between
     the popups and preventing popup glitch / jerk between regions across different layouts was ... fun.`,
    img: "images/epi-chinese-recipe-map.png",
    imgAlt:
      "Interactive China map that showcases a region's special cuisine on hover.",
    imgCaption:
      "Interactive China map that showcases a region's special cuisine on hover.",
    url: "https://www.epicurious.com/recipes-menus/regional-cuisine-china-map",
    date: "",
  },
  {
    title: "Where Should You Go On Vacation Next?",
    brand: "Condé Nast Traveller",
    description: `This interactive quiz recommends the ideal place for a vacation from a list of travel destinations curated by the editors based on user's choices.`,
    interestingDetails: `This was our first quiz project, and there was a lot of debugging done to get the logic right.
      Ensuring that all possible pathways were covered and enabled the user to reach a travel destination.`,
    img: "images/cnt-vacation-quiz.png",
    imgCaption: "A quiz to help you find your dream vacation.",
    imgAlt: "Landing page of the Vacation Quiz.",
    url: "https://www.cntraveler.com/story/where-should-you-go-on-vacation-next",
    date: "",
  },
  {
    title: "Find your Perfect Headphone Quiz",
    brand: "WIRED",
    description: `This interactive quiz recommends the best earbuds and headphones from a curated collection of 
      the best musical mates based on user's requirements.`,
    interestingDetails: `Having built a couple of quizzes by this point, the logic implementation was a walk in the park.
      But the challenging part was the headphone jack connecting the entire quiz and making sure that it stayed responsive.`,
    img: "images/wired-headphone-quiz.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://www.wired.com/story/best-headphones-or-earbuds-for-you-quiz/",
    date: "",
  },

  {
    title: "Truth or Dare Idea Generator",
    brand: "Teen Vogue",
    description:
      "This tool helps the users generate weird dares and salicious truths for a spicy truth or dare game.",
    interestingDetails: `The paper unfold animation. Had fun developing it, had fun testing and debugging it, still having fun clicking through the dares after launch.`,
    img: "images/truth-or-dare.png",
    imgAlt:
      "The questions generator app lives in an iframe within the main article. Clicking on either of the jars will result in a two-stage paper unfold animation to reveal the question.",
    imgCaption:
      "The questions generator app lives in an iframe within the main article. Clicking on either of the jars will result in a two-stage paper unfold animation to reveal the question.",
    url: "https://www.teenvogue.com/story/truth-or-dare-online-game-and-idea-generator",
    date: "",
  },
  {
    title: "Shoppable Wedding Moodboard",
    brand: "Glamour",
    description:
      "An interactive moodboard to curate your wedding guest look and shop the look.",
    interestingDetails: "",
    img: "images/glamour-wedding-moodboard.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://www.glamour.com/story/wedding-guest-dress-packing-list",
    date: "",
  },
  {
    title: "Reader's Poll 2021",
    brand: "Pitchfork",
    description: "This was a project for Pitchfork.",
    interestingDetails: "",
    img: "images/pitchfork-readers-poll.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://pitchfork.com/features/lists-and-guides/2021-readers-poll-results/",
    date: "",
  },
  {
    title: "People's List 25th Anniversary",
    brand: "Pitchfork",
    description:
      "For their 25th Anniversary, we developed a interactive scrollytelling narrative to let user's explore their rankings.",
    interestingDetails: "",
    img: "images/pitchfork-people-list.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://pitchfork.com/features/lists-and-guides/peoples-list-25th-anniversary/",
    date: "",
  },
  {
    title: "My Way To Well",
    brand: "SELF",
    description: `Developed "The Numbers" section in both Migraine & Psoriasis pages.`,
    interestingDetails: "",
    img: "images/my-way-to-well.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://www.self.com/package/my-way-to-well",
    date: "",
  },
  {
    title: "Thanksgiving Side Dish Personality Quiz",
    brand: "Bon Appetit",
    description: "",
    interestingDetails: "",
    img: "images/ba-thanksgiving-side-dish.png",
    imgAlt: "",
    imgCaption: "",
    url: "https://www.bonappetit.com/story/thanksgiving-sides-personality-quiz",
    date: "",
  },
  // {
  //   title: "What Unites Us",
  //   brand: "Glamour",
  //   description: "",
  //   img: "images/glamour-what-unites-us.png",
  //   imgAlt: "",
  //   url: "https://www.glamour.com/story/what-unites-us-migraines",
  //   date: "",
  // },
  // {
  //   title: "Foodie Gift Guide Quiz",
  //   brand: "Epicurious",
  //   description: "",
  //   img: "images/epi-foodie-gift.png",
  //   imgAlt: "",
  //   url: "https://www.epicurious.com/shopping/gift-guide-quiz-article",
  //   date: "",
  // },
]

export default projects
