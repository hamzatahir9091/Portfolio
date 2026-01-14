import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"


gsap.registerPlugin(SplitText)

const Newskills = () => {

	const skillsContainer = useRef(null)

	useGSAP(() => {

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
		// ScrollTrigger.create({
		// 	trigger: "#skills",
		// 	start: "20% 37%",
		// 	end: "bottom top",
		// 	pin: ".bigSkill",
		// 	// pinSpacing: true,
		// 	markers: true
		// });


		// animations for front grid

		// for pinning fronted
		ScrollTrigger.create({
			trigger: "#skills",
			start: "20% 40%",
			end: "30% 5%", // adjust based on how long you want it pinned
			pin: ".frontend",
			// pinSpacing: true,
			// markers: { startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20 }
		});

		// left to up
		gsap.fromTo(
			".frontGrid",
			{ y: "0vh", },
			{
				y: "-80vh",

				scrollTrigger: {
					trigger: "#skills",
					start: "50% 55%",
					end: "50% 25%",
					// pin: ".frontend",
					// markers: true,
					scrub: true
				},
			}

		)
		// right to left
		gsap.fromTo(
			".frontGrid",
			{ x: 0, y: "0vh", },
			{
				x: "-49vw",
				y: "0vh",

				scrollTrigger: {
					trigger: "#skills",
					start: "50% 65%",
					end: "50% 55%",
					// markers: true,
					scrub: true
				},
			}
		)
		// down to up right
		gsap.fromTo(
			".frontGrid",
			{ y: "60vh", x: 0 },
			{
				y: "0vh",
				x: 0,

				scrollTrigger: {
					trigger: "#skills",
					start: "50% 90%",
					end: "50% 80%",
					// markers: true,
					scrub: true
				},
			}

		)

		// // // animations for front title
		// left to up
		gsap.fromTo(
			".frontTitle",
			{ y: "0vh", },
			{
				y: "-80vh",

				scrollTrigger: {
					trigger: "#skills",
					start: "40% 50%",
					end: "40% 20%",
					// markers: true,
					scrub: true
				},
			}

		)
		// right to left
		gsap.fromTo(
			".frontTitle",
			{ x: "49vw", y: "0vh" },
			{
				x: 0,
				y: "0vh",

				scrollTrigger: {
					trigger: "#skills",
					start: "20% 30%",
					end: "20% 20%",
					// markers: true,
					scrub: true
				},
			}
		)
		// down to up right
		gsap.fromTo(
			".frontTitle",
			{ y: "60vh", x: "49vw" },
			{
				y: 0,
				x: "49vw",

				scrollTrigger: {
					trigger: "#skills",
					start: "20% 40%",
					end: "20% 30%",

					// markers: true,
					scrub: true
				},
			}

		)





		// // animations for back title
		ScrollTrigger.create({
			trigger: "#skills",
			start: "40% 43%",
			end: "50% 15%",
			pin: ".backend",
			// pinSpacing: true,
			// markers: true
		});

		// center to left
		gsap.fromTo(
			".backTitle",
			{ x: "-25vw", y: -400 },
			{
				y: -400,
				x: "-95vw",
				scrollTrigger: {
					trigger: "#skills",
					start: "65% 50%",
					end: "65% 30%",
					// markers: true,
					scrub: true
				},
			}
		)
		// right to left
		gsap.fromTo(
			".backTitle",
			{ x: "45vw", y: -400 },
			{
				y: -400,
				x: "-25vw",
				scrollTrigger: {
					trigger: "#skills",
					start: "65% 80%",
					end: "65% 60%",
					// markers: true,
					scrub: true
				},
			}
		)

		// // animations for back grid
		// center to right
		gsap.fromTo(
			".backGrid",
			{ x: "24vw" },
			{
				x: "95vw",
				scrollTrigger: {
					trigger: "#skills",
					start: "65% 50%",
					end: "65% 30%",
					// markers: true,
					scrub: true
				},
			}
		)
		// left to right
		gsap.fromTo(
			".backGrid",
			{ x: "-45vw" },
			{
				x: "24vw",
				scrollTrigger: {
					trigger: "#skills",
					start: "65% 80%",
					end: "65% 60%",
					// markers: true,
					scrub: true
				},
			}
		)


		// // animations for tool title
		ScrollTrigger.create({
			trigger: "#skills",
			start: "95% 80%",
			end: "bottom 60%",
			pin: ".tool",
			// pinSpacing: true,
			// markers: true
		});

		// top to center
		gsap.fromTo(
			".toolTitle",
			{ y: -900 },
			{
				y: 0,

				scrollTrigger: {
					trigger: "#skills",
					start: "95% bottom",
					end: "95% 80%",
					// markers: true,
					scrub: true
				},
			}
		)
		// center to bottom
		gsap.fromTo(
			".toolTitle",
			{ y: 0 },
			{
				y: 700,

				scrollTrigger: {
					trigger: "#skills",
					start: "95% 70%",
					end: "95% 50%",
					// markers: true,
					scrub: true
				},
			}
		)
		gsap.fromTo(
			".toolTitle",
			{ opacity: 1 },
			{
				opacity: 0,

				scrollTrigger: {
					trigger: "#skills",
					start: "95% 51%",
					end: "95% 50%",
					// markers: true,
					scrub: true
				},
			}
		)
		gsap.fromTo(
			".toolTitle",
			{ opacity: 0 },
			{
				opacity: 1,

				scrollTrigger: {
					trigger: "#skills",
					start: "95% bottom",
					end: "95% 99%",
					// markers: true,
					scrub: true
				},
			}
		)

		// // // animations for back grid
		// // center to top
		gsap.fromTo(
			".toolGrid",
			{ y: 0 },
			{
				y: -900,

				scrollTrigger: {
					trigger: "#skills",
					start: "95% 70%",
					end: "95% 50%",
					// markers: true,
					scrub: true
				},
			}
		)
		// bottom to center
		gsap.fromTo(
			".toolGrid",
			{ y: 700 },
			{
				y: 0,

				scrollTrigger: {
					trigger: "#skills",
					start: "95% bottom",
					end: "95% 80%",
					// markers: true,
					scrub: true
				},
			}
		)


	}, { scope: skillsContainer })


	return (
		<div ref={skillsContainer} id="skills" className="">
			<div className="mainContent  w-screen min-h-screen pt-32 flex flex-col gap-24 justify-center items-center">
				<div className="bigSkill text-8xl mt-10 font-extrabold text-[#015A4E]">Skills</div>

				<div className="frontend  w-screen p-10 flex gap-12 justify-around items-center">
					{/* Frontend Title */}
					<div className="frontTitle z-10 bg-[#76ada6]/50 rounded-[100px] text-5xl h-[400px] w-[40%]  text-[#015A4E]  flex flex-col gap-8 justify-center items-center">
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

					{/* Frontend Skill Grid */}
					<div className="frontGrid z-[5] w-[40%]  h-96 p-8 bg-[#015A4E]  rounded-[100px] grid grid-cols-3 gap-0 place-items-center   ">
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
				</div>
				<div className="backend w-screen p-10 flex gap-12 justify-around items-center">
					{/* Backeend Skill Grid */}
					<div className="backGrid w-[40%]  h-96 p-8 bg-[#015A4E]  rounded-[100px]   grid grid-cols-3 gap-0 place-items-center">
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

					{/* BAckend Title */}
					<div className="backTitle bg-[#76ada6]/50 rounded-[100px] text-5xl h-[400px] w-[40%]  text-[#015A4E]  flex flex-col gap-8 justify-center items-center">
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
				</div>
				<div className="tool  mb-36 w-screen p-10 flex gap-12 justify-around items-center">
					{/* tools Title */}
					<div className="toolTitle bg-[#76ada6]/50 rounded-[100px] text-5xl h-[400px] w-[40%]  text-[#015A4E]  flex flex-col gap-8 justify-center items-center">
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

					{/* tools Skill Grid */}
					<div className="toolGrid w-[40%]  h-96 p-8 bg-[#015A4E]  rounded-[100px]   grid grid-cols-3 gap-0 place-items-center">
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
				</div>
			</div>
		</div>
	)
}

export default Newskills
