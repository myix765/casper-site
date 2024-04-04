import Link from "next/link"
import styles from "../styles/NavBar.module.css"
import FrostedCard from "./frostedCard"

const NavLinks = ({ links }) => {
    return <div className="w-fit flex gap-14 py-3 px-4">
        {Object.entries(links).map(([link, href], id) => (
            <Link
                key={id}
                href={href}
                className={`py-1 px-2 ${styles.underline}`}
            >{link}</Link>
        ))}
    </div>
}

export default function NavBar() {
    const navLinks = {
        "Home": "/",
        "Contact": "/contact",
        "Download": "/#about"
    }

    return <div>
        <FrostedCard
            prompt={<NavLinks links={navLinks}/>}
            classes={`w-fit`}
        />
    </div>
}