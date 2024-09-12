"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//===>
const HeroSection = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const leafRef = useRef(null);
  const girlImgRef = useRef(null);
  const spanRef = useRef([]);
  const girlWindowRef = useRef(null);
  useGSAP(() => {
    spanRef.current.forEach((el, i) => {
      gsap.from(el, {
        scaleX: 0.35,
        x: 75,
        opacity: 0.5,
        duration: 0.85,
      });
    });

    const onLoadTimeline = gsap.timeline();

    onLoadTimeline
      .from(
        girlImgRef.current,
        {
          opacity: 0.15,
          bottom: -320,
          duration: 0.85,
        },
        "a"
      )
      .from(
        girlWindowRef.current,
        {
          opacity: 0,
          bottom: -120,
          duration: 0.85,
          delay: 0.21,
        },
        "a"
      )
      .from(
        leafRef.current,
        {
          opacity: 0,
          bottom: -250,
          duration: 1.25,
          delay: 0.315,
        },
        "a"
      );

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "53% 50%",
        scrub: true,
      },
    });

    scrollTimeLine
      .to(
        textRef.current,
        {
          y: -300,
        },
        "a"
      )
      .to(
        leafRef.current,
        {
          scale: 1.2,
        },
        "a"
      )
      .to(
        girlImgRef.current,
        {
          scale: 1.2,
          bottom: 0,
        },
        "a"
      )
      .to(
        containerRef.current,
        {
          y: "50%",
        },
        "a"
      );
  });
  return (
    <div
      ref={containerRef}
      className="min-h-screen min-w-screen  bg-[#282828] flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div
        ref={textRef}
        className="absolute top-[8rem]  z-20 scale-x-[90%] flex gap-0 "
      >
        {"WONDERKIN TATTOO".split("").map((text, i) => {
          return (
            <p
              ref={(el) => (spanRef.current[i] = el)}
              className="main-text text-[14vw] font-freightProMedium scale-x-[75%]"
              key={i}
            >
              {text}
            </p>
          );
        })}
      </div>
      <div
        ref={girlWindowRef}
        className="w-[490px] h-[524px] bg-[#83827E] rounded-t-full absolute bottom-0 z-10"
      />
      <Image
        ref={leafRef}
        width={"1253"}
        height={"470"}
        src={"/plant.png"}
        alt="plant"
        className="w-[1253px] absolute bottom-0"
      />
      <Image
        ref={girlImgRef}
        src={"/girl.png"}
        alt={"girl"}
        width={"490"}
        height={"524"}
        className="absolute -bottom-32 z-30"
      />
    </div>
  );
};

export default HeroSection;
