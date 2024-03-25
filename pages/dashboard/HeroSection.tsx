import { CustomContainer } from "components/CustomContainer";
import CustomText from "components/CustomText";

export const HeroSection = () => {
  return (
    <div className="hero min-h-hero text-center relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-70 bg-black" />
      <CustomContainer className="relative px-6 z-10 py-12 lg:py-32 xl:py-40 text-8xl">
        <div className="max-w-3xl mx-auto">
          <CustomText
            className="text-white text-5xl xl:text-7xl xl:leading-tight mb-4 text-center"
            variant="h2"
          >
            Camping Made Easy!
          </CustomText>
          <CustomText
            className="text-white text-base md:text-xl xl:text-2xl"
            variant="h5"
          >
            aicampsite is designed to help you enjoy nature! Our mission is make
            camping as easy as possible, taking the hassle out of finding a
            reservable spot, planning an unforgettable route, and finding the
            best gear at affordable prices. aicampsite seeks to provides an
            unforgettable experience with beautiful scenery, delicious food, and
            plenty of activities to keep you busy.
          </CustomText>
        </div>
      </CustomContainer>
    </div>
  );
};
