import HeroSection from "./_components/HeroSection";
import SecondSection from "./_components/SecondSection";
import SmoothScrollWrapper from "./_components/SmoothScrollWrapper";
import ThirdSection from "./_components/ThirdSection";

export default function Home() {
  return (
    <>
      <SmoothScrollWrapper>
        <HeroSection />
        <SecondSection />
        <ThirdSection />
      </SmoothScrollWrapper>
    </>
  );
}
