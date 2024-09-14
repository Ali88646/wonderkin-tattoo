"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//===>
const SecondSection = () => {
  const imageContainerRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const secondContainerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        // markers: true,
        scrub: true,
        start: "top top",
        end: "bottom 40%",
        pin: secondContainerRef.current,
      },
    });

    tl.to(
      firstImageRef.current,
      {
        top: "-40%",
        scale: 1.4,
      },
      "a"
    ).to(
      secondImageRef.current,
      {
        top: 0,
        scaleX: 1,
      },
      "a"
    );
  });

  return (
    <div
      ref={secondContainerRef}
      className="min-h-[120vh] relative z-50 bg-[#1D1D1D] grid grid-cols-2"
    >
      <div className="circle h-[100vh] w-[100vh] border border-gray-700 rounded-full absolute -left-[50vh] top-[20vh]"></div>
      <div className="second-section-left-col flex items-center justify-center ">
        <div className="second-section-heading-text w-full flex flex-col justify-center ">
          <h2 className="text-[7vw] self-end uppercase font-freightProMedium tracking-tighter scale-x-75">
            Leidenschaft
          </h2>
          <h2 className="text-[7vw] self-start uppercase font-freightProMedium tracking-tighter scale-x-75">
            und Präzision
          </h2>
          <div className="w-1/2 mt-10 self-end">
            <p className="text-sm font-normal text-[#8F8F8F]">
              Hey, ich bin Nicki und seit 2017 widme ich mich in meinem Studio
              in Düsseldorf dem Tätowieren. Meine Expertise liegt im Mandala-
              und Traditionalstil, wobei ich immer offen für neue kreative Ideen
              bin, damit wir zusammen dein perfektes Tattoo finden.
            </p>
          </div>
        </div>
      </div>
      <div className="second-section-right-col flex items-end justify-center overflow-hidden">
        <div
          ref={imageContainerRef}
          className="image-container relative w-[55%] h-screen overflow-hidden"
        >
          <Image
            ref={firstImageRef}
            src={"/sec-2-img-1.jpg"}
            width={"673"}
            height={"706"}
            alt="second-section-img-1"
            className="absolute top-0 left-0 w-full h-full"
          />
          <Image
            ref={secondImageRef}
            src={"/sec-2-img-2.jpg"}
            width={"673"}
            height={"706"}
            alt="second-section-img-1"
            className="absolute top-[100%] left-0 w-full h-full scale-x-125"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
