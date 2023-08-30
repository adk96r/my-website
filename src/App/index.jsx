
import "./style.css";
import React from "react";
import {Deck} from "./Deck"
import {isEqual} from "lodash"

export function App() {
  console.log(isEqual(1, 3));
  return (
    <div className="relative h-screen w-screen">
      <Deck />
    </div>
  );
}
