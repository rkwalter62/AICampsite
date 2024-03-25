import Layout from "components/layouts";
import { ContactUsSection } from "./ContactUsSection";
import { GoogleMapSection } from "./GoogleMapSection";
import { HeroSection } from "./HeroSection";
import { ServiceSection } from "./ServiceSection";
import { TestimonialSection } from "./TestimonialSection";

export const Dashboard = () => {
  return (
    <Layout maxWidth="xl">
      <HeroSection />
      <ServiceSection />
      <TestimonialSection />
      <GoogleMapSection />
      <ContactUsSection />
    </Layout>
  );
};
