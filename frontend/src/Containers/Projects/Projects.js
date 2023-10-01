import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

const projs = [
  {
    type: "research",
    title: "Mamamia",
    year: "2021",
    abstract: "Lorem Ipsum is Lorem Ipsum",
    roles: ["Developer", "Coordinator"],
    awards: ["Developer Award"],
    images: ["https://via.placeholder.com/150"],
    links: [
      {
        type: "github",
        url: "https://github.com",
      },
      {
        type: "website",
        url: "https://example.com",
      },
    ],
  }
]

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto pt-6 md:pt-12 px-6 md:px-24 lg:px-36 xl:px-48">
      {
        projs.map((proj, i) => {
          return (
            <div key={i} className="flex flex-col w-full md:flex-row gap-4 md:gap-12">
              <img src={proj.images[0]} alt={proj.title + "img"} className="h-full"/>
              <div className="flex flex-col h-full">
                <p>{proj.type} | {proj.year}</p>
                <p>{proj.title}</p>
                <p>{proj.roles.join(", ")} | {proj.awards.join(", ")}</p>
                <p>{proj.abstract}</p>
                <div className="flex flex-row gap-4">
                  {
                    proj.links.map((link, j) => {
                      return (
                        <a key={j} href={link.url} target="_blank" rel="noreferrer">
                          {
                            link.type === "github" ? (
                              <GitHubIcon sx={{ color: "grey" }}/>
                            ) : (
                              <PublicIcon sx={{ color: "grey" }}/>
                            )
                          }
                        </a>
                      )
                    })
                  }
                </div>
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