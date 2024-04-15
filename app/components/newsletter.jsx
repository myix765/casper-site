'use client'

import Image from "next/image"
import SpeechBubble from "./speechBubble"
import { useEffect, useState } from "react"
import styles from '../styles/Newsletter.module.css'

const CloseButton = () => {
    return <div className="bg-[--off-white] hover:bg-gray-300 text-slate-900 rounded-full w-10 sm:w-8 aspect-square grid place-items-center shadow-md">
        <p>x</p>
    </div>
}

export default function Newsletter() {
    const [isNewsletter, showNewsletter] = useState(true)
    const newsletterDelay = 5000 // 5 seconds

    function showPopup() {
        showNewsletter(true)
    }
    function hidePopup() {
        showNewsletter(false)
    }

    // check if user has already seen the newsletter popup before, if not show popup
    useEffect(() => {
        if (localStorage.getItem("newsletterToken") == null) {
            // localStorage.setItem("newsletterToken", true) // add seen token to user's cache
            setTimeout(showPopup, newsletterDelay)
        }
    }, [])

    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("http://localhost:4000/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email
                })
            })

            // throw error if unable to fetch from api
            if (!res.ok) {
                throw new Error(res.status.toString())
            }
        } catch (error) {
            console.log("failed to add")
        }
    }

    return (
        <>
            {isNewsletter && (
                /* div containing popup, close button, and opacity background */
                // opacity background behaves weirdly on mobile when scrolling
                <div className="fixed top-0 z-[100] grid w-full h-[100dvh] place-items-center bg-black bg-opacity-40">
                    {/* div containing popup and close button */}
                    <div className="relative h-[95svh] w-[90%] sm:w-1/2 sm:h-auto sm:aspect-[4/3]">
                        {/* div containing popup */}
                        <div className="flex flex-col sm:flex-row w-full h-full text-[--dark-blue] font-medium rounded-3xl overflow-hidden">
                            {/* popup left/top half */}
                            <div className="w-full h-[45%] sm:w-[45%] sm:h-full bg-[--off-white] flex flex-col items-center justify-center">
                                <div className="w-4/5 mb-[6%] sm:mb-[14%]">
                                    <h3 className="mb-[2%] sm:mb-[5%]">Sign up for our newsletter!</h3>
                                    <h6>Be the first to hear about updates and new features.</h6>
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    className="w-4/5"
                                >
                                    <input
                                        type="email"
                                        id="email" name="email"
                                        placeholder="Enter Email Here"
                                        className="text-slate-900 w-full px-3 py-3 border-solid border-[--dark-blue] border-2 rounded-lg outline-none mb-4"
                                        required
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                    />
                                    <button type="submit" className="w-full px-3 py-3 rounded-lg bg-[--dark-blue] text-[--off-white]">Submit</button>
                                </form>
                            </div>
                            {/* popup right/bottom half */}
                            <div className="bg-[--background-blue] w-full h-[55%] sm:w-[55%] sm:h-full relative overflow-hidden">
                                {/* background orange and pink */}
                                <div>
                                    <div className="absolute bg-[--orange] w-5/6 h-3/4 rounded-full sm:blur-[96px] top-0 right-0 translate-x-1/4 -translate-y-1/4"></div>
                                    <div className={`absolute bg-[--pink] w-[100%] h-3/5 rounded-full sm:blur-[96px] top-[20%] right-[18%]`}></div>
                                    <div className="absolute bg-[--orange] opacity-50 w-5/6 h-2/5 rounded-full sm:blur-[96px] bottom-0 right-[-20%]"></div>
                                </div>
                                <div className="h-full flex flex-col items-center justify-center gap-[5%] relative z-[90]">
                                    <SpeechBubble
                                        text={"We really appreciate the support!"}
                                        width={"w-4/5"}
                                        textStyle={"text-xl sm:text-2xl"}
                                    />
                                    <Image
                                        src="/images/happy-casper.svg"
                                        width="0"
                                        height="0"
                                        alt="Thankful CASPER"
                                        className="w-1/2 sm:w-3/4"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        {/* popup close button */}
                        <button
                            className="absolute top-0 right-0 translate-x-[30%] -translate-y-[30%] z-[100]"
                            onClick={hidePopup}
                        >
                            <CloseButton/>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}