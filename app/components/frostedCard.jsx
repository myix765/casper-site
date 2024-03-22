import styles from "../styles/Home.module.css"

export default function FrostedCard({ prompt, classes }) {
    return <div className={`${classes}`}>
        <div className={`${styles.frosted} w-full py-5 px-6 h-fit backdrop-blur-[6px]`}>
            <p className="font-medium">{prompt}</p>
        </div>
    </div>
}