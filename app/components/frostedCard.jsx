import styles from "../styles/Frosted.module.css"

export default function FrostedCard({ prompt, classes, padding }) {
    return <div className={`${classes}`}>
        <div className={`${styles.frosted} ${padding} w-full h-fit backdrop-blur-[6px]`}>
            <div className="font-medium">{prompt}</div>
        </div>
    </div>
}