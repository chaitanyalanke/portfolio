"use client";

import Image from "next/image";
import BottomBar from "@/components/bottom-bar";
import Card from "@/components/cards";
import { useEffect } from "react";

const Explore = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
    
    useEffect(() => {
        // Access localStorage inside useEffect to ensure it's running on the client
        localStorage.setItem("path", "explore");
    }, []);

    const eazydata_info = {
        "features": [
            "abcd",
            "abcd",
            "abcd",
        ],
        "tech": [
            "Python",
            "Django(MySQL)",
            "Redis",
            "AWS",
            "Kubernetes",
        ],
    }

    const pdfquery_info = {
        "features": [
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
        ],
        "tech": [
            "Python",
            "Django(MySQL)",
            "RAG",
            "Pinecone",
            "Langchain",
            "OpenAI",
        ],
    }

    const infopulse_info = {
        "features": [
            "abcd",
            "abcd",
            "abcd",
            "abcd",
            "abcd",
        ],
        "tech": [
            "Python",
            "Django(MySQL)",
            "Selenium",
            "MongoDB",
        ],
    }

    const languages = {
        "part1": [
            "python",
            "django",
            "html5",
            "css3",
            "javascript",
            "typescript",
            "reactjs",
            "nextjs",
        ],
        "part2": [
            "mysql",
            "mongodb",
            "postgresql",
            "redis",
            "pinecone",
            "tailwindcss",
            "fastapi",
            "golang",
        ]
    }

    const tools = {
        "part1": [
            "vscode",
            "git",
            "bitbucket",
            "docker",
            "filezilla",
            "nginx",
            "jenkins",
        ],
        "part2": [
            "amazonwebservices",
            "kubernetes",
            "prometheus",
            "grafana",
            "linux",
            "postman",
            "putty",
        ]
    }

    useEffect(
        () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(
                        entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add(entry.target.id === "languages" ? "animate-appear-right" : "animate-appear-left")
                            } else {
                                entry.target.classList.remove(entry.target.id === "languages" ? "animate-appear-right" : "animate-appear-left")
                            }
                        }
                    )
                }
            )

            const languages = document.querySelectorAll("#languages")
            languages.forEach(
                (item) => observer.observe(item)
            )
            const tools = document.querySelectorAll("#tools")
            tools.forEach(
                (item) => observer.observe(item)
            )
        }
    )

    return (
        <div className="h-screen w-screen">
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <video className="w-auto h-auto min-w-full min-h-full object-cover" autoPlay muted loop>
                    <source src={`${basePath}/videos/background.mp4`} type="video/mp4" />
                </video>
            </div>
            <div>
                <div className="text-silver flex flex-col items-center space-y-4 py-8">
                    <p className="text-4xl italic font-bold animate-fly-down">Welcome to my world of creativity, skills, and a little fun.</p>
                    <div className="flex space-x-2">
                        <p className="text-3xl italic font-bold animate-fly-left">Ready to explore my creative journey?</p>
                        <p className="text-3xl italic font-bold animate-fly-right">Let&apos;s dive deeper!</p>
                    </div>
                </div>
                <div className="bg-gray-100 bg-opacity-75 h-[150px] w-5/6 mx-auto rounded-lg">
                    <p className="text-2xl text-center font-bold pl-4 pt-4 pb-2">About me?</p>
                    <p className="text-xl italic px-8">
                        I&apos;m a Software Engineer with strong expertise in backend systems and solid hands-on expertise in frontend development.
                        Proficient in Python, Django, Docker. Competent problem-solver with a collaborative mindset, skilled at delivering innovative solutions.
                    </p>
                </div>
                <h1 className="text-2xl text-center font-bold translate-y-11">Projects</h1>
                <div className="bg-gray-100 bg-opacity-75 text-white mt-2 mb-12 h-[450px] w-5/6 mx-auto rounded-lg flex justify-evenly items-center">
                    <Card
                        title="Eazydata"
                        description="An automated ETL Pipeline Tool"
                        features={eazydata_info.features}
                        tech={eazydata_info.tech}
                        url="https://eazydata.ai"
                        animate="animate-fly-left"
                        // color="bg-ed_theme"
                    />
                    <Card
                        title="PDFquery"
                        description="A chatbot for PDFs"
                        features={pdfquery_info.features}
                        tech={pdfquery_info.tech}
                        url="https://pdfquery.ai"
                        animate="animate-fly-up"
                        // color="bg-pdfq_theme"
                    />
                    <Card
                        title="Infopulse"
                        description="A News Insight Platform"
                        features={infopulse_info.features}
                        tech={infopulse_info.tech}
                        url="https://infopulse.ai"
                        animate="animate-fly-right"
                        // color="bg-ip_theme"
                    />
                </div>
                <div id="languages" className="relative overflow-hidden bg-gray-100 bg-opacity-75 h-[250px] w-5/6 mx-auto mb-12 rounded-lg">
                    <p className="text-2xl text-center font-bold pl-4 pt-4 pb-2">Languages & Frameworks</p>
                    <div className="w-[200%] flex justify-evenly mb-16">
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                languages.part1.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/languages/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                languages.part1.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/languages/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                languages.part1.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/languages/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className="w-[200%] flex justify-evenly mb-16">
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                languages.part2.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/languages/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                languages.part2.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/languages/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                languages.part2.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/languages/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                <div id="tools" className="relative overflow-hidden bg-gray-100 bg-opacity-75 h-[250px] w-5/6 mx-auto mb-12 rounded-lg">
                    <p className="text-2xl text-center font-bold pl-4 pt-4 pb-2">Tools & Technologies</p>
                    <div className="w-[200%] flex justify-evenly mb-16">
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                tools.part1.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/tools/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                tools.part1.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/tools/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                tools.part1.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/tools/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                    <div className="w-[200%] flex justify-evenly mb-16">
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                tools.part2.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/tools/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                tools.part2.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/tools/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="w-1/3 flex justify-evenly space-x-4 animate-carousel">
                            {
                                tools.part2.map(
                                    (item, idx) => {
                                        return (
                                            <Image
                                                key={idx}
                                                src={`${basePath}/images/tools/${item}.svg`}
                                                alt="Failed to Load"
                                                height={50}
                                                width={50}
                                                // objectFit="cover"
                                            />
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                <BottomBar />
            </div>
        </div>
    )
}

export default Explore;