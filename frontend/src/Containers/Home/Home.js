import React, {} from 'react'

import FlipCard from '../../Components/FlipCard/FlipCard'

const features = [
  {
    title: "Research Experience",
    paragraph: [
      "Intern Researcher at NTU HCI LAB",
      "I had the privilege of joining Professor Lung-Pan Cheng's lab at National Taiwan University as an intern researcher in the summers of 2022 and 2023, as well as serving as an undergraduate researcher during the academic terms. Throughout my time there, I have engaged in the design of a novel virtual reality interface using the Unity engine and conducted a series of user studies. My role expanded to lead author for a paper derived from this research, which we have submitted to CHI'24.",
    ]
  }
]

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-6 md:px-24 lg:px-36 xl:px-48 gap-2 md:gap-4">
        <FlipCard />
        <div className="text-4xl font-bold text-center">
          De-Yuan (Derek) Lu
        </div>
        <div className="md:text-xl text-center">
          Information Management at National Taiwan University
        </div>
        <div className="md:text-xl text-center">
          HCI & VR Researcher | Web Developer | Videographer
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0 w-full py-8">
        <div className="w-full h-full px-3 md:pl-12 lg:pl-18 xl:pl-24 md:text-xl md:leading-loose text-center md:text-left">
          I am a dedicated college student majoring in Information Management at <a href="https://www.ntu.edu.tw/" target="_blank" rel="noreferrer" className="underline hover:text-primary">National Taiwan University</a> (NTU).
          I am highly passionate about conducting research in the field of Human-Computer Interaction (HCI) with a particular focus on Virtual Reality (VR).
          I also possess expertise in website development and UI design.
          Beyond the tech realm, I showcase a flair for videography, with proficiency in both shooting and editing skills.
          Finally, as a former member in Creative & Entrepreneurship Program in NTU, I am interested in running projects that foster leadership and critical thinking skills.
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img src="./home/chips.png" alt="chips" className="w-1/3" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0 w-full py-8">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img src="./home/neutral.jpg" alt="neutral" className="object-cover" />
        </div>
        <div className="w-full h-full px-3 md:pl-12 md:pr-12 lg:pr-18 xl:pr-24 text-center md:text-left">
          {
            features.map((b, index) => {
              return (
                <div className="flex flex-col gap-2">
                  <div className="text-2xl font-bold">
                    {b.title}
                  </div>
                  {
                    b.paragraph.map((p, i) => {
                      return (
                        <div className="md:text-xl md:leading-loose">
                          {p}
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 w-full py-12">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="/contact">
            <div className="bg-primary hover:bg-primary-dark active:bg-primary-dark px-6 py-2 rounded-xl text-white font-bold" style={{ cursor: "pointer" }} >
              Contact Me
            </div>
          </a>
          <div className="border border-primary hover:bg-primary-dark active:bg-primary-dark px-6 py-2 rounded-xl text-primary hover:text-white active:text-white font-bold" style={{ cursor: "pointer" }} >
            Download My CV
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-primary-dark items-center gap-8 w-full py-20 mt-8 text-white text-xl font-bold">
        Flip the profile photo to see my avatar!
      </div>
    </div>
  )
}

export default Home