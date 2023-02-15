import React, { useEffect, useState } from "react";
import memoji from "./memoji.jpeg"

export const Home = (): JSX.Element => {
    const [animate, readyToAnimate] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => readyToAnimate(true), 1000);
        return () => {clearTimeout(timeout)}
    }, []);


    return (<div className={`w-full h-full rounded-[32px] p-4 flex flex-col items-center justify-center border-[16px] bg-yellow-300  border-yellow-400 `}>
            <img alt="My memoji" className={`transition-all animate-appear anime-forward mb-16 animation-delay-1000 opacity-0 duration-[800ms] ease-out pointer-events-none w-56 rounded-[128px] border-yellow-400 ${animate ? "opacity-1 border-[16px]" : "opacity-0 border-[0px]"}`} src={memoji}/>
            <Chats className="absolute inset-0 m-auto h-fit w-fit" />
            <div className="absolute animate-appear transition-all anime-forward opacity-0 animation-delay-ntmy w-fit h-fit bottom-8 text-white text-xs m-auto left-0 right-0">
                <div className="transition-all animation-delay-ntmy animate-side-to-side text-xl origin-center">
                👆
                {/* Swipe to know more ✨ */}
                </div>
            </div>
    </div>)
}

const Chats = (props: {className:string}) => {
    const chats = [
        "Bonjour 👋", "I am Aditya 🌿", "It's nice to meet you! 🤝"
    ]

    return (
        <div className={props.className}>
            <div className="relative w-60 h-24 mt-8">
                <ChatBubble message={chats[0]} delay={"animation-delay-200"} rotationClass={"rotate-[-4deg]"} className={" top-12 right-32 animation-delay-bonjour"} />
                <ChatBubble message={chats[1]} delay={"animation-delay-320"} rotationClass={"rotate-[4deg]"} className={" top-20 right-4 animation-delay-iama"} /> 
                <ChatBubble message={chats[2]} delay={"animation-delay-430"} rotationClass={"rotate-[0deg]"} className={"top-32 right-0 left-0 m-auto w-fit text-left animation-delay-ntmy"} />
            </div>
        </div>
    )
}


const ChatBubble = (props: {className?: string, message: string, rotationClass: string, delay: string }) => {
    return (
        <div className={`animate-appear anime-forward opacity-[0] transition-all absolute ${props.className}`}>
            <div className={`animate-wiggle ${props.delay}`}>
                <div className={`${props.rotationClass} h-fit w-fit my-[1px] max-w-[200px] px-[12px] py-[6px] rounded-[16px] bg-white text-black font-medium text-center text-sm shadow-under`}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}