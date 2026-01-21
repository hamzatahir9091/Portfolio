import { useEffect, useRef } from "react"
import About from "./components/About"
import Home from "./components/Home"
import gsap from "gsap"
import NavBar from "./components/NavBar"
import Newskills from "./components/Newskills"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

import Projects from "./components/Projects"


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const smootherRef = useRef<any>(null)

	

	useEffect(() => {
		if (typeof window === "undefined") return

		// const wrapper = document.getElementById("smooth-wrapper");
		// const content = document.getElementById("smooth-content");

		// if (!wrapper || !content) {
		//   console.warn("GSAP initialization skipped: Smooth wrapper or content not found.");
		//   return;
		// }

		smootherRef.current = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1.5,
			effects: true,
			normalizeScroll: false,
			smoothTouch: 1
		})

		// This tells the browser to instantly jump to the top
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}

		if (smootherRef.current) {
			smootherRef.current.scrollTo(0, false);
		}

		const handleResize = () => {
			ScrollTrigger.refresh()
		}

		window.addEventListener("resize", handleResize)

		return () => {
			// clearTimeout(timeoutId); // Cleanup

			smootherRef.current.kill()
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	// const imageSelector = ".img"

	// useGSAP(
	// 	() => {
	// 		// Find all images once
	// 		const images = containerRef.current?.querySelectorAll(imageSelector);

	// 		if (images) {
	// 			// Apply initial styles (including blur if static)
	// 			gsap.set(images, {
	// 				scale: 1,
	// 				// filter: "blur(2px)",
	// 				willChange: "transform, filter", // Good practice for performance
	// 			});

	// 			// fading in logos
	// 			gsap.from(imageSelector, {
	// 				opacity: 0,
	// 				scale: 0.5,
	// 				duration: 1,
	// 				ease: "power3.out",
	// 				stagger: { amount: 0.6, from: "random" },
	// 				overwrite: true,
	// 			})

	// 			// Create a random, looping animation for all images
	// 			gsap.to(imageSelector, {
	// 				// Random position within a range (e.g., 50px of center)
	// 				x: "random(-500, 500)",
	// 				y: "random(-500, 500)",

	// 				// TIMING & EASING
	// 				duration: "random(8, 15)", // Each move takes a random time
	// 				ease: "none",

	// 				// LOOPING
	// 				repeat: -1, // Repeat indefinitely
	// 				yoyo: true, // Go back and forth smoothly
	// 				stagger: {
	// 					amount: 5, // Total time (5s) for the animation loop to start for all icons
	// 					from: "random"
	// 				},
	// 			});
	// 		}


	// 	},
	// 	{ scope: containerRef }
	// );



	return (
		<>
			<div
				id="smooth-wrapper"
				ref={scrollContainerRef}
				className=" relative w-full h-screen hide-scrollbar bg-[var(--bgColor)] text-[var(--text)]">
				<NavBar smootherRef={smootherRef} />
				<div className="">
					{/* <BlobCanvas /> */}
				</div>
				{/* <div ref={containerRef} className="absolute  w-screen h-screen ">
					{" "}
					{logosData.map((logo, index) => (
						<span
							className="img"
							key={index}
							style={{
								position: "absolute",
								// filter:"blur(2px)",
								// backdropFilter:"blur(3px)",
								left: logo.left,
								top: logo.top,
								transform: "translate(-50%, -50%)",
								width: 40,
								height: 40,

								willChange: "transform",
							}}
							dangerouslySetInnerHTML={{ __html: logo.svg }}
						/>
					))}{" "}
				</div> */}

				<div id="smooth-content" className="flex flex-col gap-[20vh]">
					<Home smootherRef={smootherRef} />
					{/* <Menu/> */}

					<About />

					<Newskills smootherRef={smootherRef} />

					<Projects />
				</div>
			</div>
		</>
	)
}

export default App
