import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


interface NavBarProps {
	smootherRef: React.RefObject<any>
}


const NavBar = ({ smootherRef }: NavBarProps) => {


	useGSAP(() => {


		gsap.fromTo(
			"#innerNav",
			{
				backgroundColor: "rgba(1, 90, 78, 0)"
			},
			{
				// color:"#8FDBC2",
				fontStyle: "bold",
				scale: 1.1,
				backgroundColor: "rgba(1, 90, 78, 0.35)",
				backdropFilter: "blur(12px)",
				WebkitBackdropFilter: "blur(12px)",
				scrollTrigger: {
					trigger: "#home",
					start: "10% top",
					end: "40% top",
					scrub: true,
					// markers: true 
				}
			}
		)


		ScrollTrigger.create({
			trigger: "#about",
			start: "top center",
			onEnter: () => {
				gsap.to("#bubble", { left: "6.67vw", duration: 0.4, ease: "power2.out" })
			},
			onLeaveBack: () => {
				gsap.to("#bubble", { left: "0.68vw", duration: 0.4 })
			},
		})

		ScrollTrigger.create({
			trigger: "#skills",
			start: "top center",
			onEnter: () => {
				gsap.to("#bubble", { left: "19vw", duration: 0.4, ease: "power2.out" })
			},
			onLeaveBack: () => {
				gsap.to("#bubble", { left: "12.90vw", duration: 0.4 })
			},
		})
		ScrollTrigger.create({
			trigger: "#projects",
			start: "top center",
			onEnter: () => {
				gsap.to("#bubble", { left: "12.90vw", duration: 0.4, ease: "power2.out" })
			},
			onLeaveBack: () => {
				gsap.to("#bubble", { left: "6.71vw", duration: 0.4 })
			},
		})
		ScrollTrigger.create({
			trigger: "#contacts",
			start: "top center",
			onEnter: () => {
				gsap.to("#bubble", { left: "25.2vw", duration: 0.4, ease: "power2.out" })
			},
			onLeaveBack: () => {
				gsap.to("#bubble", { left: "19vw", duration: 0.4 })
			},
		})
	})

	const handleClick = (destination: String) => {
		smootherRef.current.scrollTo(destination, true)

	}

	return (
		<div className="">
			<div className="nav text-[var(--text)]  w-screen h-[4.29vw] mt-[1.19vw] flex gap-[2.38vw] justify-center items-center text-[1.19vw] fixed z-100">
				<div
					id="innerNav"
					className="relative flex gap-[2.86vw] px-[1.43vw] py-[0.95vw] rounded-[100px] backdrop-blur-md ">
					{/* bubble */}
					<div id="bubble" className="w-[4.76vw] h-[2.86vw] glass absolute top-[0.36vw] left-[0.71vw] rounded-full"></div>
					{/* <div id="bubble" className="w-[4.76vw] h-[2.86vw] glass absolute top-[0.36vw] left-[25.2vw] rounded-full"></div> */}



					<span className="cursor-pointer" onClick={() => handleClick("#home")}>Home</span>
					<span className="cursor-pointer" onClick={() => handleClick("#about")}>About</span>
					<span className="cursor-pointer" onClick={() => handleClick("#projects")}>Project</span>
					<span className="cursor-pointer" onClick={() => handleClick("#skills")}>Skills</span>
					<span className="cursor-pointer" onClick={() => handleClick("#contacts")}>Contact</span>

				</div>
			</div>
		</div>
	)
}

export default NavBar
