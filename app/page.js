
import styles from "./styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import FrostedCard from "./components/frostedCard"
import Newsletter from "./components/newsletter"
import SpeechBubble from "./components/speechBubble"
import NavBar from "./components/navBar"

const Hero = () => {
    return <div id="home" className={`flex flex-col items-center justify-center w-full max-h-[100dvh]`}>
        <h1 className="font-medium">CASPER</h1>
        <SpeechBubble
            text={"Hi! I'm your personal desktop assistant, here to create the perfect work environment"}
            width={"w-1/2"}
            textStyle={"text-lg"}
        />
        {/* hero figure */}
        <div className={`${styles.heroFigGridArea} w-[56rem] mt-4`}>
            <Image
                src="/images/hero-casper.svg"
                width="0"
                height="0"
                alt="CASPER"
                className="container mx-auto w-2/5"
                priority
            />
            <div className="bg-opacity-60 grid grid-cols-9 grid-rows-5 auto-rows-min">
                <FrostedCard
                    prompt={"im sad, can you play sad music"}
                    classes={"col-span-3 col-end-4 row-end-1"}
                    padding={"py-5 px-6"}
                />
                <FrostedCard
                    prompt={"create a calendar event titled “CASPER weekly meeting” for Saturday 9am and set a notification for 1 hour before"}
                    classes={"col-span-3 col-start-7 row-end-4 row-span-3 self-start"}
                    padding={"py-5 px-6"}
                />
                <FrostedCard
                    prompt={"turn on my custom focus mode for work"}
                    classes={"col-span-3 col-end-5 row-start-4 row-span-2 self-start"}
                    padding={"py-5 px-6"}
                />
                <FrostedCard
                    prompt={"silence notifications"}
                    classes={"col-span-3 col-start-6 row-start-5"}
                    padding={"py-5 px-6"}
                />
            </div>
        </div>

        {/* <div className={`${styles.casperBackground} w-[56rem] h-[40%] mt-8 relative bg-slate-400`}>
            <FrostedCard
                prompt={"im sad, can you play sad music"}
                classes={"w-1/3"}
            />
            <FrostedCard
                prompt={"create a calendar event titled “CASPER weekly meeting” for Saturday 9am and set a notification for 1 hour before thanks CASPER i love you"}
                classes={"w-1/3"}
            />
            <FrostedCard
                prompt={"turn on my custom focus mode for work"}
                classes={"w-1/3"}
            />
            <FrostedCard
                prompt={"silence notifications"}
                classes={"w-1/3"}
            />
        </div> */}
    </div>
}

const About = () => {
    return <div id="about" className="w-full h-[100svh] flex flex-col items-center justify-center px-[10%] pb-[8%] font-medium">
        {/* <div className="flex flex-col items-center font-medium"> */}
            <h2>What is CASPER</h2>
            <h5 className="text-center w-3/5">Casper is your personal AI assistant that helps make navigating your desktop more efficient and reduces repetitive work</h5>
        {/* </div> */}
        <div className="mt-[4%] mb-[2%] text-center">
            <h3 className="pb-2">Interested and want to learn more?</h3>
            <h3>Download CASPER and join our Discord!</h3>
        </div>
        <div className="flex gap-20">
            {/* download button */}
            {/* need to figure out how to change the svg color so that i can invert the colors (w/o using filter preferably) */}
            <button className={`${styles.aboutBtn} bg-[--off-white] text-[--dark-blue] hover:bg-gray-300 flex justify-center items-center border-[--dark-blue] border-2`}>
                <Link className={`${styles.btnFlex}`} href="#">
                    <h5 className="">DOWNLOAD</h5>
                    <Image
                        src="/icons/download.svg"
                        width="0"
                        height="0"
                        alt="Download"
                        className="container mx-auto w-12 aspect-square"
                    />
                </Link>
            </button>
            {/* discord button */}
            <button className={`${styles.aboutBtn} bg-[--dark-blue] flex justify-center items-center`}>
                <Link className={`${styles.btnFlex}`}
                    href="https://discord.gg/br2z8KJd"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h5>DISCORD</h5>
                    <Image
                        src="/icons/discord.svg"
                        width="0"
                        height="0"
                        alt="Download"
                        className="container mx-auto w-12 aspect-square"
                    />
                </Link>
            </button>
        </div>
    </div>
}

export default function Home() {
    // let newsletterToken
    // typeof window !== "undefined" ? newsletterToken = localStorage.getItem("newsletterToken") : newsletterToken = null

    return <div className="relative">
        {/* background "gradient" */}
        <div>
            {/* old version with linear gradients, want to try to get this to work for better performance */}
            {/* <div className={`${styles.leftGradient} w-[200vw] h-screen absolute top-0 left-0 -translate-x-1/2`}></div> */}
            {/* <div className={`${styles.rightGradient} w-[200vw] h-screen absolute top-0 right-0 translate-x-1/2`}></div> */}

            <div className={`${styles.gradientClip} bg-[--orange] opacity-80 h-[200svh] aspect-square absolute top-0 left-0 -translate-x-[56%]`}></div>
            <div className={`${styles.gradientClip} bg-[--pink] opacity-80 h-[200svh] aspect-square absolute top-0 right-0 translate-x-[56%]`}></div>
            {/* applies blur to entire screen */}
            <div className={`${styles.gradientClipBlur} w-full h-screen`}></div>
            {/* this solution causes performance issues */}
        </div>
        <div className="relative z-30">
            <Newsletter/>
            <div className="fixed z-40 w-full mt-6 ml-8">
                <NavBar/>
            </div>
            <Hero/>
            <About/>
        </div>
    </div>
}
