import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';


const Contacts = () => {

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tjpbmjb",
        "template_ez4oo5d",
        formRef.current,
        "wLWHm9BolnGJ9LU88"
      )
      .then(
        () => {
          alert("Message sent ✅");
          formRef.current.reset();
        },
        () => {
          alert("Failed ❌");
        }
      );
  };

  useGSAP(() => {

    // animation for scaling out projectt heading
    gsap.to(".bigContact", {
      scale: 1,
      scrollTrigger: {
        trigger: ".contactwrap",
        start: "top 60%",
        end: "center top",
        scrub: true,
        // markers: true
      }
    })


  })
  return (
    <>
      <div id='contacts' className='h-screen z-110 w-screen'>

        <div className="contactwrap flex items-center justify-center h-[30vh]">
          <div className="bigContact text-[6vw] transform scale-[4] font-erode font-extrabold ">
            Contact
          </div>
        </div>
        <div className="lower  flex  justify-around">
          <div className="left w-[40%]">

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className=" w-[100%] space-y-4 font-clashDisplay"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                autoComplete='new-name'
                className="w-full mt-10 rounded-lg focus:outline-none appearance-none placeholder-[var(--text)]   focus:placeholder:opacity-50   autofill:bg-transparent autofill:text-[var(--text)] autofill:shadow-[0_0_0px_1000px_transparent_inset] transition-all duration-300"
              />
              <div className="h-0.5 w-[80%] bg-[var(--text)]"></div>

              <input
                type="email"
                name="reply_to"
                placeholder="Email"
                required
                autoComplete='off'
                className="w-full mt-10 rounded-lg focus:outline-none appearance-none placeholder-[var(--text)]   focus:placeholder:opacity-50   autofill:bg-transparent autofill:text-[var(--text)] autofill:shadow-[0_0_0px_1000px_transparent_inset] transition-all duration-300"
              />
              <div className="h-0.5 w-[80%] bg-[var(--text)]"></div>
              

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full mt-10 rounded-lg resize-none focus:outline-none appearance-none placeholder-[var(--text)]   focus:placeholder:opacity-50 placeholder:   autofill:bg-transparent autofill:text-[var(--text)]  autofill:shadow-[0_0_0px_1000px_transparent_inset] transition-all duration-300"
              />
              <div className="h-0.5 w-[80%] bg-[var(--text)]"></div>


              <button
                type="submit"
                className="w-full bg-indigo-600 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>

          </div>
          <div className="right w-[30%]  font-clashDisplay">
            <div className="text flex flex-col gap-10">
              <div className="heading font-erode font-semibold text-6xl">Get in touch</div>
              <div className="sub font-erode font-medium text-2xl">I'd like to hear from you!</div>
              <div className="para text-xl"><p>If you have any queries or just wanna say hi,</p>
                <p>please use the contact form</p></div>
            </div>
          </div>
        </div>

      </div></>
  )
}

export default Contacts