import { NUM_CARDS } from "./Cards";

export const to = (i) => {
  return {
    x: 0,
    y: -50 + 10 * (NUM_CARDS - i - 1),
    scale: 0.9 + (0.1 / NUM_CARDS) * (i + 1),
    rot: (0.5 - Math.random()) * 6,
    delay: i * 100,
    rotateX: 10,
  };
};
export const from = (i) => {
  return { x: 0, rot: 0, scale: 1.5, y: -5000, rotateX: 45 };
};

export const trans = (r, s) =>
  `perspective(1500px) rotateX(${r / 10}deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;
