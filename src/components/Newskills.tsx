import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger, SplitText)

interface NewSkillsProps {
	smootherRef: React.RefObject<any>
}

const Newskills = ({ smootherRef }: NewSkillsProps) => {
	const skillsContainer = useRef<HTMLDivElement>(null)
	// const loadTimeoutRef = useRef<number | null>(null);


	useGSAP(() => {

		if (typeof window === "undefined") {
			console.log("window returned");
			return
		}

		// let splitSkillInstance: SplitText | null = null;

		// --- DEFERRED SPLITTEXT SETUP & ANIMATION RUNNER ---

		// const setupSplitTextAndAnimations = () => {
		// 	// Safety check in case cleanup ran first
		// 	if (!skillsContainer.current) return;

		// 	// 1. CPU-intensive split operation (now deferred)
		// 	splitSkillInstance = SplitText.create(".bigSkill", {
		// 		type: "chars",
		// 	});

		// 	// 3. Run pinned animation using the split instance
		// 	const bigtl = gsap.timeline({
		// 		scrollTrigger: {
		// 			invalidateOnRefresh: true,
		// 			trigger: ".bigSkill",
		// 			start: "top 52%",
		// 			end: "bottom 30%",
		// 			pin: true,
		// 			scrub: true,
		// 			markers: true
		// 		}
		// 	})
		// 	// Use the instance's characters directly
		// 	// bigtl.set(splitSkillInstance.chars, { x: "100vw" })
		// 	// 	.fromTo(splitSkillInstance.chars, { x: "100vw" }, {
		// 	// 		x: 0,
		// 	// 		stagger: 0.2,
		// 	// 	})
		// };

		// Defer the heavy initialization to improve TBT
		// loadTimeoutRef.current = window.setTimeout(setupSplitTextAndAnimations, 500);

		// ScrollTrigger.create({
		// 	invalidateOnRefresh: true,
		// 	trigger: ".big-wrap",
		// 	start: "top top",
		// 	// endTrigger: "#projects",
		// 	endTrigger: ".bigSkill",
		// 	end: "bottom top",
		// 	pin: ".bigSkill",
		// 	// pinSpacing: true,
		// 	// markers: true
		// });

		gsap.to(".bigSkill", {
			scale: 1,
			scrollTrigger: {
				trigger: ".skillwrap",
				start: "top 60%",
				end: "center top",
				scrub: true,
				// markers: true
			}
		})


		// animations for frontcard
		const cards = gsap.utils.toArray<HTMLElement>(".card")

		cards.forEach(card => {
			gsap.to(card, {
				scale: 0.5,
				opacity: 0.5,
				scrollTrigger: {
					trigger: card,
					start: "bottom center",
					end: "bottom 20%",
					scrub: true,
					// markers: true
				}
			})
			gsap.from(card, {
				scale: 0.5,
				opacity: 0.5,
				scrollTrigger: {
					trigger: card, // Use the individual card as the trigger
					start: "bottom bottom",
					end: "bottom 70%",
					scrub: true,
					// markers: true // Keep markers for debugging
				}
			})
		})




		// animations for logos
		const fronts = gsap.utils.toArray<HTMLElement>(".frontLogo")

		gsap.to(fronts, {
			scale: 0.5,
			opacity: 0,


			scrollTrigger: {
				trigger: ".frontCard",
				start: "bottom center",
				end: "bottom 40%",
				scrub: true,
				// markers: true,
				onLeaveBack: () => {
					gsap.set(fronts, { pointerEvents: "auto" })
				},
				onEnter: () => {
					gsap.set(fronts, { pointerEvents: "none" })
				}
			}
		})
		gsap.from(fronts, {

			scale: 0.5,
			opacity: 0,
			scrollTrigger: {
				trigger: ".frontCard", // Use the individual card as the trigger
				start: "bottom 70%",
				end: "bottom 60%",
				scrub: true,
				// markers: true, // Keep markers for debugging
				onLeave: () => {
					gsap.set(fronts, { pointerEvents: "auto" })
				},
				onEnterBack: () => {
					gsap.set(fronts, { pointerEvents: "none" })
				}

			}
		})
		const backs = gsap.utils.toArray<HTMLElement>(".backLogo")

		gsap.to(backs, {
			scale: 0.5,
			opacity: 0,
			scrollTrigger: {
				trigger: ".backCard",
				start: "bottom center",
				end: "bottom 40%",
				scrub: true,
				// markers: true,
				onLeaveBack: () => {
					gsap.set(backs, { pointerEvents: "auto" })
				},
				onEnter: () => {
					gsap.set(backs, { pointerEvents: "none" })
				}
			}
		})
		gsap.from(backs, {
			scale: 0.5,
			opacity: 0,
			scrollTrigger: {
				trigger: ".backCard", // Use the individual card as the trigger
				start: "bottom 70%",
				end: "bottom 60%",
				scrub: true,
				// markers: true,// Keep markers for debugging
				onLeave: () => {
					gsap.set(backs, { pointerEvents: "auto" })
				},
				onEnterBack: () => {
					gsap.set(backs, { pointerEvents: "none" })
				}
			}
		})
		const tools = gsap.utils.toArray<HTMLElement>(".toolLogo")

		gsap.to(tools, {
			scale: 0.5,
			opacity: 0,
			scrollTrigger: {
				trigger: ".toolCard",
				start: "bottom center",
				end: "bottom 20%",
				scrub: true,
				// markers: true,
				onLeaveBack: () => {
					gsap.set(tools, { pointerEvents: "auto" })
				},
				onEnter: () => {
					gsap.set(tools, { pointerEvents: "none" })
				}
			}
		})
		gsap.from(tools, {
			scale: 0.5,
			opacity: 0,
			scrollTrigger: {
				trigger: ".toolCard", // Use the individual card as the trigger
				start: "bottom 70%",
				end: "bottom 60%",
				scrub: true,
				// markers: true, // Keep markers for debugging
				onLeave: () => {
					gsap.set(tools, { pointerEvents: "auto" })
				},
				onEnterBack: () => {
					gsap.set(tools, { pointerEvents: "none" })
				}
			}
		})



		// icons floating and mouse move code 

		const icons = gsap.utils.toArray<HTMLElement>(".logo")

		// PERFORMANCE HINT
		gsap.set(icons, {
			transformOrigin: "center center",
			willChange: "transform scale",
		})

		/* -----------------------------
		   FLOATING TIMELINE
		----------------------------- */
		const floatTl = gsap.timeline({
			repeat: -1,
			yoyo: true,
			defaults: { ease: "sine.inOut" },
		})

		icons.forEach((icon, i) => {
			// const text = icon.querySelector("span"); // your skill name


			// icon.addEventListener("mouseenter", () => {
			// 	gsap.to(icon, { scale: 1.1, duration: 0.3, opacity: 0.5 })
			// 	gsap.to(text, { opacity: 1, scale: 1.1, y: 0, duration: 0.3 }); // show skill
			// }

			// )
			// icon.addEventListener("mouseleave", () => {
			// 	gsap.to(icon, { scale: 1, duration: 0.3, opacity: 1 })
			// 	gsap.to(text, { opacity: 0, scale: 1, y: 10, duration: 0.3 }); // hide skill

			// }
			// )
			floatTl.to(
				icon,
				{
					yPercent: i % 2 === 0 ? -14 : 14,
					rotate: i % 2 === 0 ? 3 : -3,
					// duration: 3 + i * 0.2,
					duration: 2
				},
				0
			)
		})


		// /* -----------------------------
		//    PANEL TRANSITIONS (NEW LOGIC)
		// ----------------------------- */

		// const panels = gsap.utils.toArray<HTMLElement>(".panel")
		// // Assuming we have 3 panels: Front, Back, Tools
		// const panelData = [
		// 	{ id: "frontPanel", logoClass: ".frontLogo" },
		// 	{ id: "backPanel", logoClass: ".backLogo" },
		// 	{ id: "toolPanel", logoClass: ".toolLogo" }
		// ];

		// // CRITICAL FIX 1: Set Initial States
		// gsap.set(panels.slice(1), { opacity: 0, pointerEvents: "none" });
		// gsap.set(panels[0], { opacity: 1, pointerEvents: "none" });


		// // 1. Create Individual Transition Timelines (paused)
		// const transitionTimelines = panels.map((panel, i) => {
		// 	const currentPanel = panels[i];
		// 	const nextPanel = panels[i + 1];

		// 	if (!nextPanel) return null; // Last panel has no transition out

		// 	// 1a. Determine specific selectors for the current panel's content
		// 	const currentPanelData = panelData.find(d => d.id === currentPanel.id);
		// 	const currentLogoSelector = `#${currentPanel.id} ${currentPanelData?.logoClass || '.logo'}`;
		// 	const currentCardSelector = `#${currentPanel.id} .frontCard`; // Card has generic ID, scoped by Panel ID

		// 	// 1b. Determine specific selectors for the next panel's content
		// 	const nextPanelData = panelData.find(d => d.id === nextPanel.id);
		// 	const nextLogoSelector = `#${nextPanel.id} ${nextPanelData?.logoClass || '.logo'}`;
		// 	const nextCardSelector = `#${nextPanel.id} .frontCard`;


		// 	return gsap.timeline({
		// 		paused: true, onStart: () => {
		// 			ScrollSmoother.get() && ScrollSmoother.get()?.paused(true);
		// 		},
		// 		onComplete: () => { ScrollSmoother.get()?.paused(false) }
		// 	})

		// 		/* =====================
		// 		   OUTRO — Current Panel Content (Staggered Out First)
		// 		   ===================== */
		// 		// Outro: Text out first, then logos
		// 		.to(currentCardSelector, {
		// 			opacity: 0,
		// 			y: "-30vw",
		// 			filter: "blur(6px)",
		// 			duration: 0.6,
		// 			ease: "power2.in",
		// 			// stagger: -0.05, // Reverse stagger
		// 		}, 0)
		// 		.to(currentLogoSelector, {
		// 			opacity: 0,
		// 			y: "-50vh",
		// 			scale: 0.85,
		// 			duration: 0.8,
		// 			ease: "power3.in",
		// 			stagger: 0.08,
		// 		}, 0.3) // Start logos shortly after text

		// 		/* =====================
		// 		   OUTRO — Current Panel Container (Final fade/slide out)
		// 		   ===================== */
		// 		.to(currentPanel, {
		// 			opacity: 0,

		// 			scale: 0.96,
		// 			duration: 0.7,
		// 			ease: "expo.inOut",
		// 			onComplete: () => {
		// 				gsap.set(currentPanel, { pointerEvents: "none" })
		// 			}
		// 		}, 0.3) // Start container fade after content started to move out

		// 		/* =====================
		// 		   INTRO — Next Panel Container (Fade/slide in)
		// 		   ===================== */
		// 		.fromTo(nextPanel,
		// 			{
		// 				opacity: 0,
		// 				// y: "60vh",
		// 				scale: 1.05,
		// 			},
		// 			{
		// 				opacity: 1,
		// 				y: 0,
		// 				scale: 1,
		// 				duration: 0.8,
		// 				ease: "expo.inOut",
		// 				onStart: () => {
		// 					gsap.set(nextPanel, { pointerEvents: "auto" })
		// 				}
		// 			},
		// 			0.3 // Start with container intro, slightly after outro started
		// 		)

		// 		/* =====================
		// 		   INTRO — Next Panel Content (Staggered In - Logos First)
		// 		   ===================== */
		// 		.from(
		// 			nextLogoSelector,
		// 			{
		// 				opacity: 0,
		// 				y: "50vh", // 
		// 				scale: 0.85,
		// 				duration: 0.6,
		// 				ease: "power3.out",
		// 				stagger: 0.08,
		// 			},
		// 			1.2// Logos appear AFTER the container has started its move
		// 		)
		// 		.from(
		// 			nextCardSelector,
		// 			{
		// 				opacity: 0,
		// 				y: "30vw",
		// 				filter: "blur(6px)",
		// 				duration: 0.6,
		// 				ease: "power2.out",
		// 				stagger: 0.06,
		// 			},
		// 			0.8 // Text comes AFTER logos, matching the request
		// 		);

		// }).filter(tl => tl !== null); // Filter out the null for the last panel


		// // Pin the container
		// ScrollTrigger.create({
		// 	trigger: ".animater",
		// 	start: "top top",
		// 	end: "+=120%", // Keep this or adjust based on your content/needs
		// 	pin: ".pined",
		// 	// markers: true,
		// 	pinSpacing: true
		// });



		// // Initial Front Panel Load Animation (Improved with specific selectors)
		// const frontPanelTl = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: ".animater",
		// 		start: "top top",
		// 		toggleActions: "play none none reverse",
		// 		markers: true,

		// 	},
		// 	onStart: () => {
		// 		ScrollSmoother.get() && ScrollSmoother.get()?.paused(true);
		// 	},
		// 	onComplete: () => { ScrollSmoother.get()?.paused(false) },
		// 	onReverseStart: () => {
		// 		ScrollSmoother.get()?.paused(true);
		// 	},

		// 	onReverseComplete: () => {
		// 		ScrollSmoother.get()?.paused(false);
		// 	},

		// });

		// frontPanelTl.fromTo(
		// 	"#frontPanel",
		// 	{
		// 		opacity: 0,
		// 		y: "50vh",
		// 	},
		// 	{
		// 		opacity: 1,
		// 		y: 0,
		// 		duration: 0.6,
		// 		ease: "expo.inOut",
		// 		onStart: () => {
		// 			gsap.set("#frontPanel", { pointerEvents: "auto" })
		// 		}
		// 	}
		// )
		// 	/* =====================
		// 	LOGOS — COME IN FIRST (Front Panel)
		// 	===================== */
		// 	.from(
		// 		"#frontPanel .frontLogo", // <-- Specific Selector
		// 		{
		// 			opacity: 0,
		// 			y: "50vh", // Keeping the original logo animation for first panel
		// 			scale: 0.85,
		// 			duration: 0.6,
		// 			ease: "power3.out",
		// 			stagger: 0.08,
		// 		},
		// 		0.3 // logos appear BEFORE text
		// 	)

		// 	/* =====================
		// 	   TEXT — COMES AFTER (Front Panel)
		// 	   ===================== */
		// 	.from(
		// 		"#frontPanel .frontCard", // <-- Specific Selector
		// 		{
		// 			opacity: 0,
		// 			y: "30vw",
		// 			filter: "blur(6px)",
		// 			duration: 0.6,
		// 			ease: "power2.out",
		// 			// stagger: 0.06,
		// 		},
		// 		0
		// 	);



		// // ScrollTrigger for each transition (P1->P2, P2->P3)
		// ScrollTrigger.create({
		// 	trigger: ".animater",
		// 	start: "20% top",
		// 	// markers: { startColor: "purple", endColor: "purple", indent: 10 * 0 },
		// 	onEnter: () => transitionTimelines[0].play(),
		// 	onLeaveBack: () => transitionTimelines[0].reverse(),
		// 	markers: true
		// })
		// ScrollTrigger.create({
		// 	trigger: ".animater",
		// 	start: "40% top",
		// 	// markers: { startColor: "purple", endColor: "purple", indent: 10 * 1 },
		// 	onEnter: () => transitionTimelines[1].play(),
		// 	onLeaveBack: () => transitionTimelines[1].reverse(),
		// 	markers: true
		// })


		return () => {
			console.log("--- Newskills: useGSAP Cleanup Running ---");

			// observer.kill()
			floatTl.kill()
		}

	}, { scope: skillsContainer.current!, dependencies: [smootherRef.current] })

	return (
		<div ref={skillsContainer} id="skills" className=" z-10">
			<div className="mainContent  font-clashDisplay relative  w-screen min-h-screen flex flex-col justify-center ">

				<div className="skillwrap flex items-center justify-center h-[30vh]">
					<div
						className="bigSkill text-[6vw] transform scale-[5] font-erode font-extrabold ">
						Skills
					</div>
				</div>

				<div className="cards min-h-screen min-w-screen flex flex-col items-center justify-center gap-16 mt-10">

					<div id="" className="frontCard card  flex-col flex justify-center items-center border-2 border-[var(--border)] p-[3vw] gap-[2vw] rounded-[3.5vw] bg-[var(--border)]/30">

						<div className="font-extrabold tracking-wider flex  items-center">
							<span className=" text-[3vw] font-normal">&lt;&nbsp; </span>
							<span className="text-[3vw]"> Frontend </span>
							<span className=" text-[3vw] font-normal"> &nbsp;/&gt;</span>
						</div>

						<div className="text-[1.3vw] text-center">
							<p>Turning ideas into interactive, animated, and responsive UIs with </p>
							<p>HTML, CSS, JavaScript, React, and GSAP.</p>
						</div>
					</div>

					<div id="" className="backCard card flex-col flex justify-center items-center border-2 border-[var(--border)] p-[3vw] gap-[2vw] rounded-[3.5vw] bg-[var(--border)]/30">

						<div className="font-extrabold tracking-wider flex  items-center">
							<span className=" text-[3vw] font-normal">&lt;&nbsp; </span>
							<span className="text-[3vw]"> Backend </span>
							<span className=" text-[3vw] font-normal"> &nbsp;/&gt;</span>
						</div>

						<div className="text-[1.3vw] text-center">
							<p>Building robust, efficient backends that make apps fast, reliable, and seamless.</p>
						</div>
					</div>

					<div id="" className="toolCard card flex-col flex justify-center items-center border-2 border-[var(--border)] p-[3vw] gap-[2vw] rounded-[3.5vw] bg-[var(--border)]/30">

						<div className="font-extrabold tracking-wider flex  items-center">
							<span className=" text-[3vw] font-normal">&lt;&nbsp; </span>
							<span className="text-[3vw]"> Tools </span>
							<span className=" text-[3vw] font-normal"> &nbsp;/&gt;</span>
						</div>

						<div className="text-[1.3vw] text-center">
							<p>Mastering the stack with Git, Tailwind, Vite, Figma, and more—</p><p>from code to design, I keep it smooth and polished.</p>
						</div>
					</div>

				</div>




			</div>
		</div >
	)
}

export default Newskills


// log

// yea first i created horizontal scroll animatin using scrolltrigger , spent whole day on it and then there came the issue of snapping 
// so i chaged it to manual and spent anothr day on it , css snapping with native scrollbar
// and now i changed it to scroll trigger 
// wow na 😭