import styles from "../styles/Bubble.module.css"

export default function SpeechBubble({ text, width, textStyle }) {
    return <div className="flex flex-col items-center w-full">
        <div className={`bg-[--off-white] ${width} rounded-lg`}>
            <p className={`text-[--dark-blue] text-center font-medium px-4 py-5 ${textStyle}`}>{text}</p>
        </div>
        <div className={styles.bubbleTail}></div>
    </div>
}