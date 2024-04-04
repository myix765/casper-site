'use client'

import Image from "next/image"
import SpeechBubble from "./speechBubble"
import { useEffect, useState } from "react"

const CloseButton = () => {
    return <div className="bg-[--off-white] hover:bg-gray-300 text-slate-900 rounded-full w-8 h-8 aspect-square grid place-items-center">
        <p>x</p>
    </div>
}

export default function Newsletter() {
    const [isNewsletter, showNewsletter] = useState(true)
    const newsletterDelay = 5000 // 5 seconds

    function showPopup() {
        showNewsletter(true)
        console.log("showing")
    }
    function hidePopup() {
        showNewsletter(false)
        console.log("hiding")
    }

    // check if user has already seen the newsletter popup before, if not show popup
    useEffect(() => {
        if (localStorage.getItem("newsletterToken") == null) {
            localStorage.setItem("newsletterToken", true) // add seen token to user's cache
            setTimeout(showPopup, newsletterDelay)
        }
    }, [])

    return (
        <>
            {isNewsletter && (
                // div containing popup, close button, and opacity background
                <div className="fixed top-0 z-[100] grid w-full h-[100vh] place-items-center bg-black bg-opacity-40">
                    {/* div containing popup and close button */}
                    <div className="relative w-1/2 aspect-[4/3]">
                        {/* div containing popup */}
                        <div className="flex w-full h-full text-[--dark-blue] font-medium rounded-3xl overflow-hidden">
                            {/* popup left half */}
                            <div className="w-[45%] bg-[--off-white] flex flex-col items-center justify-center">
                                <div className="w-4/5 mb-10">
                                    <h3 className="mb-5">Sign up for our newsletter!</h3>
                                    <h5>Be the first to hear about updates and new features.</h5>
                                </div>
                                <input type="email" id="email" name="email" placeholder="Enter Email Here" className="text-slate-900 w-4/5 px-3 py-3 border-solid border-[--dark-blue] border-2 rounded-lg outline-none mb-4"/>
                                <button className="w-4/5 px-3 py-3 rounded-lg bg-[--dark-blue] text-[--off-white]">Submit</button>
                            </div>
                            {/* popup right half */}
                            <div className="bg-[--background-blue] w-[55%] relative overflow-hidden">
                                {/* background orange and pink */}
                                <div>
                                    <div className="absolute bg-[--orange] w-5/6 h-3/4 rounded-full blur-[96px] top-0 right-0 translate-x-1/4 -translate-y-1/4"></div>
                                    <div className="absolute bg-[--pink] w-[100%] h-3/5 rounded-full blur-[96px] top-[20%] right-[18%]"></div>
                                    <div className="absolute bg-[--orange] opacity-50 w-5/6 h-2/5 rounded-full blur-[96px] bottom-0 right-[-20%]"></div>
                                </div>
                                <div className="h-full flex flex-col items-center justify-center gap-8 relative z-[90]">
                                    <SpeechBubble
                                        text={"We really appreciate the support!"}
                                        width={"w-4/5"}
                                        textStyle={"text-2xl"}
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