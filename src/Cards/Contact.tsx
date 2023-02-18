import React from "react";
import CardProps from ".";
import { Hightlight } from "./Work";

export const Contact = (props: CardProps): JSX.Element => {
    const {active} = props;
    
    return (<div className="relative w-full h-full rounded-[32px] border-[16px] border-red-600 overflow-clip text-md">
        
        
        <div className={`mx-4 mt-4 text-[3rem] font-bold text-red-500 leading-tight transition-all duration-500 delay-[200ms] font-sans ${active?"opacity-1 translate-y-0":"opacity-0 translate-y-4"}`}>
            <div className={`${active ? "" : ""}`}>
                Let's Connect!
            </div>
        </div>
        
        <div className={`mx-5 mt-4 transition-all delay-500 duration-[800ms] ${active?"opacity-1 translate-y-0":"opacity-0 translate-y-4"}`}>
            Please&nbsp;
            <Hightlight text={"feel free to reach out"} colors="highlight-red highlight-active text-red-600" delay={"reach-out-highlight"} active={active} />&nbsp;to me if you have any exciting job opportunities available, I'm eager to bring my skills and experience to your team.
        </div>
        <div className={`absolute transition-all delay-[1200ms] duration-[800ms] m-auto right-4 bottom-4 w-fit h-fit flex space-x-2 text-white ${active?"opacity-1 translate-y-0":"opacity-0 translate-y-4 delay-[500ms]"}`}>
            <div className="px-4 py-3 contact-button text-sm font-bold text-center underline rounded-[12px] transition-all hover:scale-[1.1] ">
                <a rel="noreferrer" href="https://www.linkedin.com/in/adk96r/" className="link-pointer" target="_blank">
                    LinkedIn
                </a>
            </div>
            <div className="px-4 py-3 contact-button text-sm font-bold text-center underline rounded-[12px] transition-all hover:scale-[1.1]">
            <a href="mailto:adk96r@gmail.com" className="link-pointer">Mail</a>
            </div>
        </div>
    </div>)
}
