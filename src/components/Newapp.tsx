// import { useRef, useState } from "react"
// import About from "./components/About"
// import Home from "./components/Home"
// import Skills from "./components/Skills"
// import gsap from "gsap"
// import Menu from "./components/Menu"

// function Newapp() {
// 	const [page, setPage] = useState("home")
// 	const [menuOpen, setMenuOpen] = useState(false)
// 	const [lastPage, setLastPage] = useState("home")

// 	const homeRef = useRef(null)
// 	const aboutRef = useRef(null)
// 	const skillsRef = useRef(null)
// 	const menuRef = useRef(null)

// 	const goTo = (target: string) => {
// 		const tl = gsap.timeline({})

// 		// getting the current page
// 		const current = {
// 			home: homeRef,
// 			about: aboutRef,
// 			skills: skillsRef,
// 			menu: menuRef,
// 		}[page]

// 		// getting the next page
// 		const next = {
// 			home: homeRef,
// 			about: aboutRef,
// 			skills: skillsRef,
// 			menu: menuRef,
// 		}[target]

// 		if (current?.current && next?.current) {
// 			tl.to(current?.current, {
// 				opacity: 0,
// 				duration: 1,
// 				onComplete: () => {
// 					setPage(target)
// 				},
// 			}).fromTo(
// 				next.current,
// 				{ opacity: 0 },
// 				{ opacity: 1, duration: 1 },
// 				"-=1"
// 			)
// 		}
// 	}
// 	return (
// 		<>
// 			<div className="bg-black relative w-full h-screen overflow-scroll">
// 				{/* nav */}
// 				<button
// 					onClick={() => {
// 						if (!menuOpen) {
// 							setLastPage(page)
// 							setMenuOpen(true)
// 						} else {
// 							setMenuOpen(false)
// 						}
// 					}}
// 					id="hamburger"
// 					className={`fixed z-50 top-10 left-10 group w-14 h-12 flex justify-center items-center `}
// 					aria-label="Toggle menu"
// 					aria-expanded="false">
// 					<div className="icon flex flex-col gap-3  ">
// 						<div
// 							className={`line1 h-0.5 w-10 bg-black rounded-2xl transition-all ease-in-out ${
// 								menuOpen ? "rotate-45 translate-y-2.5" : ""
// 							}`}></div>
// 						<div
// 							className={`line2 h-0.5 w-10 bg-black rounded-2xl group-hover:scale-x-125 transition-all ease-in-out ${
// 								menuOpen ? "opacity-0" : ""
// 							}`}></div>
// 						<div
// 							className={`line3 h-0.5 w-10 bg-black rounded-2xl transition-all ease-in-out ${
// 								menuOpen ? "-rotate-45 -translate-y-2.5" : ""
// 							}`}></div>
// 					</div>
// 				</button>

// 				{/* loading pages */}

// 				<div>
// 					<Home menuopen={menuOpen} />
// 				</div>

// 				<div>
// 					<About menuopen={menuOpen} />
// 				</div>

// 				<div>
// 					<Skills menuopen={menuOpen} />
// 				</div>
// 				<div>
// 					<Menu goto={goTo} />
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Newapp
