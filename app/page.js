import styles from "./styles/Home.module.css"
import Image from "next/image"
import FrostedCard from "./components/frostedCard"

const Hero = () => {
    return <div className={`flex flex-col items-center justify-center w-full h-[100svh]`}>
        <h1 className="text-[7rem] font-medium">CASPER</h1>
        {/* speech bubble */}
        <div className="bg-[--off-white] w-2/6 rounded-lg">
            <p className="text-slate-800 text-center px-4 py-5">Hi! I&apos;m your personal desktop assistant, here to create the perfect work environment for you to lock in &gt;:&#41;</p>
        </div>
        <div className={styles.bubbleTail}></div>
        {/* hero figuer */}
        <div className={`${styles.heroFigGridArea} w-[56rem] mt-9`}>
            <div className={`w-[45%] h-full`}>
                <Image
                    src="/images/hero-casper.svg"
                    width={300}
                    height={300}
                    alt="CASPER"
                    className="container mx-auto"
                    priority
                />
            </div>
            <div className="bg-opacity-60 grid grid-cols-9 grid-rows-5 auto-rows-min">
                <FrostedCard
                    prompt={"im sad, can you play sad music"}
                    classes={"col-span-3 col-end-4 row-end-1"}
                />
                <FrostedCard
                    prompt={"create a calendar event titled “CASPER weekly meeting” for Saturday 9am and set a notification for 1 hour before thanks CASPER i love you"}
                    classes={"col-span-3 col-start-7 row-end-4 row-span-3 self-start"}
                />
                <FrostedCard
                    prompt={"turn on my custom focus mode for work"}
                    classes={"col-span-3 col-end-5 row-start-4 row-span-2 self-start"}
                />
                <FrostedCard
                    prompt={"silence notifications"}
                    classes={"col-span-3 col-start-6 row-start-5"}
                />
            </div>
        </div>
    </div>
}

export default function Home() {
    return <>
       {Hero()}
       
    </>
}