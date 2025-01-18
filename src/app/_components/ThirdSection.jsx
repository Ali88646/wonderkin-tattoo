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
  const galrie_1Ref = useRef(null);
  const galrie_2Ref = useRef(null);
  const galrie_3Ref = useRef(null);
  const ansehenRef = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: imageSectionRef.current,
        start: "top top",
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
          top: -480,
        },
        "a"
      )
      .to(
        imageTwoRef.current,
        {
          scale: 2,
          right: -960,
        },
        "a"
      )
      .to(
        imageFourRef.current,
        {
          scale: 2,
          left: -960,
        },
        "a"
      )
      .to(
        imageFiveRef.current,
        {
          scale: 2,
          bottom: -480,
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
      )
      .to(
        galrie_1Ref.current,
        {
          opacity: 1,
          scaleX: 0.75,
          right: 300,
        },
        "c"
      )
      .to(
        galrie_2Ref.current,
        {
          opacity: 1,
          scaleX: 0.75,
          right: 200,
        },
        "c"
      )
      .to(
        galrie_3Ref.current,
        {
          opacity: 1,
          scaleX: 0.75,
          right: 150,
        },
        "c"
      )
      .from(ansehenRef.current, {
        opacity: 0,
        x: 10,
        y: -10,
        scaleX: 0.75,
        delay: 0.3,
      });
  });

  return (
    <>
      <div
        ref={imageSectionRef}
        className="w-screen h-[100vh] flex flex-col items-center justify-end bg-[#1d1d1d] mt-[20vh]"
      >
        <div
          ref={imageContainerRef}
          className="image-container w-full h-screen overflow-hidden relative flex items-center justify-center"
        >
          <div
            ref={imageOneRef}
            className="w-[66.5%] h-[33%] top-0 left-0 absolute bg-sec3Image1 bg-cover"
          ></div>
          <div
            ref={imageTwoRef}
            className=" w-[33%] h-[49.5%] absolute top-[17.5%] -right-5 bg-sec3Image2 bg-cover"
          ></div>
          <div
            ref={imagethreeRef}
            className=" w-[33%] h-[33%] bg-sec3Image3 bg-cover mt-5 relative"
          >
            <div
              ref={image3ContentRef}
              className=" bg-opacity-65 w-1/2 h-full absolute top-0 right-0 galrie-1"
            >
              <h2
                ref={galrie_1Ref}
                className="text-gray-900 absolute font-freightProBold text-[13vw] top-[15%] right-[20%] scale-y-125 scale-x-50 opacity-0"
              >
                GA
              </h2>
              <h2
                ref={galrie_2Ref}
                className="text-gray-900 absolute font-freightProBold text-[13vw] top-[35%] right-0 scale-y-125 scale-x-50 opacity-0 mt-4"
              >
                LER
              </h2>
              <h2
                ref={galrie_3Ref}
                className="text-gray-900 absolute font-freightProBold text-[13vw] top-[55%] right-0 scale-y-125 scale-x-50 opacity-0 mt-8"
              >
                IE
              </h2>
              <div
                className="absolute flex flex-col items-center justify-center bottom-1/4 left-1/3"
                ref={ansehenRef}
              >
                <h2 className=" font-freightProMedium text-black/90 text-4xl">
                  ANSEHEN
                </h2>
                <div className="w-full h-[2px] bg-black"></div>
              </div>
            </div>
          </div>
          <div
            ref={imageFourRef}
            className=" w-[33%] h-[49.5%] absolute top-[36.4%] -left-5 bg-sec3Image4 bg-cover"
          ></div>
          <div
            ref={imageFiveRef}
            className="w-[66%] h-[33%] absolute -bottom-10 right-0 bg-sec3Image5 bg-cover pr-7"
          ></div>
        </div>
      </div>
      <div className="w-screen h-screen  bg-[#1d1d1d]">end</div>
    </>
  );
};

export default ThirdSection;
