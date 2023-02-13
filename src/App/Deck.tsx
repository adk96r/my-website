import { useEffect, useState } from "react";
import { Contact } from "../Cards/Contact";
import { Home } from "../Cards/Home";
import { Work } from "../Cards/Work";
import { useSprings, animated, interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import React from "react";

export const to = (i: number) => {
    return {
      x: 0,
      y: -56 + 24 * (NUM_CARDS - i - 1),
      scale: 0.9 + (0.1 / NUM_CARDS) * (i + 1),
      rot: (i === NUM_CARDS - 1) ? 0 : (0.5 - Math.random()) * 6,
      delay: i * 100,
      rotateX: 10,
    };
  };
  export const from = (i: number) => {
    return { x: 0, rot: 0, scale: 1.5, y: -4000 , rotateX: 45 };
  };
  
  export const trans = (r: number , s: number) =>
    `perspective(1500px) rotateX(${r / 10}deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;

    
const CARDS = [
  Contact,
  Work,
  Home
]

const NUM_CARDS = CARDS.length



export function Deck() {
    // const [active, setA] = useState(false);
    const [topCardIndex, setTCI] = useState(NUM_CARDS - 1);
    const [props, api] = useSprings(CARDS.length, (i) => ({
      from: from(i),
      ...to(i),
    }));
  
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setA(false);
    //     setTimeout(() => {
    //       setA(true);
    //     }, 1000);
    //   }, 7000)
    //   return () => {clearInterval(interval);}
    // }, []);


    const [gone] = useState(new Set());
  
    const bind = useDrag(
      ({
        args: [index],
        active,
        movement: [mx],
        direction: [xDir],
        velocity: [vx],
      }) => {
        const trigger = vx > 1;
        if (!active && trigger) {
          gone.add(index);
          setTCI((topCardIndex) => topCardIndex - 1);
        }
  
        api.start((i) => {
          if (index !== i) return;
          const isGone = gone.has(i);
  
          const x = isGone ? 2 * window.innerWidth * xDir : active ? mx : 0;
          const rot = mx / 50 + (isGone ? xDir * 10 * vx : 0);
          const scale = active ? 1.05 : 1;
          return {
            x,
            rot,
            scale,
            delay: undefined,
            config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
          };
        });
  
        if (gone.size === CARDS.length) {
          setTimeout(() => {
            gone.clear();
            setTCI(CARDS.length - 1);
            api.start((i) => to(i));
          }, 600);
        }
      }
    );
    return (
      <>
        <div className="transition-all animate-appear opacity-0 anime-forward absolute w-full h-full flex justify-center items-center">👋</div>
        {props.map(({ x, rot, scale, y }, i) => (
          <animated.div
            key={i}
            className={"card inset-0 absolute m-auto w-fit h-fit"}
            style={{ x, y }}
          >
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
              }}
            >
              {/* {i === NUM_CARDS - 1 ? <Contact index={i} active={true}/> : CARDS[i]({index: i, active: topCardIndex === i})} */}
              {CARDS[i]({index: i, active: topCardIndex === i})}
            </animated.div>
          </animated.div>
        ))}
      </>
    );
  }
  