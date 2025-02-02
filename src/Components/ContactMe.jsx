

const ContactMe = () => {

    const contact_info = [
        { 
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg", 
          text: "kavyakapoor412@gmail.com",
          link: "mailto:kavyakapoor412@gmail.com" // Opens email app
        },
        { 
          logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn logo 
          text: "LinkedIn",
          link: "https://www.linkedin.com/in/kavyakapoor420" // Opens LinkedIn profile
        },
        { 
          logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", // India Flag
          text: "Delhi, India",
          link: "" // No link for location
        }
      ];

  return (
   
      
   
      
      <section id="contact" className="py-10 px-3 text-white">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            Contact <span className="text-cyan-600">Me</span>
          </h3>
          <p className="text-red-400 mt-3 text-lg">Get in touch</p>
      
          <div
            className="mt-16 flex md:flex-row flex-col
            gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
          >
            <form className="flex flex-col flex-1 gap-5">
              <input type="text" placeholder="Your Name" className="rounded-md p-4 text-black" />
              <input type="Email" placeholder="Your Email Address" className="rounded-md p-4 text-black"  />
              <textarea placeholder="Your Message" className="text-black rounded-md " rows={10}></textarea>
              <button className="btn-primary bg-cyan-500 w-fit rounded-md px-4 py-2 ">Send Message</button>
            </form>
      
            <div className="flex flex-col gap-7">
              {contact_info.map((contact, i) => (
                <div
                  key={i}
                  className="flex flex-row text-left gap-4 flex-wrap items-center"
                >
                  <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center bg-cyan-600 rounded-full">
                    <img src={contact.logo} alt="icon" className="w-10 h-10" />
                  </div>
                  <p className="md:text-base text-sm break-words">
                    {contact.link ? (
                      <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                        {contact.text}
                      </a>
                    ) : (
                      contact.text
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
  )
}

export default ContactMe