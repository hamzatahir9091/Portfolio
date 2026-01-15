import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(SplitText)

const About = () => {

	useGSAP(() => {
		gsap.from(".bigAbout", {
			scale: 5,
			scrollTrigger: {
				trigger: ".bigAbout",
				start: "bottom bottom",
				end: "top top",
				scrub: true,
				// markers: true
			}
		})

		// creating split texts logic
		const splitlines = SplitText.create(".about-text", {
			type: "chars",
			linesClass: "m-2"
		})

		gsap.from(splitlines.chars, {
			opacity: 0,
			stagger: 0.1,
			lineHeight: "0.1em",
			scrollTrigger: {
				trigger: ".bigAbout",
				start: "top 15%",
				end: "bottom 40%",
				scrub: true,
				// pin:true,
				// markers: true
			}

		})
		gsap.from(".aboutImg", {
			opacity: 0,

			scrollTrigger: {
				trigger: ".bigAbout",
				start: "top 25%",
				end: "top top",
				scrub: true,
				// pin:true,
				// markers: true
			}

		})



		return () => splitlines.revert()

	})
	return (
		<>
			<div id="about" className=" h-screen flex flex-col  items-center justify-end ">

				<div
					className="bigAbout text-[5.71vw] font-extrabold text-[#015A4E]">
					About
				</div>

				<div data-speed="2" className="content w-screen h-[70%]   flex justify-center items-center gap-[4.76vw]  ">
					<div className="aboutImg bg-[#015A4E] p-[1.67vw] rounded-[5.95vw] shadow-lg shadow-gray-400">
						<img
							className=" rounded-[4.76vw] w-[35.71vw] h-auto"
							src="/src/assets/about.png"
							alt="my-self"
						/>
					</div>
					<div>
						<div className="about-text max-w-[45.71vw] leading-relaxed space-y-[1.43vw] text-[1.19vw] text-[#000000]">
							<p>
								Hi, I’m{" "}
								<span className="text-[#008275] font-bold">Hamza</span>, a
								developer who loves building fast, smooth, and visually
								engaging digital experiences. I work with modern tools like{" "}
								<span className="text-[#008275] font-bold">Next.js</span>,{" "}
								<span className="text-[#008275] font-bold">React</span>, and{" "}
								<span className="text-[#008275] font-bold">JavaScript</span>{" "}
								to bring ideas to life.
							</p>

							<p>
								I’m passionate about creating animations, 3D interactions, and
								clean interfaces that feel intuitive and alive. Recently, I’ve
								been exploring{" "}
								<span className="text-[#008275] font-bold">Three.js</span>,{" "}
								<span className="text-[#008275] font-bold">GSAP</span>, and
								advanced frontend effects to take my work to the next level.
							</p>

							<p>
								When I’m not coding, I’m experimenting with new tools,
								polishing existing projects, or learning whatever helps me
								grow as a developer. If you’re looking for someone who builds
								fast, learns fast, and actually cares about the craft — I’m
								your guy.
							</p>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
