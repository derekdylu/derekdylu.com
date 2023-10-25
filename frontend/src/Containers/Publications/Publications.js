import React from 'react'

const pubs = [
  {
  }
]

const Publications = () => {
  return (
    <div>
      <div className="flex flex-col mx-auto pt-4 md:pt-12 px-6 md:px-24 lg:px-36 xl:px-48">
      {
        pubs.map((pub, i) => {
          return (
            <div key={i} className="flex flex-row w-full items-center gap-x-4 md:gap-x-8">
              <h1 className="font-bold text-xl">{i+1}</h1>
              <p>{pub.display}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Publications