import { ReactNode } from "react";
import Left from "./Left";

interface SplitScreenProps {
  children: [ReactNode, ReactNode];
  leftWeight: number;
  rightWeight: number;
}

const SplitScreen = ({ 
  children, 
  leftWeight, 
  rightWeight 
}: SplitScreenProps) => {
  const [left, right] = children;
  console.log("-----------left", left);
  console.log("-----------right", right);

  const leftwidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;

  return (
    <section className="flex w-screen">
      <div style={{width: leftwidth}}>{left}</div>
      <div style={{width: rightWidth}}>{right}</div>
    </section>
  );
};

export default SplitScreen;
