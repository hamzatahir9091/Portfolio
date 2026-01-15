import { useGSAP } from "@gsap/react"
import logosData from "../assets/logosdata"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

gsap.registerPlugin(MorphSVGPlugin)
gsap.registerPlugin(SplitText)

const Home = () => {
	useGSAP(() => {
		// timeline for initial animations
		const tl = gsap.timeline({

		})

		// creating split texts logic
		const splitfirst = SplitText.create(".firstline", {
			type: "chars",
		})
		const splitname = SplitText.create(".name", {
			type: "chars",
		})
		const splitsexond = SplitText.create(".secondline", {
			type: "words",
		})

		// Use a direct gsap.from() call
		tl.from(
			".leftbrac",
			{
				opacity: 0,
				x: "14.88vw",
				duration: 0.5,
				stagger: 0.05,
				ease: "none",
			},
			"+=0.5"
		)
			.from(
				".rightbrac",
				{
					opacity: 0,
					x: "-14.88vw",
					duration: 0.5,
					stagger: 0.05,
					ease: "none",
				},
				"<"
			)
			.from(
				".imgWrapper",
				{

					scaleY: 0,
					duration: 0.6,
					borderRadius:0,
					stagger: 0.05,
					ease: "none",
				},
				"<"
			)
			.from(
				".me",
				{

					opacity: 0,
					duration: 0.8,
					stagger: 0.05,
					ease: "none",
				},
				">"
			)


			.from(
				splitfirst.chars,
				{
					opacity: 0,
					y: "0.24vw",
					duration: 0.5,
					stagger: 0.05,
					ease: "none",
				},
				">"
			)
			.from(splitname.chars, {
				opacity: 0,
				y: "0.24vw",
				duration: 0.5,
				stagger: 0.05,
				ease: "none",
			})
			//  setting at initial position

			// moving out
			.from(
				".lefttag",
				{
					opacity: 0,
					x: "16.67vw",
					duration: 0.5,
					stagger: 0.05,
					ease: "none",
				},
				"+=0.5"
			)
			.from(
				".righttag",
				{
					opacity: 0,
					x: "-16.67",
					duration: 0.5,
					stagger: 0.05,
					ease: "none",
				},
				"<"
			)
			.from(splitsexond.words, {
				opacity: 0, // start invisible
				// y: 20, // small offset
				duration: 0.5, // duration for each word
				stagger: {
					each: 0.3, // delay between each word
					from: "start", // animation order
				},
				ease: "power1.out",
			})

		//  second animation

		// useGSAP cleanup: This automatically runs when the component unmounts
		return () => {
			splitfirst.revert()
			splitname.revert()
			splitsexond.revert()
		}
	})

	return (
		<>
			<div id="home" className="">
				<div
					className={`homeScreen min-h-screen min-w-screen flex flex-col justify-center items-center transition-all duration-300 ease-in-out  relative `}>
					<div className="mainContent  min-w-screen flex flex-row justify-center items-center ">
						<div className="home-text text-[#015A4E]  w-1/2 h-screen flex flex-col justify-center items-center  ">
							<div className="mainText text-[2.86vw] flex gap-[0.71vw] justify-center items-center">
								<span className="leftbrac  text-[3.57vw]">&lt;&nbsp;</span>
								<span className="firstline">
									<span>Hello, I'm</span>
								</span>
								<span className="name text-[4.29vw] text-[#015A4E] font-extrabold inline-block">
									{" "}
									HAMZA
								</span>{" "}
								<span className="rightbrac  text-[3.57vw]">&nbsp;/&gt;</span>
							</div>

							<div className="sectext text-[3.57vw] flex gap-[0.71vw] justify-center items-center">
								<span className="lefttag  text-[3.57vw]">&lt;&nbsp;</span>
								<span className="secondline">I'm a Full Stack Developer</span>

								<span className="righttag  text-[3.57vw]">&nbsp;/&gt;</span>
							</div>
						</div>
						<div
							data-speed="clamp(2)"
							className="image  w-1/2  h-screen text-center flex justify-center items-center ">
							<div className="imgWrapper bg-[#015A4E] p-[1.67vw] rounded-[5vw] shadow-lg shadow-gray-400">
								<img
									className="me rounded-[5vw] w-[35.71vw] h-auto"
									src="src/assets/home.png"
									alt="me waving at u pal"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
