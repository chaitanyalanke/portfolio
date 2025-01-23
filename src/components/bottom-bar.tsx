"use client";

import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const buttonCSS = "text-white px-2 py-1 rounded-lg"

const BottomBar: React.FC = () => {
    let path : string | null = "home";
    const router = useRouter();
    // const path = localStorage.getItem('path');

    useEffect(() => {
        // Access localStorage inside useEffect to ensure it's running on the client
        path = localStorage.getItem('path');
    }, []);

    useEffect(
        () => {
            const exploreElement = document.querySelector("#explore")
            const contactElement = document.querySelector("#contact")
            const homeElement = document.querySelector("#home")

            if (!exploreElement || !contactElement || !homeElement) {
                throw new Error('Element cant be empty!');
            }

            exploreElement.classList.add("transition-all", "duration-300", "ease-in-out");
            contactElement.classList.add("transition-all", "duration-300", "ease-in-out");
            homeElement.classList.add("transition-all", "duration-300", "ease-in-out");

            if (path === "explore") {
                exploreElement.className = `${exploreElement?.className} bg-white`
                const explore_span_element = exploreElement.querySelector("span")
                if (explore_span_element) {
                    explore_span_element.className = "text-black"
                }
                contactElement.className = buttonCSS
                const contact_span_element = contactElement.querySelector("span")
                if (contact_span_element) {
                    contact_span_element.className = "text-white"
                }
                homeElement.className = buttonCSS
                const home_span_element = homeElement.querySelector("span")
                if (home_span_element) {
                    home_span_element.className = "text-white"
                }
            } else if (path === "contact") {
                contactElement.className = `${contactElement?.className} bg-white`
                const contact_span_element = contactElement.querySelector("span")
                if (contact_span_element) {
                    contact_span_element.className = "text-black"
                }
                exploreElement.className = buttonCSS
                const explore_span_element = exploreElement.querySelector("span")
                if (explore_span_element) {
                    explore_span_element.className = "text-white"
                }
                homeElement.className = buttonCSS
                const home_span_element = homeElement.querySelector("span")
                if (home_span_element) {
                    home_span_element.className = "text-white"
                }
            } else {
                homeElement.className = `${homeElement?.className} bg-white`
                const home_span_element = homeElement.querySelector("span")
                if (home_span_element) {
                    home_span_element.className = "text-black"
                }
                exploreElement.className = buttonCSS
                const explore_span_element = exploreElement.querySelector("span")
                if (explore_span_element) {
                    explore_span_element.className = "text-white"
                }
                contactElement.className = buttonCSS
                const contact_span_element = contactElement.querySelector("span")
                if (contact_span_element) {
                    contact_span_element.className = "text-white"
                }
            }
            console.log(`Path:${path}`)
        },
        [path]
    )

    return (
        <div className="fixed w-full bottom-10 animate-float">
            <div className="w-1/4 mx-auto flex justify-evenly py-1 bg-black rounded-3xl">
                <button id="explore" className={buttonCSS} onClick={() => router.push('/explore')}>
                    <span>🔍 Explore</span>
                </button>
                <button id="home" className={buttonCSS} onClick={() => router.push('/')}>
                    <span>🏠 Home</span>
                </button>
                <button id="contact" className={buttonCSS} onClick={() => router.push('/contact')}>
                    <span>✉️ Contact</span>
                </button>
            </div>
        </div>
    )
}

export default BottomBar;