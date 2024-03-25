import { FormatQuoteOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { CustomContainer } from "components/CustomContainer";
import CustomText from "components/CustomText";
import React from "react";

export const TestimonialSection = () => {
  return (
    <div className="bg-[#222]">
      <CustomContainer className="pt-12 lg:pt-14 xl:pt-20 pb-12 lg:pb-14 xl:pb-20">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="testimonial bg-gray-400 rounded-md relative">
              <CustomText className="font-uItalic text-xl lg:text-2xl xl:tex-4xl font-bold py-4 px-5 italic">
                <FormatQuoteOutlined
                  className="text-white mr-4 -mt-4"
                  fontSize="large"
                />
                Aicampsite is the perfect way to find an incredible trip and
                camping destination for an unforgettable experience. Our trip
                had facilities that were top notch, and the scenery was
                pristine. My family and I really enjoyed the trip we found on
                aicampsite and we definitely recommend it!
              </CustomText>
              <div className="arrow-down mr-16 absolute right-0"></div>
            </div>
            <CustomText className="mr-4 mt-5 font-medium italic text-right text-lg">
              - Michelle M., Salt Lake County, UT
            </CustomText>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="testimonial bg-gray-400 rounded-md relative">
              <CustomText className="font-uItalic text-xl lg:text-2xl xl:tex-4xl font-bold py-4 px-5 italic">
                <FormatQuoteOutlined
                  className="text-white mr-4 -mt-4"
                  fontSize="large"
                />
                Aicampsite is the perfect way to find an incredible trip and
                camping destination for an unforgettable experience. Our trip
                had facilities that were top notch, and the scenery was
                pristine. My family and I really enjoyed the trip we found on
                aicampsite and we definitely recommend it!
              </CustomText>
              <div className="arrow-down mr-16 absolute right-0"></div>
            </div>
            <CustomText className="mr-4 mt-5 font-medium italic text-right text-lg">
              - Michelle M., Salt Lake County, UT
            </CustomText>
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
};
