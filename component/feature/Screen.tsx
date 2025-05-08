"use client";

import Image from "next/image";
import TailProperties, { cn } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";
import { CSSProperties, useEffect, useRef } from "react";

// type definition
interface ScreenProps extends DefaultProps<ScreenPresenterDataType> {
  width: number;
  height: number;
}
type ScreenPresenterDataType = {
  src: string;
  offset: number;
};

// main component
export default function Screen({
  data,
  className,
  width,
  height,
}: ScreenProps) {
  if (!data) return null;
  const screenProperties: CSSProperties = {
    width: width,
    height: height,
  };
  return (
    <div
      className={`${cn(screenContainerStyle)} ${className}`}
      style={screenProperties}
    >
      <ScreenPresenter
        width={width * data.offset}
        height={height * data.offset}
        data={data}
      />
    </div>
  );
}
const screenContainerStyle: TailProperties = {
  layout: "grid content-center justify-center overflow-hidden",
  etc: "outline outline-1 outline-white",
};

// present component
function ScreenPresenter({ data, width, height }: ScreenProps) {
  const setterRef = useRef<HTMLElement | any>(null);
  useEffect(() => {
    let lastCall = 0;
    const throttleDelay = 1000;
    window.addEventListener("pointermove", (event) => {
      const now = Date.now();
      if (setterRef.current && now - lastCall >= throttleDelay) {
        lastCall = now;
        const setter: HTMLElement = setterRef.current;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const offsetX = mouseX - centerX;
        const offsetY = mouseY - centerY;

        setter.style.transform = `translate(${offsetX * 0.1}px, ${
          offsetY * 0.1
        }px)`;
      }
      return;
    });
  }, []);
  if (!data) return null;
  const ScreenPresenterProperties: CSSProperties = {
    width: width,
    height: height,
  };
  return (
    <div
      ref={setterRef}
      style={ScreenPresenterProperties}
      className="relative transition-all ease-in-out duration-1000"
    >
      <Image src={data.src} alt={`${data.src} is not valid!`} fill={true} />
    </div>
  );
}
