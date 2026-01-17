import React, { useCallback, useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"


interface NewSkillsProps {
	smootherRef: React.RefObject<any>
}



const Newskills = ({ smootherRef }: NewSkillsProps) => {

	// --- SCALING LOGIC (New way without GSAP horizontal scrub) ---
	const checkCenter = useCallback(() => {
		const items = document.querySelectorAll(".item, .item2");
		const viewportCenter = window.innerWidth / 2;
		const tolerance = 350; // How close to center before scaling up (in pixels)

		items.forEach(item => {
			const rect = item.getBoundingClientRect();
			// Calculate the item's on-screen center position
			const itemCenter = rect.left + rect.width / 2;

			// Check if the item's center is within the tolerance of the viewport center
			if (Math.abs(itemCenter - viewportCenter) < tolerance) {
				// Animate to scaled-up state
				gsap.to(item, {
					scale: 1,
					opacity: 1,
					filter:"blur(0px)",
					duration: 0.5, // Smoother transition
					overwrite: true, // Crucial: ensures only the latest animation runs
				});
			} else {
				// Animate to scaled-down state (default from CSS: scale-[0.7] opacity-[0.5])
				gsap.to(item, {
					scale: 0.7,
					opacity: 0.5,
					filter:"blur(5px)",
					duration: 0.5,
					overwrite: true,
				});
			}
		});
	}, []);

	// useEffect(() => {
	// 	const firstEl = firstSkillAnimation.current;
	// 	const secondEl = secondSkillAnimation.current;

	// 	if (!firstEl || !secondEl) return;

	// 	// Attach the listener to the scrollable divs
	// 	// Using both is necessary if the scroll positions are independent
	// 	firstEl.addEventListener('scroll', checkCenter);
	// 	secondEl.addEventListener('scroll', checkCenter);

	// 	// Run once on mount to set initial state
	// 	checkCenter();

	// 	return () => {
	// 		// Cleanup listeners
	// 		firstEl.removeEventListener('scroll', checkCenter);
	// 		secondEl.removeEventListener('scroll', checkCenter);
	// 	};
	// }, [checkCenter]);

	// now checking center at eacch frame intead of scroll
    useEffect(() => {
        const firstEl = firstSkillAnimation.current;
        const secondEl = secondSkillAnimation.current;

        if (!firstEl || !secondEl) return;

        let rAF: number;
        let isTicking = false;

        const handleScroll = () => {
            if (!isTicking) {
                // Use requestAnimationFrame to ensure checkCenter runs once per frame
                rAF = requestAnimationFrame(() => {
                    checkCenter();
                    isTicking = false;
                });
                isTicking = true;
            }
        };

        // Attach the listener to the scrollable divs
        firstEl.addEventListener('scroll', handleScroll);
        secondEl.addEventListener('scroll', handleScroll);

        // Run once on mount to set initial state
        checkCenter();

        return () => {
            // Cleanup listeners and requestAnimationFrame
            firstEl.removeEventListener('scroll', handleScroll);
            secondEl.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rAF);
        };
    }, [checkCenter]);
	const skillsContainer = useRef(null)
	const firstSkillAnimation = useRef<HTMLDivElement | null>(null)
	const secondSkillAnimation = useRef<HTMLDivElement | null>(null)


	useGSAP(() => {
		if (!smootherRef.current) return

		// creating split texts logic
		const splitSkill = SplitText.create(".bigSkill", {
			type: "chars",
		})


		const bigtl = gsap.timeline({
			scrollTrigger: {
				invalidateOnRefresh: true,
				trigger: ".bigSkill",
				start: "bottom 78%",
				end: "bottom 60%",
				pin: true,
				pinSpacing: true,
				scrub: 0.5,
				// markers: true,
			}
		})
		bigtl.set(splitSkill.chars, { x: "100vw" })
			.fromTo(splitSkill.chars, { x: "100vw" }, {
				x: 0,
				stagger: 0.2,
			})
		ScrollTrigger.create({
			invalidateOnRefresh: true,
			trigger: ".bigSkill",
			start: "top 7%",
			endTrigger: "#skills",
			end: "80% 78%",
			pin: ".big-wrap",
			// pinSpacing: true,
			// markers: true
		});

		gsap.to(".bigSkill", {
			// fontSize: "10vw",
			scale: 0.2,
			scrollTrigger: {
				invalidateOnRefresh: true,
				trigger: ".bigSkill",
				start: "top 77%",
				end: "top 15%",
				scrub: true,
				// markers: true
			}
		})


		// to make first animation start from end 
		ScrollTrigger.create({
			invalidateOnRefresh: true,
			trigger: "#skills",
			start: "top bottom",
			end: "top 90%",
			onEnter: () => {
				const el = firstSkillAnimation.current!
				if (!el) return

				el.scrollTo({
					left: el.scrollWidth - el.clientWidth,
					behavior: "auto" // only this scroll is instant
				})
			},
			// markers: true
		})


		function getScrollAmount(container: HTMLDivElement) {
			const firstCard = container.querySelector<HTMLElement>(".item, .item2");
			if (!firstCard) return 0;

			const cardWidth = firstCard.offsetWidth; // width in px
			const style = getComputedStyle(container);
			const gap = parseFloat(style.columnGap || style.gap || "0"); // get CSS gap
			return cardWidth + gap;
		}



		ScrollTrigger.create({
			invalidateOnRefresh: true,
			trigger: "#skills",
			start: "80% 78%",
			end: "80% 73%",
			pin: ".pin-wrap",
			// pinSpacing: true,
			// markers: true
		})

		ScrollTrigger.create({
			invalidateOnRefresh: true,
			trigger: "#skills",
			start: "80% 73%",
			end: "80% 60%",
			onEnter: () => {
				const amount1 = getScrollAmount(firstSkillAnimation.current!);
				const amount2 = getScrollAmount(secondSkillAnimation.current!);

				gsap.to(firstSkillAnimation.current, { scrollLeft: firstSkillAnimation.current!.scrollLeft - amount1, duration: 1 });
				gsap.to(secondSkillAnimation.current, { scrollLeft: secondSkillAnimation.current!.scrollLeft + amount2, duration: 1 });
			},
			onLeave: () => {
				const amount1 = getScrollAmount(firstSkillAnimation.current!);
				const amount2 = getScrollAmount(secondSkillAnimation.current!);

				gsap.to(firstSkillAnimation.current, { scrollLeft: firstSkillAnimation.current!.scrollLeft - amount1, duration: 1 });
				gsap.to(secondSkillAnimation.current, { scrollLeft: secondSkillAnimation.current!.scrollLeft + amount2, duration: 1 });
			},
			onEnterBack: () => {
				const amount1 = getScrollAmount(firstSkillAnimation.current!);
				const amount2 = getScrollAmount(secondSkillAnimation.current!);

				gsap.to(firstSkillAnimation.current, { scrollLeft: firstSkillAnimation.current!.scrollLeft + amount1, duration: 1 });
				gsap.to(secondSkillAnimation.current, { scrollLeft: secondSkillAnimation.current!.scrollLeft - amount2, duration: 1 });
			},
			onLeaveBack: () => {
				const amount1 = getScrollAmount(firstSkillAnimation.current!);
				const amount2 = getScrollAmount(secondSkillAnimation.current!);

				gsap.to(firstSkillAnimation.current, { scrollLeft: firstSkillAnimation.current!.scrollLeft + amount1, duration: 1 });
				gsap.to(secondSkillAnimation.current, { scrollLeft: secondSkillAnimation.current!.scrollLeft - amount2, duration: 1 });
			},
			// markers: true,
			pin: ".pin-wrap",
			pinSpacing: true,

		});
		ScrollTrigger.create({
			invalidateOnRefresh: true,
			trigger: "#skills",
			start: "80% 60%",
			end: "80% 50%",
			pin: ".pin-wrap",
			pinSpacing: true,
			// markers: true
		})



	}, { scope: skillsContainer.current! })


	return (
		<div ref={skillsContainer} id="skills" className="">
			<div className="mainContent  w-screen min-h-screen pt-[7.62vw] flex flex-col gap-[5.71vw] justify-center ">
				<div className="big-wrap flex justify-center  w-screen">
					<div className="bigSkill leading-0 text-[35vw] mt-0 mb-[15.24vw] font-extrabold text-[#015A4E] ">Skills</div>
				</div>

				<div className="pin-wrap">
					<section id="titles" className="horizontal w-screen flex items-center ">
						<div className="pin-wrape  flex relative w-screen overflow-hidden ">
							<div ref={firstSkillAnimation}
								className="animation-wrap-1  relative grid gap-[3.3vw] auto-cols-max  grid-flow-col overflow-scroll  hide-scrollbar pointer-events-none touch-pan-y mx-[1.6vw] ">

								{/* extra space divs */}
								<div className="item opacity-0 max-w-[30vw] text-transparent justify-center items-center scale-[0.7]  snap-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Frontend</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-[1.19vw] text-center">
										<p>
											I specialize in frontend development using HTML, CSS,
											JavaScript, and React, with a strong focus on animations and
											interactive UI. I enjoy working with GSAP and SVG animations to
											create smooth, engaging user experiences, while keeping layouts
											responsive, clean, and performance-friendly.
										</p>
									</div>
								</div>

								{/* front ttitle */}
								<div className="item blur-[5px] bg-[#76ada6]/50 rounded-[5.95vw] text-[2.86vw] h-[23.81vw] w-[30vw]  text-[#015A4E]  flex flex-col gap-[1.90vw] justify-center items-center scale-[0.7] opacity-[0.5] snap-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Frontend</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-[1.19vw] text-center">
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
								<div className="item blur-[5px] bg-[#76ada6]/50 rounded-[5.95vw] text-[2.86vw] h-[23.81vw] w-[30vw]  text-[#015A4E]  flex flex-col gap-[1.90vw] justify-center items-center scale-[0.7] opacity-[0.5] snap-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Backend</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-[1.19vw] text-center">
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
								<div className="item blur-[5px] bg-[#76ada6]/50 rounded-[5.95vw] text-[2.86vw] h-[23.81vw] w-[30vw]  text-[#015A4E]  flex flex-col gap-[1.90vw] justify-center items-center scale-[0.7] opacity-[0.5] snap-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Tools</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-[1.19vw] text-center">
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

								{/* extra space divs */}
								<div className="item opacity-0 max-w-[30vw] text-transparent justify-center items-center scale-[0.7]  snap-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Frontend</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-[1.19vw] text-center">
										<p>
											I specialize in frontend development using HTML, CSS,
											JavaScript, and React, with a strong focus on animations and
											interactive UI. I enjoy working with GSAP and SVG animations to
											create smooth, engaging user experiences, while keeping layouts
											responsive, clean, and performance-friendly.
										</p>
									</div>
								</div>

							</div>
						</div>
					</section>

					<section id="grids" className="horizontal-grid  flex items-center w-screen  ">
						<div className="pin-wrape  flex relative w-screen overflow-hidden">
							<div ref={secondSkillAnimation}
								className="animation-wrap-2  relative grid gap-[3.3vw] auto-cols-max grid-flow-col overflow-scroll  hide-scrollbar pointer-events-none touch-pan-y mx-[1.6vw] ">

								{/* extra space divs */}
								<div className="item opacity-0 max-w-[30vw] text-transparent justify-center items-center scale-[0.7]  snap-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Frontend</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-[1.19vw] text-center">
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
								<div className="item2 blur-[5px] w-[30vw] h-[22.86vw] p-[1.90vw] bg-[#015A4E] rounded-[5.95vw] grid grid-cols-3 gap-0 place-items-center scale-[0.7] opacity-[0.5]  snap-center  ">
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
								<div className="item2 blur-[5px] w-[30vw] h-[22.86vw] p-[1.90vw] bg-[#015A4E] rounded-[5.95vw]  grid grid-cols-3 gap-0 place-items-center scale-[0.7] opacity-[0.5] snap-center">
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
								<div className="item2 blur-[5px] w-[30vw] h-[22.86vw] p-[1.90vw] bg-[#015A4E] rounded-[5.95vw]  grid grid-cols-3 gap-0 place-items-center scale-[0.7] opacity-[0.5] snap-center">
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
								<div className="item opacity-0 max-w-[30vw] text-transparent justify-center items-center scale-[0.7]  snap-center">
									<div className="font-extrabold tracking-wider">
										<span className=" text-7xl font-light">&lt; </span>
										<span className="\">Frontend</span>
										<span className=" text-7xl font-light"> /&gt;</span>
									</div>
									<div className="tsxt text-[1.19vw] text-center">
										<p>
											I specialize in frontend development using HTML, CSS,
											JavaScript, and React, with a strong focus on animations and
											interactive UI. I enjoy working with GSAP and SVG animations to
											create smooth, engaging user experiences, while keeping layouts
											responsive, clean, and performance-friendly.
										</p>
									</div>
								</div>

							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Newskills


// log

// yea first i created horizontal scroll animatin using scrolltrigger , spent whole day on it and then there came the issue of snapping 
// so i chaged it to manual and spent anothr day on it , css snapping with native scrollbar
// and now i changed it to scroll trigger 
// wow na 😭