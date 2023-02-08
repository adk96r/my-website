import { useState } from "react";
import { useSprings, animated, interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import "./App.css";
import { to, from, trans } from "./transformationFunctions";
import { CARDS } from "./Cards";

function Deck({ cards }) {
  const [topCardIndex, setTCI] = useState(cards.length - 1);
  const [props, api] = useSprings(cards.length, (i) => ({
    from: from(i),
    ...to(i),
  }));

  console.log(">>>props", props);
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
        // console.log(active, mx, xDir, vx);
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });

      if (gone.size === cards.length) {
        setTimeout(() => {
          gone.clear();
          setTCI(cards.length - 1);
          api.start((i) => to(i));
        }, 600);
      }
    }
  );
  return (
    <>
      Top:{topCardIndex}
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
            {cards[i]}
            {/* {<cards[i] active={i === topCardIndex}/>}  */}
            {/* {<cards.get(i) active={i === topCardIndex}/>} */}
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}

function App() {
  return (
    <div className="relative h-screen w-screen">
      <Deck cards={CARDS} />
    </div>
  );
}

export default App;
