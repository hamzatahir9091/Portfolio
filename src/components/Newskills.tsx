import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"


gsap.registerPlugin(SplitText)

const Newskills = () => {

	const skillsContainer = useRef(null)

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: ".bigSkill",
			start: "top 10%",
			endTrigger: "#skills",
			end: "bottom top",
			pin: ".bigSkill",
			// pinSpacing: true,
			// markers: true
		});
		gsap.from(".bigSkill", {
			x: -1450,
			duration: 1,
			scrollTrigger: {
				trigger: ".bigSkill",
				start: "bottom bottom",
				end: "top top",
				// scrub: true,
				// markers: true
			}
		})
		gsap.from(".bigSkill", {
			scale: 5,
			scrollTrigger: {
				trigger: ".bigSkill",
				start: "bottom bottom",
				end: "top top",
				scrub: true,
				// markers: true
			}
		})


		const tl = gsap.timeline({
			scrollTrigger: {
				  scroller: "#smooth-wrapper",

				trigger: ".horizontal",
				start: "bottom 60%",
				end: "bottom 10%",
				pin: ".pin-wrap",
				pinSpacing: true,
				scrub: true,
				invalidateOnRefresh: true,
				// markers: true
			}
		})

		tl.to(".animation-wrap", {
			xPercent: -41.6,
			ease: "slow",
		});
		tl.to(".animation-wrap-grid", {
			xPercent: 41.6,
			ease: "slow",
		}, "<");

	}, { scope: skillsContainer.current! })


	return (
		<div ref={skillsContainer} id="skills" className="">
			<div className="mainContent  w-screen min-h-screen pt-32 flex flex-col gap-24 justify-center ">
				<div className="flex justify-center w-screen">
					<div className="bigSkill text-8xl mt-10 font-extrabold text-[#015A4E]">Skills</div>
				</div>

				<div className="pin-wrap">
					<section id="titles" className="horizontal  flex items-center overflow-hidden">
						<div className="pin-wrap  flex relative ">
							<div className="animation-wrap relative grid gap-[10vw] auto-cols-max  grid-flow-col transform -translate-x-[70vw]">
								{/* extra space divs */}
								<div className="w-[40vw]"></div>
								<div className="w-[40vw]"></div>

								{/* front ttitle */}
								<div className="frontTitle   bg-[#76ada6]/50 rounded-[100px] text-5xl h-[400px] w-[40vw]  text-[#015A4E]  flex flex-col gap-8 justify-center items-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Frontend</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-xl text-center">
										<p>
											I specialize in frontend development using HTML, CSS,
											JavaScript, and React, with a strong focus on animations and
											interactive UI. I enjoy working with GSAP and SVG animations to
											create smooth, engaging user experiences, while keeping layouts
											responsive, clean, and performance-friendly.
										</p>
									</div>
								</div>

								{/* BAckend Title */}
								<div className="frontTitle  bg-[#76ada6]/50 rounded-[100px] text-5xl h-[400px] w-[40vw]  text-[#015A4E]  flex flex-col gap-8 justify-center items-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Backend</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-xl text-center">
										<p>
											I focus on building reliable and efficient backend systems that
											power real-world applications. I work with JavaScript-based
											backends, handling API development, data flow, and client-server
											communication. I pay close attention to clean architecture,
											predictable responses, and performance, ensuring the frontend
											and backend work together seamlessly.
										</p>
									</div>
								</div>
								{/* tools Title */}
								<div className="frontTitle col-start-5  bg-[#76ada6]/50 rounded-[100px] text-5xl h-[400px] w-[40vw]  text-[#015A4E]  flex flex-col gap-8 justify-center items-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Tools</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-xl text-center">
										<p>
											Alongside my frontend and backend work, I use a set of tools
											that streamline development and enhance project quality. Git and
											GitHub keep my code organized, NPM and Vite optimize builds, and
											Tailwind CSS and GSAP bring interfaces to life. Design tools
											like Figma and Illustrator help me turn concepts into polished
											visuals, while debugging and performance optimization ensure
											smooth functionality. These tools empower me to deliver clean,
											efficient, and visually engaging applications.
										</p>
									</div>
								</div>


							</div>
						</div>
					</section>

					<section id="grids" className="horizontal-grid  flex items-center overflow-hidden">
						<div className="pin-wrap  flex relative ">
							<div className="animation-wrap-grid relative grid gap-[10vw] auto-cols-max grid-flow-col transform -translate-x-[70vw]">
								{/* Frontend Skill Grid */}
								<div className="frontGrid w-[40vw] h-96 p-8 bg-[#015A4E] rounded-[100px] grid grid-cols-3 gap-0 place-items-center   ">
									{/* Example: HTML */}
									<div className="p-3 glass rounded-full hover:scale-120 transition-transform duration-300 group">

										<img
											width={80}
											height={80}
											src="/src/assets/skillsIcons/html.svg"
											alt="html"
										/>
									</div>
									{/* CSS */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/Css.svg"
											alt="css"
										/>
									</div>
									{/* JavaScript */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/javascript.svg"
											alt="javascript"
										/>
									</div>
									{/* Tailwind */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/tailwind.svg"
											alt="tailwind"
										/>
									</div>
									{/* GSAP */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/gsap.svg"
											alt="gsap"
										/>
									</div>
									{/* ThreeJS */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/threejs.svg"
											alt="threejs"
										/>
									</div>
									{/* React */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/react.svg"
											alt="react"
										/>
									</div>
								</div>

								{/* Backeend Skill Grid */}
								<div className="backGrid w-[40vw] h-96 p-8 bg-[#015A4E] rounded-[100px]   grid grid-cols-3 gap-0 place-items-center">
									{/* Express */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/expressjs.svg"
											alt="express"
										/>
									</div>
									{/* Node.js */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/node-js.svg"
											alt="node-js"
										/>
									</div>
									{/* Mongo */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/mongo.svg"
											alt="mongo"
										/>
									</div>
									{/* Next.js */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/Next.svg"
											alt="next"
										/>
									</div>
								</div>

								{/* tools Skill Grid */}
								<div className="toolGrid w-[40vw] h-96 p-8 bg-[#015A4E] rounded-[100px]   grid grid-cols-3 gap-0 place-items-center">
									{/* Git */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/git.svg"
											alt="git"
										/>
									</div>
									{/* VSCode */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/vscode.svg"
											alt="vscode"
										/>
									</div>
									{/* GitHub */}
									<div className="p-3  rounded-xl hover:scale-110 transition-transform duration-300 group">
										<img
											width={60}
											height={60}
											src="/src/assets/skillsIcons/github.svg"
											alt="github"
										/>
									</div>
								</div>

								{/* extra space divs */}
								<div className="w-[40vw]"></div>
								<div className="w-[40vw]"></div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Newskills
