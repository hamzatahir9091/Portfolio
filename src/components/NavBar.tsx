import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

interface NavBarProps {
	smootherRef: React.RefObject<any>
}
const NavBar = ({ smootherRef }: NavBarProps) => {
	const homeRef = useRef<HTMLDivElement>(null)
	const aboutRef = useRef<HTMLDivElement>(null)
	const skillsRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (!smootherRef.current) return

gsap.fromTo(
  "#innerNav",
  {
    backgroundColor: "rgba(1, 90, 78, 0)"
  },
  {
	// color:"#8FDBC2",
	fontStyle:"bold",
	scale:1.1,
    backgroundColor: "rgba(1, 90, 78, 0.35)", 
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    scrollTrigger: {
      trigger: "#home",
      start: "10% top",
      end: "40% top",
      scrub: true,
      markers: true
    }
  }
)


		ScrollTrigger.create({
			trigger: "#about",
			start: "top center",
			onEnter: () => {
				gsap.to("#bubble", { left: "112px", duration: 0.4, ease: "power2.out" })
			},
			onLeaveBack: () => {
				gsap.to("#bubble", { left: "12px", duration: 0.4 })
			},
		})

		ScrollTrigger.create({
			trigger: "#skills",
			start: "top center",
			onEnter: () => {
				gsap.to("#bubble", { left: "210px", duration: 0.4, ease: "power2.out" })
			},
			onLeaveBack: () => {
				gsap.to("#bubble", { left: "112px", duration: 0.4 })
			},
		})
	})

	const handleClick = (destination: String) => {
		smootherRef.current.scrollTo(destination, true)
	}

	return (
		<div className="text-[#00c0a6]">
			<div className="nav text-[#015A4E]  w-screen h-18 mt-5 flex gap-10 justify-center items-center text-xl fixed z-100">
				<div
					id="innerNav"
					className="relative flex gap-12 px-6 py-4 rounded-[100px] backdrop-blur-md ">
					{/* bubble */}
					<div
						id="bubble"
						className="w-20 h-12 glass absolute top-[6px] left-[12px] rounded-full"></div>

					<span onClick={() => handleClick("#home")}>Home</span>
					<span onClick={() => handleClick("#about")}>About</span>
					<span onClick={() => handleClick("#skills")}>Skills</span>
					<span onClick={() => handleClick("#skills")}>Project</span>
					<span onClick={() => handleClick("#skills")}>Contacts</span>
				</div>
			</div>
		</div>
	)
}

export default NavBar
