import { useEffect, useRef } from "react"
import About from "./components/About"
import Home from "./components/Home"
import gsap from "gsap"
import NavBar from "./components/NavBar"
import Newskills from "./components/Newskills"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import logosData from "./assets/logosdata"
import { useGSAP } from "@gsap/react"
// import Menu from "./components/Menu"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {

	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const smootherRef = useRef<any>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		smootherRef.current = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1.5,
			// effects: true,
		})

		return () => smootherRef.current.kill()
	}, [])

	function getRandomPositionWithDistance(
		width: number,
		height: number,
		existingPositions: { x: number; y: number }[],
		minDistance: number
	) {
		let x: number, y: number;
		let attempts = 0;
		do {
			x = Math.random() * (window.innerWidth - width);
			y = Math.random() * (window.innerHeight - height);
			attempts++;
			if (attempts > 100) break; // avoid infinite loop
		} while (
			existingPositions.some(
				(pos) => Math.hypot(pos.x - x, pos.y - y) < minDistance
			)
		);

		return { x, y };
	}


	useGSAP(() => {
		const container = containerRef.current
		if (!container) return;

		const logos = container.querySelectorAll(".logo")
		const existingLogosPos: { x: number, y: number }[] = []
		const minDistance = 300

		logos.forEach((logo) => {
			const el = logo as HTMLElement
			const width = el.offsetWidth
			const height = el.offsetHeight

			// calculating the position for the logo
			const { x, y } = getRandomPositionWithDistance(
				width,
				height,
				existingLogosPos,
				minDistance
			);

			gsap.set(el, { x, y, scale: 1, willChange: "transform" });

			existingLogosPos.push({ x, y })


			// Animate randomly forever (x/y floats anywhere)
			function animateRandom() {
				const newX = Math.random() * (window.innerWidth - width);
				const newY = Math.random() * (window.innerHeight - height);

				gsap.to(el, {
					x: newX,
					y: newY,
					duration: 38,
					ease: "power1.inOut",
					onComplete: animateRandom,
				});
			}

			animateRandom();

		})

		// fading in logos
		gsap.from(".logo", {
			delay:1,
			opacity: 0,
			scale: 0.5,
			duration: 1,
			ease: "power3.out",
			stagger: { amount: 0.5, from: "random" },
		});


	},
		{ scope: containerRef })


	return (
		<>
			<div
				id="smooth-wrapper"
				ref={scrollContainerRef}
				className="
    relative
    w-full
    h-screen
    hide-scrollbar
dynamic-gradient
opacity-

  ">
				<NavBar smootherRef={smootherRef} />
				<div ref={containerRef} className="absolute  w-screen h-screen ">
					{" "}
					{logosData.map((logo, index) => (
						<span
							className="logo"
							key={index}
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								transform: "translate(-50%, -50%)",
								width: 40,
								height: 40,

								willChange: "transform",
							}}
							dangerouslySetInnerHTML={{ __html: logo.svg }}
						/>
					))}{" "}
				</div>

				<div id="smooth-content">
					<Home />
					{/* <Menu/> */}

					<About />

					<Newskills />
					{/* <Menu /> */}
				</div>
			</div>
		</>
	)
}

export default App





