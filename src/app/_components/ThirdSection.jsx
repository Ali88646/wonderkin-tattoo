"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
  const imageSectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);
  const imagethreeRef = useRef(null);
  const image3ContentRef = useRef(null);
  const imageFourRef = useRef(null);
  const imageFiveRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: imageSectionRef.current,
        start: "19% top",
        end: "bottom top",
        scrub: true,
        pin: imageSectionRef.current,
        markers: true,
      },
    });

    timeline
      .to(
        imageOneRef.current,
        {
          scale: 2,
          top: -380,
        },
        "a"
      )
      .to(
        imageTwoRef.current,
        {
          scale: 2,
          right: -780,
        },
        "a"
      )
      .to(
        imageFourRef.current,
        {
          scale: 2,
          left: -800,
        },
        "a"
      )
      .to(
        imageFiveRef.current,
        {
          scale: 2,
          bottom: -380,
        },
        "a"
      )
      .to(imagethreeRef.current, { width: "66%", height: "66%" }, "a")
      .to(
        imagethreeRef.current,
        {
          width: "100%",
          height: "120%",
        },
        "b"
      );
  });

  return (
    <>
      <div
        ref={imageSectionRef}
        className="w-screen h-[120vh] flex flex-col items-center justify-end bg-[#1d1d1d]"
      >
        <div
          ref={imageContainerRef}
          className="image-container w-full h-screen overflow-hidden relative flex items-center justify-center"
        >
          <div
            ref={imageOneRef}
            className="w-[66.5%] h-[33%] top-0 left-0 absolute bg-sec3Image1 bg-cover"
          >
            1
          </div>
          <div
            ref={imageTwoRef}
            className=" w-[33%] h-[49.5%] absolute top-[17.5%] -right-5 bg-sec3Image2 bg-cover"
          >
            2
          </div>
          <div
            ref={imagethreeRef}
            className=" w-[33%] h-[33%] grid grid-cols-2 p-24 bg-sec3Image3 bg-cover mt-5"
          >
            <div>empty</div>
            <div ref={image3ContentRef} className="bg-green-200 opacity-0">
              content
            </div>
          </div>
          <div
            ref={imageFourRef}
            className=" w-[33%] h-[49.5%] absolute top-[36.4%] -left-5 bg-sec3Image4 bg-cover"
          >
            4
          </div>
          <div
            ref={imageFiveRef}
            className="w-[66%] h-[33%] absolute -bottom-10 right-0 bg-sec3Image5 bg-cover pr-7"
          >
            5
          </div>
        </div>
      </div>
      <div className="w-screen h-screen  bg-[#1d1d1d]">end</div>
    </>
  );
};

export default ThirdSection;
