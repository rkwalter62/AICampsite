import { CustomContainer } from "components/CustomContainer";
import CustomText from "components/CustomText";
import GoogleApiWrapper from "components/GoogleApiWrapper";

export const GoogleMapSection = () => {
  return (
    <div className="bg-darkGray">
      <CustomContainer className="pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14">
        <CustomText
          className="font-medium mb-4 text-3xl lg:text-5xl"
          variant="h2"
        >
          Location
        </CustomText>
        <CustomText className="text-base md:text-2xl pb-4">
          Salt Lake County, UT
        </CustomText>
        <GoogleApiWrapper lat={40.644188} lng={-111.952249} />
      </CustomContainer>
    </div>
  );
};
