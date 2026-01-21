import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import DrawSVGPlugin from "gsap/DrawSVGPlugin"

import { useRef } from "react"

gsap.registerPlugin(SplitText, DrawSVGPlugin, MorphSVGPlugin, Observer)

interface HomeProps {
	smootherRef: React.RefObject<any>
}

const Home = ({ smootherRef }: HomeProps) => {
	const imgRef = useRef<HTMLDivElement>(null)
	const pathRef = useRef<SVGPathElement>(null)
	const homeRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		const img = imgRef.current!
		if (!img) return
		const path = pathRef.current!

		// timeline for initial animations
		const tl = gsap.timeline({
			delay: 0.3,
			onComplete: () => {
				img.addEventListener("mouseenter", onEnter)
				img.addEventListener("mouseleave", onLeave)
			},
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
		// tl
		// .to(
		// 	"#code1",
		// 	{

		// 		yPercent: -30,
		// 		xPercent: -30,
		// 		scale:1,
		// 		opacity: 1,
		// 		duration: 0.6,
		// 		ease: "none",
		// 	},
		// 	"<"
		// ).to(
		// 	"#code2",
		// 	{

		// 		yPercent: 30,
		// 		xPercent: 30,
		// 		scale:1,
		// 		opacity: 1,
		// 		duration: 0.6,
		// 		ease: "none",
		// 	},
		// 	"<"
		// )

		// animations for code1,2 entrance
		tl.fromTo(
			"#code1",
			{
				xPercent: -60,
				yPercent: -60,
				scale: 0.6,
				rotate: -20,
				opacity: 0,
			},
			{
				xPercent: -30,
				yPercent: -30,
				scale: 1,
				rotate: 0,
				opacity: 1,
				duration: 0.8,
				ease: "power3.out",
			},
			"<",
		)

		tl.fromTo(
			"#code2",
			{
				xPercent: 60,
				yPercent: 60,
				scale: 0.6,
				rotate: 20,
				opacity: 0,
			},
			{
				xPercent: 30,
				yPercent: 30,
				scale: 1,
				rotate: 0,
				opacity: 1,
				duration: 0.8,
				ease: "power3.out",
			},
			"<",
		)
		tl.fromTo(
			"#code3",
			{
				xPercent: 60,
				yPercent: 60,
				scale: 0.6,
				rotate: 20,
				opacity: 0,
			},
			{
				xPercent: 30,
				yPercent: 30,
				scale: 1,
				rotate: 0,
				opacity: 1,
				duration: 0.8,
				ease: "power3.out",
			},
			"<",
		)

			.from(
				".imgWrapper",
				{
					yPercent: -10,
					opacity: 0,
					duration: 0.6,
					stagger: 0.05,
					ease: "none",
				},
				"<",
			)
			.from(
				splitfirst.chars,
				{
					opacity: 0,
					yPercent: 20,
					duration: 0.3,
					stagger: 0.05,
					ease: "none",
				},
				">",
			)
			// moving out
			.from(
				".lefttag",
				{
					opacity: 0,
					xPercent: 800,
					duration: 0.5,
					stagger: 0.05,
					ease: "none",
				},
				"+=0.5",
			)
			.from(
				".righttag",
				{
					opacity: 0,
					xPercent: -800,
					duration: 0.5,
					stagger: 0.05,
					ease: "none",
				},
				"<",
			)
			.from(splitsexond.words, {
				opacity: 0, // start invisible
				yPercent: 20, // small offset
				duration: 0.5, // duration for each word
				stagger: {
					each: 0.1, // delay between each word
					from: "start", // animation order
				},
				ease: "power1.out",
			})
			.fromTo(
				".name",
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.1, // very fast
					repeat: 3, // infinite flicker
					yoyo: true, // fade in and out
					stagger: 0.05, // stagger for multiple letters
					ease: "power1.inOut", // smooth flicker
				},
			)
			.fromTo(
				".name",
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.1, // very fast
					repeat: 2, // infinite flicker
					// yoyo: true,          // fade in and out
					stagger: 0.05, // stagger for multiple letters
					ease: "power1.inOut", // smooth flicker
				},
				">0.5",
			)

		// time line for imgs float effecctconst floatTl = gsap.timeline({ repeat: -1, yoyo: true })
		const floatTl = gsap.timeline({ repeat: -1, yoyo: true })
		floatTl
			.to(
				"#code1",
				{
					y: -30,
					rotate: 3,
					duration: 3,
					ease: "sine.inOut",
				},
				0,
			)
			.to(
				"#code2",
				{
					y: 30,
					rotate: -3,
					duration: 3,
					ease: "sine.inOut",
				},
				0,
			)
			.to(
				"#code3",
				{
					y: -30,
					rotate: -3,
					duration: 3,
					ease: "sine.inOut",
				},
				0,
			)

		// // animation for mouse move on code svgs
		// const code1 = document.querySelector("#code1")!
		// const code2 = document.querySelector("#code2")!

		// const move1X = gsap.quickTo(code1, "x", { duration: 0.5, ease: "power3.out" })
		// const move1Y = gsap.quickTo(code1, "y", { duration: 0.5, ease: "power3.out" })

		// const move2X = gsap.quickTo(code2, "x", { duration: 0.8, ease: "power3.out" })
		// const move2Y = gsap.quickTo(code2, "y", { duration: 0.8, ease: "power3.out" })

		// const observer = Observer.create({
		// 	type: "pointer",
		// 	onMove(self) {
		// 		floatTl.pause()
		// 		const x = self.x / window.innerWidth - 0.5
		// 		const y = self.y / window.innerHeight - 0.5

		// 		move1X(x * 30)
		// 		move1Y(y * 30)

		// 		move2X(x * -45)
		// 		move2Y(y * -45)
		// 	},
		// 	onStop: () => { floatTl.play() }
		// })

		// Timeline for drawing the arrow, paused initially

		const arrowTl = gsap.timeline({ paused: true })

		arrowTl.from("#hi", { yPercent: 30, opacity: 0, duration: 0.5, scale: 0.5 })
		// arrowTl.to(".imgWrapper", {  duration: 0.5, scale:1 },"<")

		arrowTl.fromTo(
			path,
			{ drawSVG: "100% 100%", opacity: 1 },
			{ duration: 0.5, drawSVG: "0% 100%", opacity: 1 },
			"<",
		)
		arrowTl.fromTo(
			path,
			{ fill: "none" },
			{ duration: 0.2, fill: "#ffffff" },
			">",
		)
		const onEnter = () => {arrowTl.play()}
		const onLeave = () => {arrowTl.reverse()}

		// // image parallax effect
		// const wrapper = homeRef.current;
		// if (!wrapper) return;

		// const image = wrapper.querySelector("#homeInside") as HTMLDivElement;

		// // REQUIRED for 3D
		// gsap.set(wrapper, { perspective: 1200 });

		// const rotateXTo = gsap.quickTo(image, "rotationX", {
		// 	duration: 0.6,
		// 	ease: "power3.out",
		// });

		// const rotateYTo = gsap.quickTo(image, "rotationY", {
		// 	duration: 0.6,
		// 	ease: "power3.out",
		// });

		// const scaleTo = gsap.quickTo(image, "scale", {
		// 	duration: 0.6,
		// 	ease: "power3.out",
		// });

		// const onMove = (e: MouseEvent) => {
		// 	const rect = wrapper.getBoundingClientRect();

		// 	const x = (e.clientX - rect.left) / rect.width - 0.5;
		// 	const y = (e.clientY - rect.top) / rect.height - 0.5;

		// 	rotateXTo(-y * 10);
		// 	rotateYTo(x * 10);
		// 	scaleTo(1.02);
		// };

		// const onleave = () => {
		// 	rotateXTo(0);
		// 	rotateYTo(0);
		// 	scaleTo(1);
		// };

		// wrapper.addEventListener("mousemove", onMove);
		// wrapper.addEventListener("mouseleave", onleave);

		// useGSAP cleanup: This automatically runs when the component unmounts
		return () => {
			splitfirst.revert()
			splitname.revert()
			splitsexond.revert()
			// Cleanup on unmount
			img.removeEventListener("mouseenter", onEnter)
			img.removeEventListener("mouseleave", onLeave)
		}
	})

	return (
		<>
			<div id="home" ref={homeRef} className="[perspective:1200px]">
				<div
					id="homeInside"
					className={`homeScreen min-h-screen min-w-screen flex flex-col justify-center items-center transition-all duration-300 ease-in-out  relative `}>
					<div className="  mainContent font-clashDisplay min-w-screen flex flex-row justify-center items-center ">
						<div className="relative  home-text text-[var(--text)]  w-1/2 h-screen flex flex-col justify-center items-center  ">
							<div className="mainText text-[4vw] flex gap-[0.71vw] justify-center items-baseline">
								<span className="firstline">
									<span>
										<h1>Hello, I'm</h1>
									</span>
								</span>
								{/* <span className="name text-[7vw] text-[var(--text)] [text-shadow:0_0_10px_rgba(255,255,255,0.35)]
 leading-none font-erode  font-extrabold inline-block">
									HAMZA
								</span> */}
								<span className="relative name">
									{/* GLOW LAYER */}
									<span
										aria-hidden
										className="absolute text-[7vw] font-erode font-extrabold      text-[var(--text)] blur-[14px] opacity-40 scale-110 -translate-y-[0.2em]  pointer-events-none">
										HAMZA
									</span>

									{/* MAIN TEXT */}
									<span
										className=" relative text-[7vw] text-[var(--text)] leading-none font-erode font-extrabold">
										HAMZA
									</span>
								</span>

								{/* <span className="bg-gradient-to-r from-green-400 to-teal-600 bg-clip-text text-transparent">HAMZA</span> */}
							</div>

							<div className="sectext text-[2vw] flex gap-[0.71vw] justify-center items-center">
								<span className="lefttag">&lt;&nbsp;</span>
								<span className="secondline">I'm a Full Stack Developer</span>
								<span className="righttag">&nbsp;/&gt;</span>
							</div>
							<div data-lag="2" className="absolute top-[70%] left-[15%]">
								<svg
									id="code3"
									className="absolute scale-50 opacity-0 top-[70%] left-[15%]"
									width={"6vw"}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="#ffffff">
									<path d="M4 18V14.3C4 13.4716 3.32843 12.8 2.5 12.8H2V11.2H2.5C3.32843 11.2 4 10.5284 4 9.7V6C4 4.34315 5.34315 3 7 3H8V5H7C6.44772 5 6 5.44772 6 6V10.1C6 10.9858 5.42408 11.7372 4.62623 12C5.42408 12.2628 6 13.0142 6 13.9V18C6 18.5523 6.44772 19 7 19H8V21H7C5.34315 21 4 19.6569 4 18ZM20 14.3V18C20 19.6569 18.6569 21 17 21H16V19H17C17.5523 19 18 18.5523 18 18V13.9C18 13.0142 18.5759 12.2628 19.3738 12C18.5759 11.7372 18 10.9858 18 10.1V6C18 5.44772 17.5523 5 17 5H16V3H17C18.6569 3 20 4.34315 20 6V9.7C20 10.5284 20.6716 11.2 21.5 11.2H22V12.8H21.5C20.6716 12.8 20 13.4716 20 14.3Z"></path>
								</svg>
							</div>
							<div data-lag="2" className="absolute top-[20%] left-[20%]">
								<svg
									id="code1"
									className="absolute scale-50 opacity-0 top-[20%] left-[20%]"
									width={"6vw"}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24">
									<path
										fill="#ffffff"
										d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path>
								</svg>
							</div>
							<div data-lag="2" className="absolute  top-[60%] left-[85%]">
								<svg
									id="code2"
									className="absolute scale-50 opacity-0 top-[60%] left-[85%]"
									width={"6vw"}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="#ffffff">
									<path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
								</svg>
							</div>
						</div>
						<div
							data-lag="clamp(2)"
							className="image relative w-1/2  h-screen text-center flex justify-center items-center ">
							<div
								ref={imgRef}
								className="imgWrapper bg-[#015A4E]  p-[1.67vw] rounded-[5vw] ">
								<img
									className="me rounded-[5vw] w-[35.71vw] h-auto"
									src="/home.png"
									alt="me waving at u pal"
								/>
							</div>
							{/* === Abstract Shape SVG === */}
							<svg
								id="arrow"
								className="absolute top-[24%] left-[-6%] transform -rotate-90"
								width={"10vw"}
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 158 192"
								fill="none"
								stroke="#ffffff"
								preserveAspectRatio="xMidYMid meet">
								{/* The path with ref and stroke properties */}
								<path
									className=""
									ref={pathRef}
									strokeWidth="4"
									strokeLinecap="round"
									strokeLinejoin="round"
									fill="none"
									d="M0 0 C0.495 1.98 0.495 1.98 1 4 C-2.728 7.417 -6.994 8.382 -11.75 9.688 C-12.543 9.912 -13.336 10.137 -14.152 10.369 C-16.099 10.92 -18.049 11.461 -20 12 C-18.9 12.485 -17.801 12.969 -16.668 13.469 C8.032 24.575 27.966 42.621 38 68.125 C41.962 78.937 42.669 90.255 38 101 C37.278 101.907 36.556 102.815 35.812 103.75 C33.268 108.312 33.898 112.198 34.039 117.336 C33.902 130.189 28.17 140.885 20.062 150.48 C18 152 18 152 15.25 151.738 C14.507 151.495 13.765 151.251 13 151 C12.608 146.515 12.608 146.515 14.355 144.219 C14.96 143.652 15.565 143.084 16.188 142.5 C23.649 134.464 25.722 123.589 27 113 C25.886 113.495 25.886 113.495 24.75 114 C18.041 115.789 10.809 116.52 4.562 113 C-0.542 109.236 -3.277 104.529 -5 98.5 C-5 93.232 -3.965 89.142 -0.344 85.195 C3.443 81.842 6.116 80.142 11.312 79.75 C17.414 80.164 20.686 82.421 24.75 86.812 C27.447 90.033 29.064 92.841 30 97 C30.66 97 31.32 97 32 97 C34.781 80.659 30.418 66.61 21 53 C9.115 36.706 -6.241 26.217 -25 19 C-24.625 19.678 -24.25 20.356 -23.863 21.055 C-22.228 24.029 -20.612 27.013 -19 30 C-18.49 30.929 -17.979 31.859 -17.453 32.816 C-16.994 33.681 -16.535 34.546 -16.062 35.438 C-15.641 36.22 -15.219 37.002 -14.785 37.809 C-13.879 40.337 -14.089 41.515 -15 44 C-16.98 44.495 -16.98 44.495 -19 45 C-22.715 40.718 -25.315 36.08 -28 31.125 C-28.854 29.565 -29.708 28.005 -30.562 26.445 C-30.967 25.693 -31.372 24.94 -31.789 24.165 C-32.572 22.766 -33.398 21.389 -34.273 20.046 C-37.117 15.64 -37.117 15.64 -36.492 12.215 C-32.031 5.592 -21.948 3.879 -14.688 1.625 C-13.816 1.35 -12.944 1.075 -12.045 0.791 C-4.301 -1.508 -4.301 -1.508 0 0 Z M5 90 C2.516 93.726 2.62 95.587 3 100 C4.793 104.152 6.815 106.272 11 108 C15.512 108.599 18.942 108.518 23.062 106.5 C23.702 106.005 24.341 105.51 25 105 C24.487 98.16 21.253 93.198 16.438 88.5 C11.903 85.71 8.998 87.159 5 90 Z "
									transform="translate(76,18)"
></path>
							</svg>

							<svg
								id="hi"
								style={{ fill: "white" }}
								className="absolute top-[10%] left-[70%]"
								width={"10vw"}
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 736 712"
								preserveAspectRatio="xMidYMid meet">
								<path
									d="M0 0 C2.229 -0.003 4.457 -0.006 6.686 -0.01 C12.717 -0.019 18.748 -0.021 24.78 -0.022 C28.556 -0.023 32.332 -0.025 36.108 -0.027 C48.624 -0.036 61.14 -0.041 73.656 -0.04 C74.329 -0.04 75.002 -0.04 75.696 -0.04 C76.37 -0.04 77.044 -0.04 77.738 -0.04 C88.644 -0.04 99.55 -0.049 110.456 -0.063 C121.691 -0.078 132.926 -0.084 144.161 -0.084 C150.453 -0.083 156.746 -0.086 163.039 -0.097 C168.964 -0.107 174.889 -0.106 180.815 -0.099 C182.976 -0.098 185.137 -0.101 187.299 -0.107 C236.149 -0.235 283.946 12.561 324.015 41.145 C324.61 41.565 325.205 41.984 325.817 42.416 C336.086 49.703 345.349 57.753 354.364 66.536 C355.726 67.863 357.102 69.178 358.48 70.489 C363.815 75.644 368.413 81.337 373.015 87.145 C374.189 88.576 374.189 88.576 375.386 90.036 C393.952 113.206 406.721 140.778 415.015 169.145 C415.237 169.901 415.458 170.657 415.686 171.436 C421.64 192.304 423.228 213.546 423.203 235.145 C423.202 236.467 423.202 236.467 423.202 237.815 C423.18 253.339 422.518 268.687 421.015 284.145 C420.914 285.245 420.812 286.345 420.707 287.478 C415.309 344.84 401.063 402.981 374.015 454.145 C373.642 454.855 373.268 455.565 372.884 456.296 C355.772 488.575 332.572 521.131 303.015 543.145 C301.944 543.979 300.874 544.814 299.804 545.649 C284.629 557.325 267.996 566.581 250.015 573.145 C248.8 573.604 247.584 574.063 246.332 574.536 C230.369 580.241 213.396 583.252 196.453 583.458 C195.654 583.487 194.856 583.516 194.033 583.546 C187.084 583.619 182.018 581.777 176.773 577.18 C176.234 576.529 175.696 575.878 175.14 575.208 C174.586 574.559 174.032 573.911 173.461 573.243 C169.621 567.671 169.739 562.579 169.788 556.031 C169.788 555.016 169.788 554.001 169.787 552.955 C169.789 549.605 169.804 546.256 169.82 542.907 C169.824 540.582 169.827 538.258 169.829 535.933 C169.836 529.819 169.856 523.705 169.878 517.591 C169.899 511.351 169.908 505.11 169.918 498.87 C169.939 486.628 169.973 474.387 170.015 462.145 C169.042 462.147 168.068 462.149 167.064 462.151 C143.308 462.195 119.552 462.228 95.795 462.249 C84.306 462.259 72.818 462.273 61.329 462.296 C51.309 462.316 41.289 462.329 31.269 462.333 C25.97 462.336 20.67 462.342 15.37 462.357 C10.369 462.37 5.368 462.374 0.367 462.371 C-1.456 462.372 -3.279 462.376 -5.102 462.384 C-70.344 462.647 -127.576 435.777 -173.672 390.645 C-205.342 358.524 -226.656 315.538 -233.985 271.145 C-234.133 270.277 -234.281 269.41 -234.433 268.515 C-238.64 242.986 -238.453 216.621 -233.985 191.145 C-233.735 189.718 -233.735 189.718 -233.481 188.262 C-230.771 173.371 -226.417 159.258 -220.985 145.145 C-220.709 144.423 -220.434 143.701 -220.15 142.957 C-206.105 106.827 -179.956 72.503 -148.985 49.145 C-148.342 48.658 -147.699 48.172 -147.037 47.67 C-116.543 24.711 -82.715 9.567 -44.985 3.145 C-43.824 2.933 -42.664 2.72 -41.469 2.501 C-27.649 0.038 -13.993 -0.004 0 0 Z M-53.61 49.833 C-54.553 50.088 -55.496 50.343 -56.468 50.605 C-94.877 61.375 -129.687 84.421 -153.985 116.145 C-154.436 116.731 -154.887 117.317 -155.351 117.92 C-174.224 142.698 -185.494 170.627 -190.985 201.145 C-191.116 201.842 -191.247 202.539 -191.383 203.257 C-199.618 248.383 -187.08 298.306 -161.546 335.947 C-150.125 352.225 -136.798 367.034 -120.985 379.145 C-120.399 379.596 -119.813 380.047 -119.21 380.512 C-83.542 407.679 -42.009 418.696 2.306 418.514 C4.434 418.517 6.562 418.52 8.69 418.526 C13.222 418.534 17.753 418.533 22.284 418.525 C29.455 418.514 36.625 418.526 43.795 418.542 C61.582 418.578 79.369 418.584 97.155 418.582 C111.029 418.58 124.903 418.587 138.777 418.622 C145.902 418.639 153.026 418.637 160.151 418.621 C164.575 418.615 169 418.626 173.424 418.641 C175.472 418.645 177.52 418.642 179.567 418.631 C182.366 418.618 185.164 418.629 187.963 418.646 C189.172 418.632 189.172 418.632 190.406 418.617 C196.909 418.699 202.086 420.617 207.039 424.891 C207.485 425.45 207.931 426.008 208.39 426.583 C208.852 427.138 209.313 427.694 209.789 428.266 C213.354 433.727 213.32 438.747 213.334 445.076 C213.344 446.072 213.354 447.067 213.365 448.093 C213.396 451.377 213.413 454.662 213.429 457.946 C213.448 460.226 213.468 462.505 213.488 464.785 C213.539 470.781 213.579 476.776 213.616 482.772 C213.656 488.892 213.707 495.012 213.758 501.132 C213.854 513.136 213.939 525.141 214.015 537.145 C216.261 536.673 218.506 536.199 220.751 535.724 C222.001 535.46 223.251 535.196 224.539 534.924 C249.883 529.246 271.684 512.86 290.015 495.145 C290.815 494.386 291.614 493.627 292.437 492.844 C298.12 487.329 303.195 481.423 308.015 475.145 C308.5 474.515 308.985 473.885 309.485 473.236 C359.963 406.985 379.205 318.397 379.265 236.52 C379.266 235.689 379.267 234.858 379.267 234.002 C379.251 220.847 378.684 208.067 376.015 195.145 C375.766 193.908 375.766 193.908 375.511 192.646 C365.467 144.499 335.926 102.201 295.393 74.696 C285.519 68.257 274.934 62.592 264.015 58.145 C262.273 57.426 262.273 57.426 260.496 56.692 C235.591 46.713 209.778 43.672 183.121 43.757 C180.927 43.753 178.733 43.748 176.538 43.741 C170.65 43.728 164.762 43.733 158.873 43.742 C152.667 43.75 146.461 43.743 140.254 43.738 C129.838 43.733 119.423 43.74 109.007 43.754 C97.02 43.77 85.033 43.765 73.046 43.749 C62.695 43.735 52.343 43.733 41.992 43.741 C35.836 43.746 29.68 43.746 23.523 43.736 C17.731 43.728 11.94 43.734 6.148 43.751 C4.042 43.755 1.935 43.754 -0.171 43.747 C-18.185 43.695 -36.17 45.02 -53.61 49.833 Z "
									fill="#ffffff"
									transform="translate(285.984619140625,72.854736328125)"
></path>
								<path
									d="M0 0 C6.099 3.476 10.585 8.874 12.812 15.5 C13.053 18.379 13.053 18.379 13.04 21.575 C13.039 22.793 13.039 24.011 13.039 25.265 C13.023 27.17 13.023 27.17 13.008 29.113 C13.006 30.288 13.004 31.462 13.002 32.672 C12.991 37.052 12.963 41.432 12.938 45.812 C12.896 55.609 12.855 65.406 12.812 75.5 C41.853 75.5 70.893 75.5 100.812 75.5 C100.615 56.204 100.615 56.204 100.362 36.909 C100.347 34.473 100.335 32.037 100.324 29.602 C100.299 28.357 100.273 27.113 100.247 25.831 C100.243 17.846 101.505 12.269 105.812 5.5 C106.472 5.5 107.132 5.5 107.812 5.5 C107.812 4.84 107.812 4.18 107.812 3.5 C114.463 -0.462 120.01 -2.845 127.812 -1.5 C134.448 0.432 138.95 4.894 142.812 10.5 C144.773 14.531 145.067 17.811 145.08 22.274 C145.084 22.942 145.089 23.61 145.094 24.299 C145.106 26.531 145.105 28.763 145.103 30.995 C145.109 32.599 145.116 34.202 145.123 35.806 C145.141 40.157 145.146 44.508 145.147 48.86 C145.148 51.58 145.153 54.3 145.158 57.021 C145.177 66.516 145.185 76.011 145.183 85.506 C145.182 94.349 145.203 103.191 145.235 112.034 C145.261 119.632 145.271 127.231 145.27 134.829 C145.27 139.365 145.275 143.9 145.297 148.435 C145.316 152.702 145.316 156.969 145.302 161.237 C145.299 162.799 145.304 164.362 145.316 165.924 C145.384 175.237 145.263 182.421 138.848 189.742 C132.708 194.824 128.462 197.021 120.367 196.805 C113.146 195.943 108.845 191.964 104.258 186.598 C101.295 182.298 100.564 178.602 100.585 173.425 C100.586 172.207 100.586 170.989 100.586 169.735 C100.596 168.465 100.607 167.195 100.617 165.887 C100.619 164.712 100.621 163.538 100.623 162.328 C100.634 157.948 100.662 153.568 100.688 149.188 C100.729 139.391 100.77 129.594 100.812 119.5 C71.772 119.5 42.732 119.5 12.812 119.5 C12.971 138.886 12.971 138.886 13.173 158.271 C13.185 160.712 13.195 163.153 13.203 165.594 C13.224 166.848 13.244 168.103 13.265 169.396 C13.268 177.705 12.48 183.315 6.848 189.742 C0.708 194.824 -3.538 197.021 -11.633 196.805 C-18.854 195.943 -23.155 191.964 -27.742 186.598 C-30.861 182.071 -31.44 178.186 -31.462 172.74 C-31.467 172.073 -31.472 171.406 -31.478 170.719 C-31.492 168.491 -31.493 166.264 -31.494 164.036 C-31.502 162.436 -31.51 160.836 -31.519 159.236 C-31.541 154.892 -31.55 150.549 -31.555 146.206 C-31.559 143.49 -31.565 140.773 -31.572 138.057 C-31.596 128.573 -31.609 119.088 -31.613 109.604 C-31.617 100.777 -31.647 91.951 -31.688 83.124 C-31.723 75.536 -31.739 67.947 -31.739 60.359 C-31.74 55.831 -31.749 51.304 -31.777 46.777 C-31.804 42.514 -31.806 38.252 -31.79 33.989 C-31.788 32.431 -31.794 30.873 -31.81 29.314 C-31.897 20.327 -31.273 13.185 -26.188 5.5 C-25.528 5.5 -24.868 5.5 -24.188 5.5 C-24.188 4.84 -24.188 4.18 -24.188 3.5 C-16.19 -1.265 -8.957 -3.848 0 0 Z "
									fill="#ffffff"
									transform="translate(223.1875,206.5)"
></path>
								<path
									d="M0 0 C5.929 3.38 10.922 8.901 12.812 15.5 C13.147 18.941 13.183 22.357 13.188 25.812 C13.212 26.725 13.236 27.637 13.262 28.576 C13.293 35.939 11.733 41.167 6.848 46.742 C0.708 51.824 -3.538 54.021 -11.633 53.805 C-18.854 52.943 -23.155 48.964 -27.742 43.598 C-31.555 38.065 -31.607 32.847 -31.625 26.312 C-31.631 24.905 -31.631 24.905 -31.637 23.47 C-31.521 16.551 -30.448 11.145 -26.188 5.5 C-25.527 5.5 -24.868 5.5 -24.188 5.5 C-24.188 4.84 -24.188 4.18 -24.188 3.5 C-16.19 -1.265 -8.957 -3.848 0 0 Z "
									fill="#ffffff"
									transform="translate(432.1875,206.5)"
></path>
								<path
									d="M0 0 C6.071 3.46 10.643 8.876 12.812 15.5 C13.005 17.967 13.089 20.443 13.103 22.917 C13.11 23.646 13.116 24.376 13.123 25.127 C13.142 27.529 13.146 29.93 13.148 32.332 C13.155 34.01 13.162 35.687 13.169 37.365 C13.181 40.879 13.184 44.394 13.183 47.908 C13.183 52.397 13.21 56.886 13.245 61.375 C13.267 64.84 13.271 68.305 13.27 71.77 C13.272 73.424 13.281 75.078 13.297 76.732 C13.445 94.213 13.445 94.213 6.848 101.742 C0.708 106.824 -3.538 109.021 -11.633 108.805 C-18.854 107.943 -23.155 103.964 -27.742 98.598 C-30.998 93.873 -31.448 89.798 -31.494 84.115 C-31.502 83.389 -31.511 82.663 -31.519 81.915 C-31.543 79.522 -31.552 77.131 -31.559 74.738 C-31.568 73.065 -31.577 71.393 -31.586 69.72 C-31.602 66.214 -31.61 62.708 -31.613 59.201 C-31.618 54.73 -31.656 50.26 -31.702 45.79 C-31.732 42.333 -31.739 38.877 -31.74 35.42 C-31.744 33.773 -31.756 32.126 -31.777 30.479 C-31.886 21.181 -31.627 13.475 -26.188 5.5 C-25.527 5.5 -24.868 5.5 -24.188 5.5 C-24.188 4.84 -24.188 4.18 -24.188 3.5 C-16.19 -1.265 -8.957 -3.848 0 0 Z "
									fill="#ffffff"
									transform="translate(531.1875,206.5)"
></path>
								<path
									d="M0 0 C6.025 3.434 10.737 8.882 12.812 15.5 C13.112 18.645 13.106 21.779 13.103 24.937 C13.11 25.88 13.116 26.824 13.123 27.797 C13.142 30.913 13.146 34.028 13.148 37.145 C13.155 39.315 13.162 41.486 13.169 43.657 C13.181 48.207 13.184 52.758 13.183 57.308 C13.183 63.128 13.21 68.949 13.245 74.769 C13.267 79.253 13.271 83.738 13.27 88.222 C13.272 90.367 13.281 92.513 13.297 94.658 C13.316 97.664 13.31 100.669 13.298 103.675 C13.31 104.555 13.321 105.435 13.332 106.341 C13.262 113.265 11.441 118.501 6.848 123.742 C0.708 128.824 -3.538 131.021 -11.633 130.805 C-18.854 129.943 -23.155 125.964 -27.742 120.598 C-31.431 115.244 -31.489 110.389 -31.494 104.095 C-31.502 103.154 -31.511 102.214 -31.519 101.245 C-31.543 98.138 -31.552 95.032 -31.559 91.926 C-31.568 89.76 -31.577 87.594 -31.586 85.428 C-31.602 80.886 -31.61 76.344 -31.613 71.802 C-31.618 65.999 -31.656 60.197 -31.702 54.395 C-31.732 49.919 -31.739 45.444 -31.74 40.968 C-31.744 38.83 -31.756 36.692 -31.777 34.554 C-31.971 13.069 -31.971 13.069 -26.188 5.5 C-25.527 5.5 -24.868 5.5 -24.188 5.5 C-24.188 4.84 -24.188 4.18 -24.188 3.5 C-16.19 -1.265 -8.957 -3.848 0 0 Z "
									fill="#ffffff"
									transform="translate(432.1875,272.5)"
></path>
								<path
									d="M0 0 C5.929 3.38 10.922 8.901 12.812 15.5 C13.147 18.941 13.183 22.357 13.188 25.812 C13.212 26.725 13.236 27.637 13.262 28.576 C13.293 35.939 11.733 41.167 6.848 46.742 C0.708 51.824 -3.538 54.021 -11.633 53.805 C-18.854 52.943 -23.155 48.964 -27.742 43.598 C-31.555 38.065 -31.607 32.847 -31.625 26.312 C-31.631 24.905 -31.631 24.905 -31.637 23.47 C-31.521 16.551 -30.448 11.145 -26.188 5.5 C-25.527 5.5 -24.868 5.5 -24.188 5.5 C-24.188 4.84 -24.188 4.18 -24.188 3.5 C-16.19 -1.265 -8.957 -3.848 0 0 Z "
									fill="#ffffff"
									transform="translate(531.1875,349.5)"
></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
