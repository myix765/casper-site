'use client'

import styles from "../styles/Newsletter.module.css"
import Image from "next/image"
import SpeechBubble from "./speechBubble"
import { useEffect, useState } from "react"

const CloseButton = () => {
    return <div className="bg-[--off-white] text-slate-900 rounded-full w-8 h-8 aspect-square grid place-items-center">
        <p>x</p>
    </div>
}

export default function Newsletter() {
    const [isNewsletter, showNewsletter] = useState(false)
    const newsletterDelay = 5000 // 5 seconds

    function showPopup() {
        showNewsletter(true)
        console.log("showing")
    }
    function hidePopup() {
        showNewsletter(false)
        console.log("hiding")
    }

    useEffect(() => {
        if (localStorage.getItem("newsletterToken") == null) {
            localStorage.setItem("newsletterToken", true)
            setTimeout(showPopup, newsletterDelay)
        }
    }, [])

    return (
        <>
            {isNewsletter && (
                <div className="fixed top-0 z-50 grid w-full h-[100svh] place-items-center bg-black bg-opacity-40">
                    <div className="relative w-1/2 aspect-[4/3]">
                        <div className="flex w-full h-full text-[--dark-blue] font-medium rounded-3xl overflow-hidden">
                            <div className="w-[45%] bg-[--off-white] flex flex-col items-center justify-center">
                                <div className="w-4/5 mb-10">
                                    <h2 className="text-5xl mb-5">Sign up for our newsletter!</h2>
                                    <h3 className="text-2xl">Be the first to hear about updates and new features.</h3>
                                </div>
                                <input type="email" id="email" name="email" placeholder="Enter Email Here" className="text-slate-900 w-4/5 px-3 py-3 border-solid border-[--dark-blue] border-2 rounded-lg outline-none mb-4"/>
                                <button className="w-4/5 px-3 py-3 rounded-lg bg-[--dark-blue] text-[--off-white]">Submit</button>
                            </div>
                            <div className="bg-[rgb(var(--background-blue))] w-[55%] flex flex-col items-center justify-center gap-8">
                                <SpeechBubble
                                    text={"We really appreciate the support!"}
                                    width={"w-4/5"}
                                    textStyle={"text-3xl"}
                                />
                                <Image
                                    src="/images/happy-casper.svg"
                                    width="0"
                                    height="0"
                                    alt="Thankful CASPER"
                                    className="w-3/4 h-auto"
                                    priority
                                />
                            </div>
                        </div>
                        <span
                            className="absolute top-0 right-0 translate-x-[45%] -translate-y-[45%]"
                            onClick={hidePopup}
                        >
                            <button>
                                <CloseButton/>
                            </button>
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}