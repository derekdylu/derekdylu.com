import React from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const pubs = [
  {
    display: "De-Yuan Lu, Lung-Peng Cheng. 2024. (Under Anonymous Review). Submitted to the 2024 CHI Conference on Human Factors in Computing Systems (CHI '24).",
    type: "conference",
    series: "CHI '24",
    authors: ["De-Yuan Lu", "Lung-Peng Cheng"],
    title: "(Under Anonymous Review)",
    year: "2024",
    isbn: "",
    url: "",
    doi: "",
    abstract: "",
  }
]

const Publications = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto pt-6 md:pt-12 px-6 md:px-24 lg:px-36 xl:px-48">
      {
        pubs.map((pub, i) => {
          return (
            <div key={i} className="flex flex-row w-full items-center gap-x-4 hover:text-[#1a659e]" style={{ cursor: "pointer" }}>
              <h1 className="font-bold text-xl">{i+1}</h1>
              <p>{pub.display}</p>
              <ArrowForwardIcon/>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Publications