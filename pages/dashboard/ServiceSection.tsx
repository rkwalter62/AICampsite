import { Button, Grid } from "@mui/material";
import { CustomContainer } from "components/CustomContainer";
import CustomImage from "components/CustomImage";
import CustomText from "components/CustomText";
import aiTrip from "assets/tripplanner.jpg";
import product from "assets/productcatalogue.jpg";
import campGround from "assets/campgroundfinder.png";
import React from "react";

const services = [
  {
    title: "AI Trip Planner",
    description:
      "We use AI to help discover incredible and adventurous routes in and around beautiful attractions including National Parks, National Forests, and BLM areas. We provide a beautifully crafted itinerary with stopping points and end of the day camping destinations.",
    image: aiTrip,
    href: "/trip-planner",
  },
  {
    title: "Product Catalogue",
    description:
      "Offering campers access to the highest rated camping equipment, such as tents, sleeping bags, and cookware.",
    image: product,
    href: "/product-catalogue",
  },
  {
    title: "Campground Locator",
    description: `We can find and help you reserve "hard to find" campsites in all areas including National Parks, National Forests, State Parks, and more.`,
    image: campGround,
    href: "/campground-locator",
  },
];

export const ServiceSection = () => {
  return (
    <div className="bg-darkGray">
      <CustomContainer className="py-12 lg:py-14 xl:py-20">
        <CustomText
          className="font-medium mb-4 lg:mb-10 text-3xl lg:text-5xl"
          variant="h2"
        >
          Services Provided
        </CustomText>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="w-full h-full flex flex-col">
                <CustomImage
                  className="flex-shrink-0 relative mb-6 w-full mx-auto aspect-w-3 aspect-h-2 h-64 object-cover"
                  src={service.image}
                  alt="Ai Trip Planner"
                />
                <div className="text-left">
                  <CustomText
                    className="text-xl lg:text-2xl xl:text-3xl mb-2 font-bold"
                    component="p"
                  >
                    {service.title}
                  </CustomText>
                  <CustomText className="">{service.description}</CustomText>
                  <Button
                    href={service.href}
                    className="mt-4"
                    variant="contained"
                    size="large"
                  >
                    More Info
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CustomContainer>
    </div>
  );
};
