import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Projects = () => {
    useGSAP(() => {

        // animation for scaling out projectt heading
        gsap.to(".bigProject", {
            scale: 1,
            scrollTrigger: {
                trigger: ".projectwrap",
                start: "top 60%",
                end: "center top",
                scrub: true,
                // markers: true
            }
        })


    })
    return (
        <>
            <div id='projects' className=' font-clashDisplay min-w-screen min-h-screen relative flex flex-col gap-[10vh]'>
                <div className="projectwrap flex items-center justify-center h-[30vh]">
                    <div
                        className="bigProject text-[6vw] transform scale-[4.2] font-erode font-extrabold ">
                        Projects
                    </div>
                </div>

                <div id='projectBox' className='bg-fuchsi-300 flex flex-col gap-26' >

                    <div id="" className='project w-full h-[60vh]  flex justify-center'>

                        <div id="projectText" className='w-[50%]  flex flex-col  justify-around items-center'>

                            <div className="heading  text-[var(--highlight)] font-erode font-semibold text-6xl ">Taskify</div>

                            <div className="para  w-[80%] text-2xl  text-justify mx-auto ">
                                <p>
                                    Taskify is a modern Todo application built with React and styled using Tailwind CSS. It uses React Hooks for state and lifecycle management, localStorage for persistent task data, and keyboard interactions for better UX. The app features task creation, editing, deletion, completion toggling, and a fully responsive, animated UI.
                                </p>
                            </div>

                            <div className="buttons  flex gap-[4vw]">

                                <button className="relative overflow-auto font-medium text-[18px] tracking-[0.05em] rounded-[0.8em] cursor-pointer border-2 border-[var(--text)] bg-[var(--text)] active:scale-[0.1] transition-transform duration-200 group">
                                    <span className=" relative z-10 inline-flex items-center px-[1.05em] py-[0.8em] transition-colors duration-400 group-hover:text-[var(--bgColor)]">
                                        Live App
                                    </span>
                                    {/* Animated skewed strip */}
                                    <span className="absolute top-0 left-[-10%] w-[120%] h-full bg-[var(--bgColor)] z-0 [transform:skew(30deg)] transition-[transform] duration-400 [transition-timing-function:cubic-bezier(0.3,1,0.8,1)]  group-hover:[transform:skew(30deg)_translateX(100%)] "></span>
                                </button>

                                <button className="relative overflow-auto font-medium text-[18px] tracking-[0.05em] rounded-[0.8em] cursor-pointer border-2 border-[var(--text)] bg-[var(--text)] active:scale-[0.1] transition-transform duration-200 group">
                                    <span className=" relative z-10 inline-flex items-center px-[1.05em] py-[0.8em] transition-colors duration-400 group-hover:text-[var(--bgColor)]">
                                        More to Know
                                    </span>
                                    {/* Animated skewed strip */}
                                    <span className="absolute top-0 left-[-10%] w-[120%] h-full bg-[var(--bgColor)] z-0 [transform:skew(30deg)] transition-[transform] duration-400 [transition-timing-function:cubic-bezier(0.3,1,0.8,1)]  group-hover:[transform:skew(30deg)_translateX(100%)] "></span>
                                </button>

                            </div>

                        </div>
                        <div id='projectPic' className="  w-[50%] flex justify-center items-center ">
                            <div className=" bg-[#015A4E] w-fit p-[1.67vw] rounded-[5vw] ">
                                <img className="me rounded-[5vw] w-[35.71vw] h-auto"
                                    src="/taskify.png"
                                    width="600"
                                    height="450"
                                    alt="me waving at u pal" />
                            </div>
                        </div>

                    </div>

                    <div id="" className='project w-full h-[60vh]  flex justify-center'>

                        <div id="projectText" className='w-[50%]  flex flex-col justify-around items-center'>

                            <div className="heading text-[var(--highlight)] font-erode font-semibold text-6xl ">Pulse</div>

                            <div className="para w-[80%] text-2xl  text-justify  ">
                                <p>
                                    Pulse | Sound of Heart is a web-based music player application built using vanilla JavaScript, HTML, and CSS. The app dynamically fetches songs from folders, updates the UI in real-time, and shows track progress. It features responsive design, intuitive controls, and smooth audio playback, showcasing practical DOM manipulation, event handling, and user experience design.
                                </p>
                            </div>

                            <div className="buttons  flex gap-[4vw]">

                                <button className="relative overflow-auto font-medium text-[18px] tracking-[0.05em] rounded-[0.8em] cursor-pointer border-2 border-[var(--text)] bg-[var(--text)] active:scale-[0.1] transition-transform duration-200 group">
                                    <span className=" relative z-10 inline-flex items-center px-[1.05em] py-[0.8em] transition-colors duration-400 group-hover:text-[var(--bgColor)]">
                                        Live App
                                    </span>
                                    {/* Animated skewed strip */}
                                    <span className="absolute top-0 left-[-10%] w-[120%] h-full bg-[var(--bgColor)] z-0 [transform:skew(30deg)] transition-[transform] duration-400 [transition-timing-function:cubic-bezier(0.3,1,0.8,1)]  group-hover:[transform:skew(30deg)_translateX(100%)] "></span>
                                </button>

                                <button className="relative overflow-auto font-medium text-[18px] tracking-[0.05em] rounded-[0.8em] cursor-pointer border-2 border-[var(--text)] bg-[var(--text)] active:scale-[0.1] transition-transform duration-200 group">
                                    <span className=" relative z-10 inline-flex items-center px-[1.05em] py-[0.8em] transition-colors duration-400 group-hover:text-[var(--bgColor)]">
                                        More to Know
                                    </span>
                                    {/* Animated skewed strip */}
                                    <span className="absolute top-0 left-[-10%] w-[120%] h-full bg-[var(--bgColor)] z-0 [transform:skew(30deg)] transition-[transform] duration-400 [transition-timing-function:cubic-bezier(0.3,1,0.8,1)]  group-hover:[transform:skew(30deg)_translateX(100%)] "></span>
                                </button>
                            </div>

                        </div>
                        <div id='projectPic' className="  w-[50%] flex justify-center items-center ">
                            <div className=" bg-[#015A4E] w-fit p-[1.67vw] rounded-[5vw] ">
                                <img className="me rounded-[5vw] w-[35.71vw] h-auto"
                                    src="/media.png"
                                    width="600"
                                    height="450"
                                    alt="me waving at u pal" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Projects