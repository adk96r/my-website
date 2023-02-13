import React from "react";
import CardProps from ".";


export const Work = (props: CardProps): JSX.Element => {
    const {active} = props;
    
    return (
    <div className="w-full h-full rounded-[32px] border-[16px] border-zinc-900 overflow-clip text-md">
        <div className="relative bg-white rounded-[16px] w-full h-full overflow-clip">
            
            {/* ID card */}
            <div className={`transition-all duration-1000 delay-[200ms] ease-in-out absolute w-32 h-[272px]`}
                style={{left: active ? "-1rem":"-4rem",bottom: active?"0rem":"2rem",rotate: active?"-28deg":"-20deg"}}>
                
                <div className="absolute w-[8px] h-56 bg-cyan-500 rounded-[1px] m-auto right-0 left-2 -top-8 shadow-2xl rotate-[11deg] translate-x-[14px] translate-y-[-24px]"/>

                
                <div className="relative w-32 h-36">
                    <div className="absolute w-16 h-[104px] bg-gray-800 rounded-md border-[4px] border-cyan-500 shadow-under m-auto right-0 left-0 top-[130px]" />
                    <div className="absolute w-[14px] h-[5px] bg-white rounded-md border-[1px] border-cyan-500 m-auto right-0 left-0 shadow-inner-custom top-[140px]"/>
                </div>
                
                
                <div className="absolute w-[8px] h-48  bg-cyan-500 rounded-[1px] m-auto right-0 left-0 top-2 shadow-2xl -rotate-12 translate-x-[-20px] -translate-y-[57px]"/>
                
            </div>
            <div className="absolute left-0 top-0 w-full h-full  bg-gradient-to-b from-white via-white/90 to-transparent ]"></div>

            <div className={`mx-4 mt-4 text-[3rem] font-bold text-zinc-800 leading-tight transition-all duration-500 delay-[200ms] font-sans ${active?"opacity-1 translate-y-0":"opacity-0 translate-y-4 delay-[500ms]"}`}>
                <div className={`${active ? "" : ""}`}>
                    About
                </div>
            </div>

            <div className={`m-4 transition-all duration-700 delay-[800ms] font-sans ${active?"opacity-1 translate-y-0":"opacity-0 translate-y-4 delay-[500ms]"}`}>
                I am a&nbsp;
                <Hightlight text={"front end developer"} colors="highlight-active text-cyan-900" delay={"fed"} active={active} />
                &nbsp;with 2+ years of experience building production scale web-apps, specifically&nbsp; 
                <Hightlight text={"in the React.js ecosystem"} colors="highlight-active text-cyan-900" delay={"rjs"} active={active} />. 
            </div>

            <div className={`m-4 transition-all duration-700 delay-[1200ms] mt-4 font-sans ${active?"opacity-1 translate-y-0":"opacity-0 translate-y-4 delay-[500ms]"}`}>
            You can find a detailed account of my expertise and work history in my resume below.
            </div>
            
            
            {/* Links */}
            <div className={`transition-all duration-700 delay-[2000ms] absolute right-4 bottom-8 flex justify-center text-sm font-bold text-center space-x-[12px] text-white ${active?"opacity-1 translate-y-0":"opacity-0 translate-y-4 delay-[500ms]"}`}>                    
                <div className="z-2 px-4 py-3 bg-black rounded-[12px] transition-all hover:scale-[1.1]">
                Resume 🔖
                </div>
            </div>
            
        </div>
    </div>);
}


export const Hightlight = (props: {active: boolean, delay: string, text: string,colors: string}) => {
    return (
        <div className={`inline transition-all duration-500 ${props.active ? props.delay: ""} inline highlight py-[1px] px-[2px] italic ${props.active ? props.colors : ""} font-serif w-fit`}>{props.text}</div>
    )
}