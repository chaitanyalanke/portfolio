"use client";

import { useState, useEffect } from "react";
import BottomBar from "@/components/bottom-bar";


const Contact = () => {
    useEffect(() => {
        // Access localStorage inside useEffect to ensure it's running on the client
        localStorage.setItem("path", "contact");
    }, []);
    
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const inputCSS = "border rounded-md w-full px-2 py-2 focus:outline-violet-600"

    return (
        <div>
            <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
                <div className="flex h-[50%] w-[60%] bg-white rounded-3xl">
                    <div className="h-full w-[50%] flex flex-col space-y-1 justify-center items-center text-white bg-violet-600 rounded-3xl rounded-tr-[25%] rounded-br-[25%]">
                        <p className="text-xl font-bold">Hello Friend!</p>
                        <p className="font-normal">Do you want to connect?</p>
                    </div>
                    <div className="h-full w-[50%]">
                        <form
                            className="h-full w-full flex flex-col justify-center items-center space-y-2 rounded-3xl"
                        >
                            <p className="text-xl font-bold text-center ">Shoot me a message !</p>
                            <div className="flex space-x-2 w-[80%]">
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="name">Name<span className="text-red-500">*</span></label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={name}
                                        required
                                        onChange={(evt) => setName(evt.target.value)}
                                        className={inputCSS}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="email">Email<span className="text-red-500">*</span></label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        required
                                        onChange={(evt) => setEmail(evt.target.value)}
                                        className={inputCSS}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-[80%] space-y-1">
                                <label htmlFor="message">Message<span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="What do you think?"
                                    value={message}
                                    required
                                    onChange={(evt) => setMessage(evt.target.value)}
                                    className={inputCSS}
                                />
                            </div>
                            <p>Glad to hear form you!</p>
                            <button
                                type="submit"
                                className="border outline-white px-8 py-2 text-white rounded-lg bg-violet-700 hover:bg-violet-400"
                            >
                                Shoot
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

export default Contact;