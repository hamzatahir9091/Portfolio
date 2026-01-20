import React, { useCallback, useEffect, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"





interface NewSkillsProps {
	smootherRef: React.RefObject<any>
}



const Newskills = ({ smootherRef }: NewSkillsProps) => {
	const skillsContainer = useRef<HTMLDivElement>(null)

	// useGSAP(() => {
	// 	if (!smootherRef.current) return

	// 	// creating split texts logic
	// 	const splitSkill = SplitText.create(".bigSkill", {
	// 		type: "chars",
	// 	})


	// 	const bigtl = gsap.timeline({
	// 		scrollTrigger: {
	// 			invalidateOnRefresh: true,
	// 			trigger: ".bigSkill",
	// 			start: "bottom 75%",
	// 			end: "bottom 55%",
	// 			pin: true,
	// 			// pinSpacing: true,
	// 			scrub: true,
	// 			// markers: true,
	// 		}
	// 	})
	// 	bigtl.set(splitSkill.chars, { x: "100vw" })
	// 		.fromTo(splitSkill.chars, { x: "100vw" }, {
	// 			x: 0,
	// 			stagger: 0.2,
	// 		})
	// 	ScrollTrigger.create({
	// 		invalidateOnRefresh: true,
	// 		trigger: ".bigSkill",
	// 		start: "top 7%",
	// 		endTrigger: "#skills",
	// 		end: "80% 78%",
	// 		pin: ".big-wrap",
	// 		// pinSpacing: true,
	// 		// markers: true
	// 	});

	// 	gsap.to(".bigSkill", {
	// 		scale: 0.2,
	// 		scrollTrigger: {
	// 			invalidateOnRefresh: true,
	// 			trigger: ".bigSkill",
	// 			start: "bottom 74%",
	// 			end: "bottom 15%",
	// 			scrub: true,
	// 			// markers: true
	// 		}
	// 	})


	// 	// icons floating and mouse move code 

	// 	const icons = gsap.utils.toArray<HTMLElement>(".logo")

	// 	// PERFORMANCE HINT
	// 	gsap.set(icons, {
	// 		transformOrigin: "center center",
	// 		willChange: "transform",
	// 	})

	// 	/* -----------------------------
	// 	   FLOATING TIMELINE
	// 	----------------------------- */
	// 	const floatTl = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 		defaults: { ease: "sine.inOut" },
	// 	})

	// 	icons.forEach((icon, i) => {

	// 		icon.addEventListener("mouseenter", () =>
	// 			gsap.to(icon, { scale: 1.1, duration: 0.3 })
	// 		)
	// 		icon.addEventListener("mouseleave", () =>
	// 			gsap.to(icon, { scale: 1, duration: 0.3 })
	// 		)
	// 		floatTl.to(
	// 			icon,
	// 			{
	// 				yPercent: i % 2 === 0 ? -18 : 18,
	// 				rotate: i % 2 === 0 ? 3 : -3,
	// 				// duration: 3 + i * 0.2,
	// 				duration: 2
	// 			},
	// 			0
	// 		)
	// 	})

	// 	/* -----------------------------
	// 	   MOUSE PARALLAX
	// 	----------------------------- */
	// 	// const movers = icons.map((icon, i) => {
	// 	// 	const dir = i % 2 === 0 ? 1 : -1

	// 	// 	return {
	// 	// 		x: gsap.quickTo(icon, "x", {
	// 	// 			duration: 0.6 + i * 0.05,
	// 	// 			ease: "power3.out",
	// 	// 		}),
	// 	// 		y: gsap.quickTo(icon, "y", {
	// 	// 			duration: 0.6 + i * 0.05,
	// 	// 			ease: "power3.out",
	// 	// 		}),
	// 	// 		depth: (20 + i * 10) * dir, // 🔥 direction control
	// 	// 	}
	// 	// })
	// 	const movers = icons.map((icon, i) => {
	// 		const dirX = i % 2 === 0 ? 1 : -1
	// 		const dirY = i % 3 === 0 ? -1 : 1

	// 		return {
	// 			x: gsap.quickTo(icon, "x", { duration: 0.6, ease: "power3.out" }),
	// 			y: gsap.quickTo(icon, "y", { duration: 0.6, ease: "power3.out" }),
	// 			depthX: (20 + i * 10) * dirX,
	// 			depthY: (20 + i * 10) * dirY,
	// 		}
	// 	})

	// 	const observer = Observer.create({
	// 		target: window,
	// 		type: "pointer",
	// 		onMove(self) {
	// 			const x = self.x / window.innerWidth - 0.5
	// 			const y = self.y / window.innerHeight - 0.5

	// 			// movers.forEach((m) => {
	// 			// 	m.x(x * m.depth)
	// 			// 	m.y(y * m.depth)
	// 			// })
	// 			movers.forEach((m) => {
	// 				m.x(x * m.depthX)
	// 				m.y(y * m.depthY)
	// 			})
	// 		},
	// 	})

	// 	// Make motion smoother on low-FPS devices
	// 	gsap.ticker.lagSmoothing(1000, 16)


















	// 	// const panels = gsap.utils.toArray<HTMLElement>(".panel")
	// 	// const total = panels.length

	// 	// let index = 0
	// 	// let isCommitting = false
	// 	// let progress = 0

	// 	// const THRESHOLD = 0.6
	// 	// const DRAG_SPEED = 0.002

	// 	// // initial state
	// 	// gsap.set(panels, { opacity: 0, pointerEvents: "none" })
	// 	// gsap.set(panels[0], { opacity: 1, pointerEvents: "auto" })

	// 	// // pin skills
	// 	// ScrollTrigger.create({
	// 	// 	trigger: ".animater",
	// 	// 	start: "top top",
	// 	// 	end: "+=400%",
	// 	// 	pin: ".animater",
	// 	// })

	// 	// // build transition timelines
	// 	// const transitions = panels.map((panel, i) => {
	// 	// 	if (i === total - 1) return null

	// 	// 	const next = panels[i + 1]

	// 	// 	return gsap.timeline({ paused: true })
	// 	// 		.to(panel, { opacity: 0, duration: 0.3 })
	// 	// 		.set(next, { opacity: 1, pointerEvents: "auto" })
	// 	// 		.fromTo(
	// 	// 			next.querySelectorAll(".frontLogo"),
	// 	// 			{ y: 60, opacity: 0 },
	// 	// 			{ y: 0, opacity: 1, stagger: 0.08, duration: 0.6 }
	// 	// 		)
	// 	// })

	// 	// const currentTl = () => transitions[index]

	// 	// Observer.create({
	// 	// 	type: "wheel,touch",
	// 	// 	wheelSpeed: -1,
	// 	// 	tolerance: 2,
	// 	// 	preventDefault: true,

	// 	// 	onChange(self) {
	// 	// 		if (isCommitting) return
	// 	// 		const tl = currentTl()
	// 	// 		if (!tl) return

	// 	// 		progress += self.deltaY * DRAG_SPEED
	// 	// 		progress = gsap.utils.clamp(0, 1, progress)

	// 	// 		tl.progress(progress)

	// 	// 		// crossed threshold → commit
	// 	// 		if (progress >= THRESHOLD) {
	// 	// 			isCommitting = true

	// 	// 			tl.tweenTo(1, {
	// 	// 				duration: 0.6,
	// 	// 				ease: "power3.out",
	// 	// 				onComplete: () => {
	// 	// 					panels[index].style.pointerEvents = "none"
	// 	// 					index++
	// 	// 					progress = 0
	// 	// 					isCommitting = false
	// 	// 				},
	// 	// 			})
	// 	// 		}
	// 	// 	},

	// 	// 	onStop() {
	// 	// 		const tl = currentTl()
	// 	// 		if (!tl || isCommitting) return

	// 	// 		// not enough intent → snap back
	// 	// 		if (progress < THRESHOLD) {
	// 	// 			tl.tweenTo(0, {
	// 	// 				duration: 0.4,
	// 	// 				ease: "power3.out",
	// 	// 			})
	// 	// 			progress = 0
	// 	// 		}
	// 	// 	},
	// 	// })


	// 	// pinnign the animater

	// 	// ScrollTrigger.create({
	// 	// 	trigger: ".animater",
	// 	// 	start: "top top",
	// 	// 	end: "bottom top",
	// 	// 	pin: ".animater",
	// 	// 	markers: true,
	// 	// 	onUpdate: (self) => {
	// 	// 		const p = self.progress;

	// 	// 		if (p >= 25 && p < 50) {
	// 	// 			const first = gsap.timeline()
	// 	// 				.to("#frontCard", {
	// 	// 					y: "50vw",
	// 	// 					opacity: 1,
	// 	// 					pointerEvents: "auto",

	// 	// 				})
	// 	// 		}
	// 	// 	}
	// 	// })
	// 	// // creating animation timeline for panels


	// 	const panels = gsap.utils.toArray<HTMLElement>(".panel")
	// 	const totalPanels = panels.length // Should be 2 now (Front, Back), but we'll scale this up
	// 	// NOTE: Your JSX currently has 2 identical panels. 
	// 	// We assume you will add a 3rd distinct panel.
	// 	// Let's assume totalPanels = 3 for this example.

	// 	// CRITICAL FIX 1: Set Initial States

	// 	gsap.set(panels.slice(1), { opacity: 0, pointerEvents: "none" });
	// 	gsap.set(panels[0], { opacity: 1, pointerEvents: "none" });


	// 	// 1. Create Individual Transition Timelines (paused)

	// 	const transitionTimelines = panels.map((panel, i) => {
	// 		// We only need (totalPanels - 1) transitions
	// 		// if (i === totalPanels - 1) return null;

	// 		const currentPanel = panels[i];
	// 		const nextPanel = panels[i + 1];

	// 		// Create a PAUSED timeline for the transition from currentPanel to nextPanel
	// 		// return gsap.timeline({ paused: true })
	// 		// 	// Outro: Current Panel (Slides up and fades out)
	// 		// 	.to(currentPanel, {
	// 		// 		opacity: 0,
	// 		// 		y: "-50vh",
	// 		// 		duration: 0.5,
	// 		// 		ease: "power2.inOut",
	// 		// 		onComplete: () => gsap.set(currentPanel, { pointerEvents: "none" })
	// 		// 	}, 0)
	// 		// 	// Intro: Next Panel (Slides up from below and fades in)
	// 		// 	.fromTo(nextPanel, {
	// 		// 		opacity: 0,
	// 		// 		y: "50vh",
	// 		// 	}, {
	// 		// 		opacity: 1,
	// 		// 		y: 0,
	// 		// 		duration: 0.5,
	// 		// 		ease: "power2.inOut",
	// 		// 		onStart: () => gsap.set(nextPanel, { pointerEvents: "auto" })
	// 		// 	}, 0); // Start simultaneously at the beginning of the transition timeline


	// 		return gsap.timeline({ paused: true })

	// 			/* =====================
	// 			   OUTRO — Current Panel
	// 			   ===================== */
	// 			.to(currentPanel, {
	// 				opacity: 0,
	// 				y: "-60vh",
	// 				scale: 0.96,
	// 				duration: 0.7,
	// 				ease: "expo.inOut",
	// 				onComplete: () =>
	// 					gsap.set(currentPanel, { pointerEvents: "none" })
	// 			}, 0)

	// 			/* =====================
	// 			   INTRO — Next Panel
	// 			   ===================== */
	// 			.fromTo(nextPanel,
	// 				{
	// 					opacity: 0,
	// 					y: "60vh",
	// 					scale: 1.05,
	// 				},
	// 				{
	// 					opacity: 1,
	// 					y: 0,
	// 					scale: 1,
	// 					duration: 0.8,
	// 					ease: "expo.inOut",
	// 					onStart: () =>
	// 						gsap.set(nextPanel, { pointerEvents: "auto" })
	// 				},
	// 				0
	// 			)

	// 			/* =====================
	// 			   LOGOS — COME IN FIRST
	// 			   ===================== */
	// 			.from(
	// 				".frontlogo",
	// 				{
	// 					opacity: 0,
	// 					y: 40,
	// 					scale: 0.85,
	// 					duration: 0.6,
	// 					ease: "power3.out",
	// 					stagger: 0.08,
	// 				},
	// 				0.25 // logos appear BEFORE text
	// 			)

	// 			/* =====================
	// 			   TEXT — COMES AFTER
	// 			   ===================== */
	// 			.from(
	// 				".frontCard",
	// 				{
	// 					opacity: 0,
	// 					y: 30,
	// 					filter: "blur(6px)",
	// 					duration: 0.6,
	// 					ease: "power2.out",
	// 					stagger: 0.06,
	// 				},
	// 				0.45
	// 			);

	// 	}).filter(tl => tl !== null); // Filter out the null for the last panel


	// 	ScrollTrigger.create({
	// 		trigger: ".animater",
	// 		start: "top top",
	// 		// end: `+=${totalScrollDuration}vh`,
	// 		end: "+=120%",
	// 		pin: ".pined",
	// 		markers: true,
	// 		pinSpacing: true
	// 	});


	// 	// 3. Create a ScrollTrigger for EACH transition to play/reverse its dedicated timeline

	// 	// let counter = 3
	// 	// transitionTimelines.forEach((tl, i) => {
	// 	// 	// The start position for each trigger is based on its index.
	// 	// 	// E.g., for 3 panels (2 transitions):
	// 	// 	// i=0: start: 100vh (triggers P1->P2)
	// 	// 	// i=1: start: 200vh (triggers P2->P3)
	// 	// 	const startPosition = (counter) * 20;

	// 	// 	ScrollTrigger.create({
	// 	// 		trigger: ".animater",
	// 	// 		// The trigger point moves down the scrollable distance
	// 	// 		start: `center ${startPosition}%`,
	// 	// 		// markers: { startColor: "purple", endColor: "purple", indent: 10 * i },

	// 	// 		// When scroll reaches the start point (scrolling down): Play the transition
	// 	// 		onEnter: () => tl.play(),

	// 	// 		// When scroll scrolls back past the start point (scrolling up): Reverse the transition
	// 	// 		onLeaveBack: () => tl.reverse(),
	// 	// 		markers: true
	// 	// 	})

	// 	// 	counter--;
	// 	// });


	// 	// gsap.timeline({
	// 	// 	scrollTrigger: {
	// 	// 		trigger: ".animater",
	// 	// 		start: "center 80%",
	// 	// 		toggleActions: "play reverse reverse reverse",
	// 	// 		markers: true
	// 	// 	}
	// 	// })
	// 	// .fromTo("#frontPanel", {
	// 	// 	opacity: 0,
	// 	// 	y: "50vh",
	// 	// }, {
	// 	// 	opacity: 1,
	// 	// 	y: 0,
	// 	// 	duration: 0.5,
	// 	// 	ease: "power2.inOut",
	// 	// 	onStart: () => gsap.set("#frontPanel", { pointerEvents: "auto" }),
	// 	// }, 0)


	// 	// gsap.timeline({
	// 	// 	scrollTrigger: {
	// 	// 		trigger: ".animater",
	// 	// 		start: "center 60%",
	// 	// 		toggleActions: "play reverse reverse reverse",
	// 	// 		markers: true
	// 	// 	}
	// 	// })
	// 	// 	// Outro: Current Panel (Slides up and fades out)
	// 	// 	.to("#frontPanel", {
	// 	// 		opacity: 0,
	// 	// 		y: "-50vh",
	// 	// 		duration: 0.5,
	// 	// 		ease: "power2.inOut",
	// 	// 		onComplete: () => gsap.set("#frontPanel", { pointerEvents: "none" })
	// 	// 	}, 0)
	// 	// 	// Intro: Next Panel (Slides up from below and fades in)
	// 	// 	.fromTo("#backPanel", {
	// 	// 		opacity: 0,
	// 	// 		y: "50vh",
	// 	// 	}, {
	// 	// 		opacity: 1,
	// 	// 		y: 0,
	// 	// 		duration: 0.5,
	// 	// 		ease: "power2.inOut",
	// 	// 		onStart: () => gsap.set("#backPanel", { pointerEvents: "auto" })
	// 	// 	}, ">");


	// 	// gsap.timeline({
	// 	// 	scrollTrigger: {
	// 	// 		trigger: ".animater",
	// 	// 		start: "center 40%",
	// 	// 		toggleActions: "play reverse reverse reverse",
	// 	// 		markers: true
	// 	// 	}
	// 	// })


	// 	// 	// Outro: Current Panel (Slides up and fades out)
	// 	// 	.to("#backPanel", {
	// 	// 		opacity: 0,
	// 	// 		y: "-50vh",
	// 	// 		duration: 0.5,
	// 	// 		ease: "power2.inOut",
	// 	// 		onComplete: () => gsap.set("#backPanel", { pointerEvents: "none" })
	// 	// 	}, 0)
	// 	// 	// Intro: Next Panel (Slides up from below and fades in)
	// 	// 	.fromTo("#toolPanel", {
	// 	// 		opacity: 0,
	// 	// 		y: "50vh",
	// 	// 	}, {
	// 	// 		opacity: 1,
	// 	// 		y: 0,
	// 	// 		duration: 0.5,
	// 	// 		ease: "power2.inOut",
	// 	// 		onStart: () => gsap.set("#toolPanel", { pointerEvents: "auto" })
	// 	// 	}, ">");



	// 	// gsap.timeline({
	// 	// 	scrollTrigger: {
	// 	// 		trigger: ".animater",
	// 	// 		start: "center 20%",
	// 	// 		toggleActions: "play reverse reverse reverse",
	// 	// 		markers: true
	// 	// 	}
	// 	// })
	// 	// 	// Outro: Current Panel (Slides up and fades out)
	// 	// 	.to("#toolPanel", {
	// 	// 		opacity: 0,
	// 	// 		y: "-50vh",
	// 	// 		duration: 0.5,
	// 	// 		ease: "power2.inOut",
	// 	// 		onComplete: () => gsap.set("#toolPanel", { pointerEvents: "none" })
	// 	// 	}, 0)






	// 	const frontPanelTl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: ".animater",
	// 			start: "top top",
	// 			toggleActions: "play none none reverse",
	// 			markers: true
	// 		}
	// 	});

	// 	frontPanelTl.fromTo(
	// 		"#frontPanel",
	// 		{
	// 			opacity: 0,
	// 			y: "50vh",
	// 		},
	// 		{
	// 			opacity: 1,
	// 			y: 0,
	// 			duration: 0.6,
	// 			ease: "expo.inOut",
	// 			onStart: () =>
	// 				gsap.set("#frontPanel", { pointerEvents: "auto" }),
	// 		}
	// 	)
	// 		/* =====================
	// 				   LOGOS — COME IN FIRST
	// 				   ===================== */
	// 		.from(
	// 			".frontlogo",
	// 			{
	// 				opacity: 0,
	// 				y: "50vh",
	// 				scale: 0.85,
	// 				duration: 0.6,
	// 				ease: "power3.out",
	// 				stagger: 0.08,
	// 			},
	// 			0.25 // logos appear BEFORE text
	// 		)

	// 		/* =====================
	// 		   TEXT — COMES AFTER
	// 		   ===================== */
	// 		.from(
	// 			".frontCard",
	// 			{
	// 				opacity: 0,
	// 				y: 30,
	// 				filter: "blur(6px)",
	// 				duration: 0.6,
	// 				ease: "power2.out",
	// 				stagger: 0.06,
	// 			},
	// 			0.45
	// 		);


	// 	ScrollTrigger.create({
	// 		trigger: ".animater",
	// 		// The trigger point moves down the scrollable distance
	// 		start: "40% top",
	// 		// markers: { startColor: "purple", endColor: "purple", indent: 10 * i },

	// 		// When scroll reaches the start point (scrolling down): Play the transition
	// 		onEnter: () => transitionTimelines[0].play(),

	// 		// When scroll scrolls back past the start point (scrolling up): Reverse the transition
	// 		onLeaveBack: () => transitionTimelines[0].reverse(),
	// 		markers: true
	// 	})
	// 	ScrollTrigger.create({
	// 		trigger: ".animater",
	// 		// The trigger point moves down the scrollable distance
	// 		start: "80% top",
	// 		// markers: { startColor: "purple", endColor: "purple", indent: 10 * i },

	// 		// When scroll reaches the start point (scrolling down): Play the transition
	// 		onEnter: () => transitionTimelines[1].play(),

	// 		// When scroll scrolls back past the start point (scrolling up): Reverse the transition
	// 		onLeaveBack: () => transitionTimelines[1].reverse(),
	// 		markers: true
	// 	})
	// 	ScrollTrigger.create({
	// 		trigger: ".animater",
	// 		// The trigger point moves down the scrollable distance
	// 		start: "bottom top",
	// 		// markers: { startColor: "purple", endColor: "purple", indent: 10 * i },

	// 		// When scroll reaches the start point (scrolling down): Play the transition
	// 		onEnter: () => transitionTimelines[2].play(),

	// 		// When scroll scrolls back past the start point (scrolling up): Reverse the transition
	// 		onLeaveBack: () => transitionTimelines[2].reverse(),
	// 		markers: true
	// 	})


	// 	return () => {
	// 		observer.kill()
	// 		floatTl.kill()
	// 	}

	// }, { scope: skillsContainer.current! })



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
				start: "bottom 75%",
				end: "bottom 55%",
				pin: true,
				// pinSpacing: true,
				scrub: true,
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
			endTrigger: "#projects",
			end: "bottom 88%",
			pin: ".big-wrap",
			// pinSpacing: true,
			// markers: true
		});

		gsap.to(".bigSkill", {
			scale: 0.2,
			scrollTrigger: {
				invalidateOnRefresh: true,
				trigger: ".bigSkill",
				start: "bottom 74%",
				end: "bottom 15%",
				scrub: true,
				// markers: true
			}
		})


		// icons floating and mouse move code 

		const icons = gsap.utils.toArray<HTMLElement>(".logo")

		// PERFORMANCE HINT
		gsap.set(icons, {
			transformOrigin: "center center",
			willChange: "transform",
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

			icon.addEventListener("mouseenter", () =>
				gsap.to(icon, { scale: 1.1, duration: 0.3 })
			)
			icon.addEventListener("mouseleave", () =>
				gsap.to(icon, { scale: 1, duration: 0.3 })
			)
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
		//    MOUSE PARALLAX
		// ----------------------------- */
		// const movers = icons.map((icon, i) => {
		// 	const dirX = i % 2 === 0 ? 1 : -1
		// 	const dirY = i % 3 === 0 ? -1 : 1

		// 	return {
		// 		x: gsap.quickTo(icon, "x", { duration: 0.6, ease: "power3.out" }),
		// 		y: gsap.quickTo(icon, "y", { duration: 0.6, ease: "power3.out" }),
		// 		depthX: (10 + i * 1) * dirX,
		// 		depthY: (10 + i * 1) * dirY,
		// 	}
		// })

		// const observer = Observer.create({
		// 	target: window,
		// 	type: "pointer",
		// 	onMove(self) {
		// 		const x = self.x / window.innerWidth - 0.5
		// 		const y = self.y / window.innerHeight - 0.5

		// 		movers.forEach((m) => {
		// 			m.x(x * m.depthX)
		// 			m.y(y * m.depthY)
		// 		})
		// 	},
		// })

		// // Make motion smoother on low-FPS devices
		// gsap.ticker.lagSmoothing(1000, 16)


		/* -----------------------------
		   PANEL TRANSITIONS (NEW LOGIC)
		----------------------------- */

		const panels = gsap.utils.toArray<HTMLElement>(".panel")
		// Assuming we have 3 panels: Front, Back, Tools
		const panelData = [
			{ id: "frontPanel", logoClass: ".frontLogo" },
			{ id: "backPanel", logoClass: ".backLogo" },
			{ id: "toolPanel", logoClass: ".toolLogo" }
		];

		// CRITICAL FIX 1: Set Initial States
		gsap.set(panels.slice(1), { opacity: 0, pointerEvents: "none" });
		gsap.set(panels[0], { opacity: 1, pointerEvents: "none" });


		// 1. Create Individual Transition Timelines (paused)
		const transitionTimelines = panels.map((panel, i) => {
			const currentPanel = panels[i];
			const nextPanel = panels[i + 1];

			if (!nextPanel) return null; // Last panel has no transition out

			// 1a. Determine specific selectors for the current panel's content
			const currentPanelData = panelData.find(d => d.id === currentPanel.id);
			const currentLogoSelector = `#${currentPanel.id} ${currentPanelData?.logoClass || '.logo'}`;
			const currentCardSelector = `#${currentPanel.id} #frontCard`; // Card has generic ID, scoped by Panel ID

			// 1b. Determine specific selectors for the next panel's content
			const nextPanelData = panelData.find(d => d.id === nextPanel.id);
			const nextLogoSelector = `#${nextPanel.id} ${nextPanelData?.logoClass || '.logo'}`;
			const nextCardSelector = `#${nextPanel.id} #frontCard`;


			return gsap.timeline({ paused: true })

				/* =====================
				   OUTRO — Current Panel Content (Staggered Out First)
				   ===================== */
				// Outro: Text out first, then logos
				.to(currentCardSelector, {
					opacity: 0,
					y: "-30vw",
					filter: "blur(6px)",
					duration: 0.6,
					ease: "power2.in",
					// stagger: -0.05, // Reverse stagger
				}, 0)
				.to(currentLogoSelector, {
					opacity: 0,
					y: "-50vh",
					scale: 0.85,
					duration: 0.8,
					ease: "power3.in",
					stagger: 0.08,
				}, 0.3) // Start logos shortly after text

				/* =====================
				   OUTRO — Current Panel Container (Final fade/slide out)
				   ===================== */
				.to(currentPanel, {
					opacity: 0,

					scale: 0.96,
					duration: 0.7,
					ease: "expo.inOut",
					onComplete: () =>
						gsap.set(currentPanel, { pointerEvents: "none" })
				}, 0.3) // Start container fade after content started to move out

				/* =====================
				   INTRO — Next Panel Container (Fade/slide in)
				   ===================== */
				.fromTo(nextPanel,
					{
						opacity: 0,
						// y: "60vh",
						scale: 1.05,
					},
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.8,
						ease: "expo.inOut",
						onStart: () =>
							gsap.set(nextPanel, { pointerEvents: "auto" })
					},
					0.3 // Start with container intro, slightly after outro started
				)

				/* =====================
				   INTRO — Next Panel Content (Staggered In - Logos First)
				   ===================== */
				.from(
					nextLogoSelector,
					{
						opacity: 0,
						y: "50vh", // 
						scale: 0.85,
						duration: 0.6,
						ease: "power3.out",
						stagger: 0.08,
					},
					1.2// Logos appear AFTER the container has started its move
				)
				.from(
					nextCardSelector,
					{
						opacity: 0,
						y: "30vw",
						filter: "blur(6px)",
						duration: 0.6,
						ease: "power2.out",
						stagger: 0.06,
					},
					0.8 // Text comes AFTER logos, matching the request
				);

		}).filter(tl => tl !== null); // Filter out the null for the last panel


		// Pin the container
		ScrollTrigger.create({
			trigger: ".animater",
			start: "top top",
			end: "+=120%", // Keep this or adjust based on your content/needs
			pin: ".pined",
			// markers: true,
			pinSpacing: true
		});


		// Initial Front Panel Load Animation (Improved with specific selectors)
		const frontPanelTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".animater",
				start: "top 20%",
				toggleActions: "play none none reverse",
				// markers: true
			}
		});

		frontPanelTl.fromTo(
			"#frontPanel",
			{
				opacity: 0,
				y: "50vh",
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: "expo.inOut",
				onStart: () =>
					gsap.set("#frontPanel", { pointerEvents: "auto" }),
			}
		)
			/* =====================
					   LOGOS — COME IN FIRST (Front Panel)
					   ===================== */
			.from(
				"#frontPanel .frontLogo", // <-- Specific Selector
				{
					opacity: 0,
					y: "50vh", // Keeping the original logo animation for first panel
					scale: 0.85,
					duration: 0.6,
					ease: "power3.out",
					stagger: 0.08,
				},
				0.3 // logos appear BEFORE text
			)

			/* =====================
			   TEXT — COMES AFTER (Front Panel)
			   ===================== */
			.from(
				"#frontPanel #frontCard", // <-- Specific Selector
				{
					opacity: 0,
					y: "30vw",
					filter: "blur(6px)",
					duration: 0.6,
					ease: "power2.out",
					// stagger: 0.06,
				},
				0
			);


		// ScrollTrigger for each transition (P1->P2, P2->P3)
		ScrollTrigger.create({
			trigger: ".animater",
			start: "40% top",
			// markers: { startColor: "purple", endColor: "purple", indent: 10 * 0 },
			onEnter: () => transitionTimelines[0].play(),
			onLeaveBack: () => transitionTimelines[0].reverse(),
			// markers: true
		})
		ScrollTrigger.create({
			trigger: ".animater",
			start: "80% top",
			// markers: { startColor: "purple", endColor: "purple", indent: 10 * 1 },
			onEnter: () => transitionTimelines[1].play(),
			onLeaveBack: () => transitionTimelines[1].reverse(),
			// markers: true
		})
		// // Assuming you have a total of 3 panels (2 transitions), the last trigger will be for the outro of the last panel, which is not defined in the current transitionTimelines array.
		// // Since transitionTimelines.length is 2 (P1->P2, P2->P3), the third trigger should probably be a placeholder or adjust your `end` of the ScrollTrigger pinning the `.animater` container.

		// // I will remove the third ScrollTrigger, as transitionTimelines[2] doesn't exist.
		// // The `frontPanelTl` will handle the P1 reverse.
		// // The two `ScrollTrigger.create` calls above handle the P1->P2 and P2->P3 transitions.


		// ScrollTrigger.create({
		// 	trigger: ".animater",
		// 	// The trigger point moves down the scrollable distance
		// 	start: "bottom top",
		// 	// markers: { startColor: "purple", endColor: "purple", indent: 10 * i },

		// 	// When scroll reaches the start point (scrolling down): Play the transition
		// 	onEnter: () => transitionTimelines[2].play(),

		// 	// When scroll scrolls back past the start point (scrolling up): Reverse the transition
		// 	onLeaveBack: () => transitionTimelines[2].reverse(),
		// 	markers: true
		// })



		return () => {
			// observer.kill()
			floatTl.kill()
		}

	}, { scope: skillsContainer.current! })

	return (
		<div ref={skillsContainer} id="skills" className="">
			<div className="mainContent font-clashDisplay  w-screen min-h-screen flex flex-col gap-[5.71vw] justify-center ">
				<div className="big-wrap flex justify-center  w-screen">
					<div className="bigSkill leading-0 text-[35vw] mt-0 mb-[15.24vw] font-extrabold text-[var(--text)] ">Skills</div>
				</div>

				<div className="pined  ">
					<div className="animater relative flex flex-col min-h-screen min-w-screen ">
						<div id="frontPanel" className="panel  absolute z-50  opacity-0 pointer-events-none  min-h-screen min-w-screen flex items-center justify-center">

							<div id="frontCard" className="flex-col flex justify-center items-center border-2 border-[var(--border)] p-[3vw] gap-[2vw] rounded-[3.5vw] bg-[var(--border)]/30">

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

							<div id="html" className="frontLogo logo absolute top-[15%] left-[15%] "><svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 18.1778L16.6192 16.9222L17.2434 10.1444H9.02648L8.82219 7.88889H17.4477L17.6747 5.67778H6.32535L6.96091 12.3556H14.7806L14.5195 15.2222L12 15.8889L9.48045 15.2222L9.32156 13.3778H7.0517L7.38083 16.9222L12 18.1778ZM3 2H21L19.377 20L12 22L4.62295 20L3 2Z"></path></svg></div>
							<div id="css" className="frontLogo logo absolute top-[45%] left-[10%] "><svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M5.00006 3L4.35006 6.34H17.9401L17.5001 8.5H3.92006L3.26006 11.83H16.8501L16.0901 15.64L10.6101 17.45L5.86006 15.64L6.19006 14H2.85006L2.06006 18L9.91006 21L18.9601 18L20.1601 11.97L20.4001 10.76L21.9401 3H5.00006Z"></path></svg></div>
							<div id="tailwind" className="frontLogo logo absolute top-[77%] left-[47%] "><svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M11.9996 4.85999C8.82628 4.85999 6.84294 6.44665 6.04961 9.61999C7.23961 8.03332 8.62794 7.43832 10.2146 7.83499C11.12 8.06109 11.7666 8.71757 12.4835 9.44545C13.6507 10.6295 15.0004 12 17.9496 12C21.1229 12 23.1063 10.4133 23.8996 7.23998C22.7096 8.82665 21.3213 9.42165 19.7346 9.02499C18.8292 8.79889 18.1827 8.1424 17.4657 7.41452C16.2995 6.23047 14.9498 4.85999 11.9996 4.85999ZM6.04961 12C2.87628 12 0.892943 13.5867 0.0996094 16.76C1.28961 15.1733 2.67794 14.5783 4.26461 14.975C5.17 15.2011 5.81657 15.8576 6.53354 16.5855C7.70073 17.7695 9.05039 19.14 11.9996 19.14C15.1729 19.14 17.1563 17.5533 17.9496 14.38C16.7596 15.9667 15.3713 16.5617 13.7846 16.165C12.8792 15.9389 12.2326 15.2824 11.5157 14.5545C10.3495 13.3705 8.99982 12 6.04961 12Z"></path></svg></div>
							<div id="js" className="frontLogo logo absolute top-[35%] left-[82%] "><svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z"></path></svg></div>
							<div id="gsap" className="frontLogo logo absolute top-[72%] left-[74%] ">
								<svg width={"6vw"}
									viewBox="0 0 500 500"
								>
									{/* The transparent rect is removed as the background is typically handled by the container */}
									<g transform="matrix(5.94 0 0 5.94 250 250)">
										<g>
											{/* Path 0 */}
											<g transform="matrix(1 0 0 1 -9.85 0)" id="path_0">
												<path
													stroke="none"
													strokeWidth={1}
													strokeDasharray="none"
													strokeLinecap="round"
													strokeDashoffset={0}
													strokeLinejoin="miter"
													strokeMiterlimit={4}
													fill={"#ffffff"}
													fillRule="nonzero"
													opacity={1}
													transform="translate(-39.77, -50.28)"
													d="M 50.2089 44.1964 C 50.3131 44.0957 50.374 43.9584 50.3788 43.8133 L 50.3808 43.8133 C 50.4511 41.0533 49.8123 38.8975 48.4837 37.4051 C 47.0808 35.8298 44.932 35.0209 42.0966 35.0005 C 39.2663 35.0005 36.8282 35.8848 35.0453 37.5578 C 33.359 39.141 32.4075 41.3327 32.3646 43.7288 C 32.2923 47.8603 34.6265 50.4878 37.2296 53.0309 C 39.2449 55.1041 39.6147 56.1292 39.5944 57.2988 C 39.5699 58.6519 38.926 59.4282 37.8267 59.4282 C 37.3733 59.4282 37.0096 59.2875 36.7487 59.0104 C 36.3412 58.5825 36.1609 57.8092 36.2271 56.7742 C 36.2381 56.705 36.2342 56.6341 36.2156 56.5667 C 36.2076 56.5379 36.1971 56.51 36.1841 56.4832 C 36.1666 56.4473 36.1448 56.4138 36.1191 56.3829 C 36.0676 56.318 36.0023 56.2653 35.9279 56.2287 C 35.8536 56.1919 35.772 56.1722 35.6891 56.171 L 29.7391 56.171 C 29.594 56.1705 29.4544 56.2267 29.35 56.3277 C 29.2456 56.4284 29.1846 56.566 29.1798 56.711 C 29.0402 59.58 29.7085 61.803 31.1665 63.318 C 32.6031 64.8097 34.763 65.5657 37.5903 65.5657 C 43.1267 65.5657 46.7649 62.1067 46.8597 56.7558 C 46.9178 53.4465 45.7104 50.9432 42.6977 48.117 C 40.4094 45.898 39.6056 44.6061 39.631 43.1848 C 39.6534 41.9102 40.4196 41.1807 41.6076 41.1807 C 42.7956 41.1807 43.3763 41.9978 43.3763 43.6758 C 43.3763 44.0477 43.6911 44.3534 44.0681 44.3534 L 49.8204 44.3534 C 49.9654 44.3536 50.1047 44.2971 50.2089 44.1964 Z"
												/>
											</g>

											{/* Path 1 */}
											<g transform="matrix(1 0 0 1 -29.49 0.01)" id="path_1">
												<path
													stroke="none"
													strokeWidth={1}
													strokeDasharray="none"
													strokeLinecap="round"
													strokeDashoffset={0}
													strokeLinejoin="miter"
													strokeMiterlimit={4}
													fill={"#ffffff"}
													fillRule="nonzero"
													opacity={1}
													transform="translate(-20.13, -50.3)"
													d="M 32.2587 49.2896 L 32.2587 49.2764 L 32.2556 49.2764 C 32.2607 48.9993 32.0681 48.7456 31.7951 48.71 C 31.7716 48.7048 31.7462 48.7048 31.7217 48.7048 L 21.1972 48.7048 L 21.1972 48.717 C 20.9251 48.7496 20.704 48.9342 20.65 49.1777 L 19.5537 53.9395 C 19.5392 54.0037 19.5396 54.0704 19.555 54.1343 C 19.5703 54.1982 19.6002 54.2579 19.6424 54.3084 C 19.6973 54.3731 19.7657 54.4251 19.8428 54.4607 C 19.9198 54.4962 20.0038 54.5144 20.0886 54.5141 L 21.6923 54.5141 C 21.785 54.5141 21.9062 54.5276 21.95 54.5845 C 21.9918 54.6395 21.9888 54.7629 21.945 54.9218 C 21.6332 56.066 20.8915 57.3202 19.9704 58.0455 C 19.0484 58.7698 17.5262 59.2039 16.4595 58.5499 C 15.2563 57.8112 15.0525 56.0292 15.0026 54.7619 C 14.8976 52.0394 15.4305 49.306 16.4769 46.7895 C 17.2257 44.9881 18.6378 41.7381 21.0321 41.7381 C 22.3892 41.7381 23.0718 42.8587 23.1227 45.1613 C 23.124 45.2128 23.1345 45.2632 23.1534 45.3105 C 23.1745 45.3632 23.2061 45.4117 23.2468 45.4528 C 23.324 45.5304 23.428 45.5757 23.5374 45.5789 L 29.7829 45.5789 C 29.9289 45.5789 30.069 45.5217 30.1735 45.4197 C 30.278 45.3177 30.3385 45.1789 30.3422 45.0329 C 30.3382 41.7033 29.5781 39.1604 28.0804 37.4712 C 26.6642 35.8746 24.6286 35.0749 22.0357 35.0972 C 13.512 35.0972 9.0852 43.7094 8.14782 52.2444 C 7.62827 56.7904 8.48611 60.564 10.5625 62.8688 C 12.1336 64.613 13.9858 65.4963 16.7326 65.4963 C 19.7901 65.4963 22.0784 64.8177 23.9348 63.3628 C 26.1171 61.6542 27.7697 58.8086 28.9902 54.6681 C 29.0038 54.6223 29.0317 54.5823 29.0699 54.5537 C 29.1081 54.5248 29.1545 54.5094 29.2022 54.5092 L 30.5256 54.5092 C 30.8353 54.5092 31.1043 54.3124 31.1634 54.0435 L 32.2587 49.2896 Z"
												/>
											</g>

											{/* Path 2 */}
											<g transform="matrix(1 0 0 1 7.18 0.06)" id="path_2">
												<path
													stroke="none"
													strokeWidth={1}
													strokeDasharray="none"
													strokeLinecap="round"
													strokeDashoffset={0}
													strokeLinejoin="miter"
													strokeMiterlimit={4}
													fill={"#ffffff"}
													fillRule="evenodd"
													opacity={1}
													transform="translate(-56.8, -50.34)"
													d="M 68.2084 64.559 L 68.2461 36.0997 C 68.2472 36.0285 68.234 35.9576 68.2074 35.8915 C 68.1954 35.8619 68.1808 35.8333 68.1638 35.8064 C 68.143 35.7733 68.1186 35.7427 68.0909 35.7149 C 68.0677 35.6912 68.0423 35.6701 68.0153 35.6514 C 67.984 35.6298 67.9504 35.6114 67.915 35.597 C 67.8491 35.5699 67.7784 35.5562 67.7071 35.5567 L 58.8046 35.5567 C 58.505 35.5567 58.3736 35.8144 58.288 35.9845 L 45.3976 64.3846 L 45.3976 64.3899 L 45.3926 64.3971 C 45.2499 64.7463 45.5209 65.1204 45.8989 65.1204 L 52.122 65.1204 C 52.4582 65.1204 52.6813 65.0184 52.7903 64.8065 L 54.0262 61.8365 C 54.178 61.4403 54.2065 61.4035 54.6385 61.4035 L 60.5844 61.4035 C 60.9981 61.4035 61.0062 61.4117 61.0001 61.8161 L 60.8667 64.5774 C 60.8662 64.6078 60.8683 64.6381 60.873 64.6679 C 60.8792 64.708 60.8901 64.7473 60.9053 64.7851 C 60.9319 64.8513 60.9714 64.9112 61.0215 64.962 C 61.0716 65.0125 61.1313 65.0525 61.1971 65.0796 C 61.2629 65.107 61.3334 65.1207 61.4046 65.1204 L 67.6919 65.1204 C 67.7697 65.1214 67.8468 65.1052 67.9177 65.0731 C 67.9886 65.0411 68.0517 64.994 68.1024 64.9348 C 68.1462 64.8836 68.1784 64.8234 68.1967 64.7585 C 68.2149 64.6936 68.219 64.6257 68.2084 64.559 Z M 57.1948 55.0574 C 57.1478 55.0574 57.1009 55.0559 57.0542 55.0522 C 57.0324 55.0504 57.0112 55.0437 56.9922 55.033 C 56.9732 55.0221 56.9568 55.0071 56.9442 54.9892 C 56.9382 54.9808 56.933 54.9716 56.9289 54.9621 C 56.9244 54.9517 56.9212 54.9407 56.9191 54.9295 C 56.917 54.9173 56.9163 54.9052 56.9171 54.893 C 56.9177 54.8833 56.9193 54.8738 56.9217 54.8646 C 56.9287 54.8412 56.9374 54.8129 56.9485 54.7798 C 56.9566 54.7554 56.9659 54.7285 56.9767 54.6997 L 61.4352 43.6676 C 61.4752 43.5589 61.5215 43.4524 61.5737 43.3487 C 61.6461 43.2 61.7337 43.1898 61.7612 43.2999 C 61.7846 43.3915 61.2498 54.6273 61.2498 54.6273 C 61.208 55.0482 61.1886 55.0653 60.7739 55.1002 L 57.1988 55.0594 L 57.1907 55.0594 L 57.1948 55.0574 Z"
												/>
											</g>

											{/* Path 3 */}
											<g transform="matrix(1 0 0 1 30.49 0.05)" id="path_3">
												<path
													stroke="none"
													strokeWidth={1}
													strokeDasharray="none"
													strokeLinecap="round"
													strokeDashoffset={0}
													strokeLinejoin="miter"
													strokeMiterlimit={4}
													fill={"#ffffff"}
													fillRule="evenodd"
													opacity={1}
													transform="translate(-80.11, -50.34)"
													d="M 76.1645 35.5567 L 80.8909 35.5567 L 80.896 35.5537 C 87.8669 35.5537 91.3473 38.7132 91.2372 44.9483 C 91.1088 52.2546 86.6565 57.6239 79.9526 58.8616 C 79 59.037 78.031 59.1051 77.0631 59.1002 L 73.8263 59.0857 C 73.7732 59.0855 73.7221 59.1061 73.684 59.1429 C 73.6459 59.18 73.6238 59.2305 73.6225 59.2835 C 73.6218 59.3193 73.6313 59.3546 73.6499 59.3852 C 73.6685 59.4158 73.6954 59.4407 73.7274 59.4566 L 74.1217 59.6616 L 75.1406 60.1934 L 76.1645 60.7262 C 76.2703 60.7814 76.3763 60.8366 76.4824 60.8911 C 76.7086 61.0095 76.7962 61.205 76.7453 61.4577 L 76.028 64.6946 C 75.9689 64.9644 75.7519 65.1204 75.434 65.1204 L 69.5268 65.1204 C 69.4421 65.1204 69.3584 65.102 69.2815 65.0664 C 69.2046 65.0309 69.1364 64.9791 69.0816 64.9147 C 69.0393 64.864 69.0092 64.8043 68.9937 64.7401 C 68.9781 64.6759 68.9775 64.6092 68.9919 64.5448 L 75.5695 35.9867 C 75.6347 35.6892 75.9149 35.5567 76.1645 35.5567 Z M 79.1558 52.5511 L 79.2822 52.5511 C 82.3845 52.4257 84.0758 48.7598 84.138 45.2031 C 84.1736 43.1482 83.4237 41.9448 82.0789 41.904 L 77.758 41.904 C 77.7056 41.904 77.6553 41.9244 77.6178 41.961 C 77.5803 41.9975 77.5586 42.0473 77.5573 42.0998 C 77.5564 42.1356 77.5655 42.1712 77.5837 42.202 C 77.6019 42.2331 77.6284 42.2582 77.6602 42.2749 C 77.6602 42.2749 80.3927 43.7156 80.5802 43.8196 C 80.7269 43.8999 80.7289 44.0365 80.681 44.274 C 80.6805 44.2792 80.2623 46.1174 79.8218 48.0556 C 79.3302 50.2186 78.8108 52.5066 78.8135 52.5103 C 78.8216 52.5205 78.8716 52.5511 79.1558 52.5511 Z"
												/>
											</g>
										</g>
									</g>
								</svg>
							</div>
							<div id="threejs" className="frontLogo logo absolute top-[70%] left-[20%] ">
								<svg width={"6vw"}
									version="1.1"
									id="Layer_1"
									x="0px"
									y="0px"
									viewBox="0 0 640 640"
									style={{ enableBackground: 'new 0 0 640 640' }} // Converted to JSX style object
								// xml:space="preserve" // Removed for JSX
								>
									{/* The original <style> block styles are applied directly to the elements below, 
      with kebab-case attributes converted to camelCase. */}

									{/* Original class="st0": fill="#FFFFFF" */}
									<polyline
										fill="#FFFFFF"
										points="171.7,621.7 20,18.4 620,186.9"
									/>

									<g>
										{/* Original class="st1": fill="#FFFFFF" stroke="#000000" strokeWidth="7" stroke-miterlimit="10" */}
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="245.8"
											y1="362.4"
											x2="283.7"
											y2="513.3"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="395.5"
											y1="404.8"
											x2="245.8"
											y2="362.4"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="283.7"
											y1="513.3"
											x2="395.5"
											y2="404.8"
										/>
										<path
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											d="M134,470.9"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="283.7"
											y1="513.3"
											x2="134"
											y2="470.9"
										/>
										<path
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											d="M134,470.9"
										/>

										{/* Original class="st2": fill="none" stroke="#000000" strokeWidth="7" stroke-miterlimit="10" */}
										<polyline
											fill="none"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											points="134,470.9 171.9,621.9 283.7,513.3"
										/>

										{/* Original class="st1" */}
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="134"
											y1="470.9"
											x2="245.8"
											y2="362.4"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="245.8"
											y1="362.4"
											x2="357.7"
											y2="253.8"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="357.7"
											y1="253.8"
											x2="469.5"
											y2="145.3"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="319.8"
											y1="102.9"
											x2="357.7"
											y2="253.8"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="357.7"
											y1="253.8"
											x2="207.9"
											y2="211.5"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="207.9"
											y1="211.5"
											x2="245.8"
											y2="362.4"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="245.8"
											y1="362.4"
											x2="96.1"
											y2="320"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="96.1"
											y1="320"
											x2="134"
											y2="470.9"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="58.2"
											y1="169.1"
											x2="96.1"
											y2="320"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="207.9"
											y1="211.5"
											x2="58.2"
											y2="169.1"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="96.1"
											y1="320"
											x2="207.9"
											y2="211.5"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="207.9"
											y1="211.4"
											x2="319.8"
											y2="102.9"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="319.8"
											y1="102.9"
											x2="170"
											y2="60.5"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="170"
											y1="60.5"
											x2="207.9"
											y2="211.4"
										/>

										{/* Original class="st2" */}
										<polyline
											fill="none"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											points="58.2,169.1 20.3,18.1 170,60.5"
										/>

										{/* Original class="st1" */}
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="58.2"
											y1="169.1"
											x2="170"
											y2="60.5"
										/>

										{/* Original class="st2" */}
										<polyline
											fill="none"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											points="507.4,296.2 619.2,187.7 469.5,145.3"
										/>

										{/* Original class="st1" */}
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="469.5"
											y1="145.3"
											x2="507.4"
											y2="296.2"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="507.4"
											y1="296.2"
											x2="357.7"
											y2="253.8"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="357.7"
											y1="253.8"
											x2="395.5"
											y2="404.8"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="395.5"
											y1="404.8"
											x2="507.4"
											y2="296.2"
										/>
										<line
											fill="#FFFFFF"
											stroke="#000000"
											strokeWidth={7}
											strokeMiterlimit={10}
											x1="469.5"
											y1="145.3"
											x2="319.8"
											y2="102.9"
										/>
									</g>
								</svg>
							</div>
							<div id="react" className="frontLogo logo absolute top-[10%] left-[80%] "><svg width={"6vw"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#ffffff"></path> </g></svg></div>
						</div>


						<div id="backPanel" className="panel  absolute z-50 opacity-0 min-h-screen pointer-events-none min-w-screen flex items-center justify-center">

							<div id="frontCard" className="flex-col flex justify-center items-center border-2 border-[var(--border)] p-[3vw] gap-[2vw] rounded-[3.5vw] bg-[var(--border)]/30">

								<div className="font-extrabold tracking-wider flex  items-center">
									<span className=" text-[3vw] font-normal">&lt;&nbsp; </span>
									<span className="text-[3vw]"> Backend </span>
									<span className=" text-[3vw] font-normal"> &nbsp;/&gt;</span>
								</div>

								<div className="text-[1.3vw] text-center">
									<p>Building robust, efficient backends that make apps fast, reliable, and seamless.</p>
								</div>
							</div>

							<div id="nextjs" className="backLogo logo absolute top-[15%] left-[15%] "><svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.6644 17.6493L10.2602 8H8V16H10V10.9462L16.0869 18.8788C14.8907 19.5909 13.4931 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.2053 19.1077 16.2022 17.6644 17.6493ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14 12V8H16V12H14Z"></path></svg></div>
							<div id="nodejs" className="backLogo logo absolute top-[45%] left-[10%] "><svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M12.8873 1.36173C12.3396 1.03958 11.6604 1.03958 11.1127 1.36173L3.36271 5.92056C2.8282 6.23498 2.5 6.8088 2.5 7.42894V16.571C2.5 17.1912 2.8282 17.765 3.36272 18.0794L5.98596 19.6225C7.31923 20.4068 9 19.4454 9 17.8986V7.74655H7V17.8986L4.5 16.428V7.57193L12 3.16016L19.5 7.57193V16.428L12 20.8398L10.2316 19.7996L9.21757 21.5234L11.1127 22.6382C11.6604 22.9604 12.3396 22.9604 12.8873 22.6382L20.6373 18.0794C21.1718 17.765 21.5 17.1912 21.5 16.571V7.42894C21.5 6.8088 21.1718 6.23498 20.6373 5.92056L12.8873 1.36173ZM13.9999 7.49998C12.6372 7.49998 11.6712 7.85114 11.0504 8.46993C10.4336 9.08484 10.3135 9.80885 10.3135 10.2313C10.3135 10.7862 10.4705 11.289 10.7951 11.7048C11.1076 12.1053 11.5199 12.3537 11.9146 12.5159C12.6341 12.8116 13.5358 12.9086 14.2587 12.9863L14.346 12.9957C15.1774 13.0856 15.7998 13.1627 16.2263 13.3411C16.4189 13.4217 16.4983 13.4954 16.531 13.5379C16.5524 13.5658 16.5934 13.6278 16.5934 13.7977C16.5934 14.0618 16.5027 14.2319 16.2204 14.3926C15.873 14.5904 15.2596 14.7396 14.3368 14.7396C13.4218 14.7396 12.7838 14.5705 12.4192 14.3181C12.1357 14.1218 11.9273 13.821 11.9822 13.1683L9.98923 13.0007C9.88075 14.29 10.3479 15.3167 11.2808 15.9625C12.1325 16.5521 13.2518 16.7396 14.3368 16.7396C15.414 16.7396 16.4289 16.5753 17.2098 16.1307C18.0558 15.6491 18.5934 14.8482 18.5934 13.7977C18.5934 13.2414 18.4381 12.7369 18.1162 12.3184C17.8054 11.9144 17.3942 11.6617 16.9981 11.496C16.2701 11.1915 15.3576 11.0932 14.6296 11.0147H14.6296L14.5609 11.0073C13.7274 10.9172 13.1036 10.8423 12.6748 10.666C12.4808 10.5863 12.4025 10.5137 12.3716 10.4742C12.3528 10.4501 12.3135 10.394 12.3135 10.2313C12.3135 10.1538 12.3363 10.0121 12.4624 9.88637C12.5847 9.76449 12.9618 9.49998 13.9999 9.49998C14.9904 9.49998 15.5674 9.60515 15.897 9.80064C16.1123 9.92838 16.3451 10.1633 16.3761 10.9329L18.3745 10.8524C18.3243 9.60675 17.8694 8.64527 16.9173 8.08051C16.0795 7.58349 15.0094 7.49998 13.9999 7.49998Z"></path></svg></div>
							<div id="expressjs" className="backLogo logo absolute top-[77%] left-[47%] "><svg width="6vw" fill="#ffffff" viewBox="-.9 2.3 623.3 616.8" xmlns="http://www.w3.org/2000/svg"><path d="m293.5 3.1c-51 2.5-97.7 16.6-140.4 42.3-23.9 14.4-52.3 38.1-71.2 59.1-56.9 63.6-82.8 136.8-78.8 223 2.4 51.9 16.3 98.1 42.4 141.5 30.8 51.1 82.6 98.2 134.7 122.4 41 19.1 81.8 27.7 130.8 27.7 64.5 0 118.6-15.8 168.5-49.2 30.7-20.5 57.1-45.7 80.1-76.2 43.1-57.4 62.8-123.5 59.3-199.2-2-42.7-10.9-78.9-28.4-115.2-22.3-46.3-54.9-85.6-97.7-117.5-46.4-34.8-102.5-55.4-158.3-58.3-22.6-1.1-26.3-1.2-41-.4zm-73.8 190.8c16.5 4.1 30.9 12.7 43.5 25.9 18.6 19.5 28.9 44.4 32.7 78.4.6 5.4 1.1 12.4 1.1 15.8v6h-172.3l.6 11.2c1.8 33.1 18.7 55.5 48.4 64 10.3 3 32.3 3.2 42.3.5 19.3-5.2 35.8-20.3 38.6-35.3l.6-3.4h38l-.8 3.2c-5.7 26.4-22.4 47.7-47.1 60.2-17.3 8.7-44.4 12.5-68 9.6-24-3-42.6-11.6-58.4-27-16.3-16-25.4-34.2-31.2-62.5-2.9-14.6-3.2-46.5-.5-59.1 6.7-30.9 23.2-57.1 45.6-72.3 12.2-8.3 29-15 42.7-17.1 10-1.5 34.8-.5 44.2 1.9zm171.2 38.6c15.6 22.8 28.7 41.5 29.2 41.5.4 0 13.9-18.5 30-41.1s29.7-41.3 30.3-41.5 11.4-.3 23.9-.2l22.8.3-39.7 53c-21.8 29.1-40.3 54-41.1 55.2-1.4 2.1.7 5.2 43.9 65.5 25 34.8 45.8 63.9 46.2 64.5.6 1-4.6 1.3-24.6 1.3l-25.3-.1-32.9-48.9c-18-27-33.1-49-33.5-49s-15.6 22-33.7 49l-32.9 48.9-23.7.1c-13.1 0-23.8-.2-23.8-.4 0-.3 20-28.5 44.5-62.8s44.3-62.8 44.1-63.4c-.3-.7-18.7-26-41-56.4s-40.6-55.6-40.6-56.1 10.9-.9 24.8-.9h24.7z" /><path d="m181 225c-14.6 1.9-25.4 7.3-36.1 18-6.3 6.1-8.4 9.2-12.2 17-4.3 8.9-7.7 20.7-7.7 26.4v2.6h131v-3.3c0-5.9-3.8-18.5-8-26.6-9.7-18.7-27.3-31.1-48.4-34-8.4-1.2-10.4-1.2-18.6-.1z" /></svg></div>
							<div id="mongo" className="backLogo logo absolute top-[35%] left-[82%] "><svg width={"4vw"} viewBox="0 0 120 258" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M83.0089 28.7559C72.1328 15.9086 62.7673 2.86053 60.8539 0.150554C60.6525 -0.0501848 60.3503 -0.0501848 60.1489 0.150554C58.2355 2.86053 48.8699 15.9086 37.9938 28.7559C-55.3594 147.292 52.6968 227.287 52.6968 227.287L53.6031 227.889C54.4087 240.235 56.4228 258 56.4228 258H60.451H64.4792C64.4792 258 66.4934 240.335 67.299 227.889L68.2052 227.187C68.306 227.187 176.362 147.292 83.0089 28.7559ZM60.451 225.48C60.451 225.48 55.6172 221.365 54.3081 219.257V219.057L60.1489 89.9813C60.1489 89.5798 60.7532 89.5798 60.7532 89.9813L66.594 219.057V219.257C65.2848 221.365 60.451 225.48 60.451 225.48Z" fill="white" />
							</svg>
							</div>
							<div id="ts" className="backLogo logo absolute top-[72%] left-[74%] ">
								<svg fill="none" height="6vw" viewBox="0 0 256 256" width="256" xmlns="http://www.w3.org/2000/svg"><rect fill="#ffffff" height="256" rx="20" width="256" /><path clipRule="evenodd" d="m150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179s12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899s11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163s-3.657-7.121-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661s-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597 2.591.719 5.11 1.625 7.558 2.719 2.447 1.093 4.708 2.359 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582s-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759 3.801 1.554 7.343 3.078 10.625 4.575 3.283 1.496 6.119 3.049 8.509 4.66s4.276 3.366 5.658 5.265 2.073 4.057 2.073 6.474c0 1.783-.432 3.438-1.296 4.963-.863 1.524-2.174 2.848-3.93 3.97s-3.945 1.999-6.565 2.632-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451zm-46.036-68.733h35.518v-22.742h-99v22.742h35.3447v101.258h28.1373z" fill="var(--bgColor)" fillRule="evenodd" /></svg>
							</div>

						</div>


						<div id="toolPanel" className="panel  absolute z-50 opacity-0 min-h-screen pointer-events-none min-w-screen flex items-center justify-center">

							<div id="frontCard" className="flex-col flex justify-center items-center border-2 border-[var(--border)] p-[3vw] gap-[2vw] rounded-[3.5vw] bg-[var(--border)]/30">

								<div className="font-extrabold tracking-wider flex  items-center">
									<span className=" text-[3vw] font-normal">&lt;&nbsp; </span>
									<span className="text-[3vw]"> Tools </span>
									<span className=" text-[3vw] font-normal"> &nbsp;/&gt;</span>
								</div>

								<div className="text-[1.3vw] text-center">
									<p>Mastering the stack with Git, Tailwind, Vite, Figma, and more—from code to design, I keep it smooth and polished.</p>
								</div>
							</div>

							<div id="vercel" className="toolLogo logo absolute top-[15%] left-[15%] "><svg width="6vw" viewBox="0 -17 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
								<g>
									<polygon fill="#ffffff" points="128 0 256 221.705007 0 221.705007">

									</polygon>
								</g>
							</svg></div>
							<div id="copilot" className="toolLogo logo absolute top-[45%] left-[10%] "><svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" ><path d="M8.66223 14.4841C8.66223 13.9312 9.11034 13.4829 9.6634 13.4829 10.2163 13.4829 10.6646 13.9312 10.6646 14.4841V16.4812C10.6646 17.0341 10.2165 17.4824 9.6634 17.4824 9.11034 17.4824 8.66223 17.0341 8.66223 16.4812V14.4841ZM15.3367 14.4841C15.3367 13.9312 14.8886 13.4829 14.3355 13.4829 13.7822 13.4829 13.3344 13.9314 13.3344 14.4841V16.4812C13.3344 17.0341 13.7825 17.4824 14.3355 17.4824 14.8886 17.4824 15.3367 17.0341 15.3367 16.4812V14.4841ZM11.9995 4.02765C11.1541 2.80927 9.40138 2.71883 8.0541 2.83958 6.51063 2.99438 5.21093 3.52495 4.48026 4.30434 3.2125 5.68959 3.15351 8.59518 3.76523 10.1949 3.70377 10.4683 3.64517 10.7453 3.60293 11.0385 2.4729 11.3362 1.32031 12.9371 1.32031 14.0819V16.2445C1.32031 16.8449 1.60059 17.3921 2.09466 17.7659 4.9186 19.8644 8.43899 21.49 11.9995 21.49 15.5599 21.49 19.0803 19.8644 21.9043 17.7659 22.3983 17.3921 22.6786 16.8449 22.6786 16.2445V14.0819C22.6786 12.9371 21.5261 11.3362 20.396 11.0385 20.3539 10.7453 20.2953 10.4683 20.2338 10.1949 20.8454 8.59518 20.7864 5.68959 19.5187 4.30434 18.788 3.52495 17.4883 2.99438 15.9449 2.83958 14.5976 2.71883 12.8449 2.80927 11.9995 4.02765ZM18.674 17.4874C17.139 18.3415 14.5891 19.4879 11.9995 19.4879 9.40986 19.4879 6.86 18.3415 5.325 17.4874V11.689C7.80186 12.6484 10.6522 12.1537 11.9975 9.93121H12.0014C13.3468 12.1537 16.1971 12.6484 18.674 11.689V17.4874ZM10.6646 6.82895C10.6646 8.41414 10.1848 10.1401 7.99479 10.1401 5.80474 10.1401 5.38758 9.61574 5.38758 8.14315 5.38758 5.80709 5.7441 4.80738 8.70396 4.80738 10.4143 4.80738 10.6646 5.35636 10.6646 6.82895ZM13.3344 6.82895C13.3344 5.35636 13.5847 4.80738 15.2951 4.80738 18.2548 4.80738 18.6114 5.80709 18.6114 8.14315 18.6114 9.61574 18.1942 10.1401 16.0042 10.1401 13.8141 10.1401 13.3344 8.41414 13.3344 6.82895Z"></path></svg></div>
							<div id="npm" className="toolLogo logo absolute top-[77%] left-[47%] "><svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M20.001 3C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3H20.001ZM19.001 5H5.00098V19H19.001V5ZM17.001 7V17H14.501V9.5H12.001V17H7.00098V7H17.001Z"></path></svg></div>
							<div id="figma" className="toolLogo logo absolute top-[35%] left-[82%] "><svg width="6vw" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
									fill="#ffffff"
								/>
							</svg></div>
							<div id="github" className="toolLogo logo absolute top-[72%] left-[74%] ">
								<svg width={"6vw"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
							</div>

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