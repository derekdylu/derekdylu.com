import React from 'react'

const contacts = [
  {
    section: 'Contact Me!',
    items: [
      {
        platform: "Instagram",
        link: "https://www.instagram.com/derekdylu",
        description: "",
      },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/derekdylu",
        description: "",
      },
      {
        platform: "Email",
        link: "mailto:derekdylu@gmail.com",
        description: "",
      },
    ]
  },
  {
    section: 'Portfolio',
    items: [
      {
        platform: "GitHub",
        link: "https://github.com/derekdylu",
        description: "",
      },
      {
        platform: "Youtube",
        link: "https://www.youtube.com/user/derekdylu",
        description: "My motion works",
      },
      {
        platform: "Behance",
        link: "https://www.behance.net/derekdylu00ae",
        description: "My design works",
      },
      {
        platform: "Instagram",
        link: "https://www.instagram.com/derekdylu_studio",
        description: "My photography album",
      },
    ]
  }
]

const Contact = () => {
  return (
    <div className="flex flex-col mx-auto pt-4 md:pt-12 pb-12 px-6 md:px-24 lg:px-36 xl:px-48 gap-16">
      {
        contacts.map((contact, index) => {
          return (
            <div className="flex flex-col gap-8 w-full items-center">
              <div className="text-xl text-primary">
                {contact.section}
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-24">
              {
                contact.items.map((item, i) => {
                  return (
                    <div className="flex flex-col gap-2 items-center">
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <div className="font-bold hover:underline" style={{ cursor: "pointer" }}>
                          {item.platform}
                        </div>
                      </a>
                      {
                        item.description &&
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      }
                    </div>
                    
                  )
                })
              }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Contact