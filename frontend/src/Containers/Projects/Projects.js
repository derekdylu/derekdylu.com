import React, {useState} from 'react';
import ReactPlayer from 'react-player'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const projs = [
  {
    type: "research",
    title: "(Under Anonymous Review)",
    year: "2024",
    roles: ["Lead Author", "Undergraduate Researcher"],
    abstract: "",
    awards: ["Submitted to CHI '24"],
    images: ["./projs/pending.jpg"],
    links: [],
  },
  {
    type: "development",
    title: "花開富貴：找到你靈魂中的稀有植物",
    year: "2023",
    roles: ["Developer", "Project Manager"],
    abstract: "花開富貴：找到你靈魂中的稀有植物 is an online interactive game that aims to promote a documentary supervised by Li-Chou Yang.",
    awards: [],
    images: ["./projs/proj_PH.jpg"],
    links: [
      {
        type: "website",
        url: "https://gx-plant-hunter.netlify.app/",
      },
      {
        type: "github",
        url: "https://github.com/derekdylu/plant-hunter",
      },
    ],
    month: 7
  },
  {
    type: "business",
    title: "Green Drive Thru",
    year: "2023",
    roles: ["Developer", "Video Director & Editor", "Team Member"],
    abstract: "Green Drive Thru is a student-run project that aims to provide ESG consulting services for small and midium size firms in Taiwan.",
    awards: [],
    images: ["https://www.youtube.com/watch?v=L0tHcHgfm9g"],
    links: [
      {
        type: "website",
        url: "https://greendrivethru.com.tw/",
      },
    ],
  },
  {
    type: "development",
    title: "Website of TAICHI 2023",
    year: "2023",
    roles: ["Developer", "Web Team Lead (Student Volunteer)"],
    abstract: "TAICHI (Taiwanese Association of Computer-Human Interaction) 2023 is an academic conference in Taiwan.",
    awards: [],
    images: ["./projs/proj_TAICHI.jpg"],
    links: [
      {
        type: "website",
        url: "https://taichi2023.taiwanchi.org/",
      },
    ],
    month: 8
  },
  {
    type: "development",
    title: "Website of OPENHCI 2023",
    year: "2023",
    roles: ["Developer", "Web Team Lead"],
    abstract: "OPENHCI (Open Human-Computer Interaction) 2023 is a student-run workshop aims to promote the HCI community in Taiwan.",
    awards: [],
    images: ["https://www.2023.openhci.com/og.png"],
    links: [
      {
        type: "website",
        url: "https://www.2023.openhci.com/",
      },
    ],
    month: 8
  },
  {
    type: "development",
    title: "純心找茶",
    year: "2023",
    roles: ["Developer"],
    abstract: "純心找茶 is an online interactive game aims to promote Taiwan's tea industry.",
    awards: [],
    images: ["./projs/proj_TEA.jpg"],
    links: [
      {
        type: "website",
        url: "https://ntu-tea-tinder.netlify.app/",
      },
      {
        type: "github",
        url: "https://github.com/derekdylu/tea-project",
      }
    ],
    month: 3
  },
  {
    type: "development",
    title: "ㄟ今晚吃什麼",
    year: "2022",
    roles: ["Developer"],
    abstract: "ㄟ今晚吃什麼 is an online interactive game aims to promote the certificates of Traceable Agricultural Products in Taiwan.",
    awards: [],
    images: ["./projs/proj_TAP.jpg"],
    links: [
      {
        type: "website",
        url: "https://ntu-tap-game.netlify.app/",
      },
      {
        type: "github",
        url: "https://github.com/derekdylu/TAP-Project",
      }
    ],
    month: 9
  },
  {
    type: "design",
    title: "PDOGS 6",
    year: "2021",
    roles: ["UI Designer"],
    abstract: "PDOGS 6, Programming Design Online Grading System 6, is a student-developed programming grading system for courses in National Taiwan University.",
    awards: [],
    images: ["./projs/proj_PDOGS.jpg"],
    links: [
      {
        type: "website",
        url: "https://pdogs.ntu.im/",
      },
    ],
    month: 9
  },
  {
    type: "design",
    title: "GOTCHA",
    year: "2021",
    roles: ["UI Designer", "Video Director & Editor", "Team Member"],
    abstract: "GOTCHA is a Figma Prototype that aims to solve the inequality in philanthropic campaigns by enhanced user experience design.",
    awards: ["HTC Award in the Final of 2020 Transaction Award"],
    images: ["https://www.youtube.com/watch?v=YXzMDNRGixM"],
    links: [],
    month: 8
  },
  {
    type: "business",
    title: "都市主動一次性廢棄物減量方案",
    year: "2020",
    roles: ["Team Member", "Video Director & Editor"],
    abstract: "",
    awards: ["Third Prize in the SemiFinal of 2020 ATCC"],
    images: ["https://www.youtube.com/watch?v=XUwKLfbly40"],
    links: [],
  },
  {
    type: "business",
    title: "The Harvard College Project for Asian and International Relations (HPAIR) 2021",
    year: "2021",
    roles: ["Marketing & Multimedia Associate"],
    abstract: "The Harvard College Project for Asian and International Relations is a student-led not-for-profit organization associated with the Harvard University Faculty of Arts and Sciences.",
    awards: [],
    images: ["https://www.youtube.com/watch?v=NLEwr0BYjSI"],
    links: [],
    month: 7
  },
  {
    type: "business",
    title: "IM Night 2021 (I'm in love with) Organizing Team",
    year: "2021",
    roles: ["President of the Team"],
    abstract: "IM Night, named I'm in love with in 2021, is a student-run event in department of Information Management in National Taiwan University having several performances including dance, drama, and magic show...",
    awards: [],
    images: ["./projs/proj_IMN.jpg"],
    links: [],
    month: 5
  },
  {
    type: "design",
    title: "Visual Identity of 2021 IM Camp (IMAGE)",
    year: "2021",
    roles: ["Art Director"],
    abstract: "IM Camp, named IMAGE in 2021, is a student-run camp in department of Information Management in National Taiwan University that aims to help high school students to understand the department and the university.",
    awards: [],
    images: ["./projs/proj_IMAGE.jpg"],
    links: [
      {
        type: "behance",
        url: "https://www.behance.net/gallery/108325727/2021-IMAGE-Visual-Identity",
      },
    ],
    month: 7
  },
  {
    type: "design",
    title: "Visual Identity of IMSA (Student Association of Department of Information Management at National Taiwan University)",
    year: "2020",
    roles: ["Art Director"],
    abstract: "",
    awards: [],
    images: ["./projs/proj_IMSA.jpg"],
    links: [
      {
        type: "behance",
        url: "https://www.behance.net/gallery/107929555/_",
      },
    ],
  },
  {
    type: "multimedia",
    title: "Semicolon",
    year: "2019",
    roles: ["Director", "Editor"],
    abstract: "A music video that has claimed 300K views on Youtube and was mentioned by ETtoday.",
    awards: [],
    images: ["https://www.youtube.com/watch?v=j4yb5hQmXLM"],
    links: [],
  },
  {
    type: "multimedia",
    title: "Schizophrenia",
    year: "2017",
    roles: ["Director", "Editor"],
    abstract: "",
    awards: [],
    images: ["https://www.youtube.com/watch?v=_VqhbPRblzk"],
    links: [],
  },
  {
    type: "multimedia",
    title: "Hsin Chu Senior High School Beyond Beauty",
    year: "2016",
    roles: ["Director", "Editor"],
    abstract: "A drone film featuring Hsin Chu Senior High School and was used as official introduction for years.",
    awards: [],
    images: ["https://www.youtube.com/watch?v=m14O9VJkdZ0"],
    links: [],
  }
]

const Projects = () => {
  const [page, setPage] = useState(0);

  const handleChange = (event, newValue) => {
    setPage(newValue);
  }

  const switchProjs = (projs) => {
    switch (page) {
      case 0:
        return projs.filter((proj) => proj.type === "research")
      case 1:
        return projs.filter((proj) => proj.type === "development")
      case 2:
        return projs.filter((proj) => proj.type === "design")
      case 3:
        return projs.filter((proj) => proj.type === "multimedia")
      case 4:
        return projs.filter((proj) => proj.type === "business")
      default:
        return projs
    }
  }

  const orderProjs = (projs, criteria = "year", criteria_2 = "month", ascending = false) => {
    if (criteria) {
      if (ascending) {
        return projs.sort((a, b) => a[criteria_2] < b[criteria_2] ? 1 : -1).sort((a, b) => a[criteria] > b[criteria] ? 1 : -1)
      } else {
        return projs.sort((a, b) => a[criteria_2] > b[criteria_2] ? 1 : -1).sort((a, b) => a[criteria] < b[criteria] ? 1 : -1)
      }
    } else {
      return projs
    }
  }

  return (
    <div>
      <div className="flex flex-col mx-auto pb-12 px-6 md:px-24 lg:px-36 xl:px-48 gap-4 md:gap-8">
        <div className="flex flex-row w-full overflow-scroll sm:justify-center">
          <div className="flex flex-row w-fit gap-1 my-4">
            <Tabs value={page} onChange={handleChange} textColor="primary" indicatorColor="primary">
              <Tab label="Research" />
              <Tab label="Development" />
              <Tab label="Design" />
              <Tab label="Multimedia" />
              <Tab label="Business" />
            </Tabs>
          </div>
        </div>
      {
        orderProjs(switchProjs(projs)).map((proj, i) => {
          return (
            <div key={i} className="flex flex-col w-full h-fit md:flex-row gap-4 md:gap-12 border px-4 md:px-12 py-4 rounded-3xl">
              <div className="flex flex-col items-center min-w-full md:min-w-[400px] overflow-hidden">
              {
                proj.images[0].includes("www.youtube.com") ? (
                  <ReactPlayer url={proj.images[0]} width="390px" height="220px"/>
                ) : (
                  <img src={proj.images[0]} alt={proj.title + "img"} className="h-full max-w-sm object-cover object-center border overflow-hidden"/>
                )
              }
              </div>
              <div className="flex flex-col gap-1">
                <img src={"./chips/" + proj.type + ".png"} alt="chip" className="h-6 w-fit" />
                <p className="text-xl font-bold">{proj.title}</p>
                <p className="text-sm font-bold text-gray-600">{proj.year} | {proj.roles.join(", ")}</p>
                <p className="text-sm font-bold text-primary">{proj.awards.join(", ")}</p>
                <div className="flex flex-row gap-4">
                  {
                    proj.links.map((link, j) => {
                      return (
                        <a key={j} href={link.url} target="_blank" rel="noreferrer">
                          {link.type === "github" && <GitHubIcon sx={{ color: "grey" }}/>}
                          {link.type === "website" && <PublicIcon sx={{ color: "grey" }}/>}
                          {link.type === "behance" && <ImportContactsIcon sx={{ color: "grey" }}/>}
                        </a>
                      )
                    })
                  }
                </div>
                <p className="text-sm mt-4">{proj.abstract}</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Projects