import { FormControl } from "@mui/base";
import { FormLabel, Grid, TextField, ThemeProvider } from "@mui/material";
import { CustomContainer } from "components/CustomContainer";
import CustomText from "components/CustomText";
import { darkTheme } from "theme/darkTheme";

export const ContactUsSection = () => {
  return (
    <div className="bg-[#222]">
      <CustomContainer className="py-12 lg:py-14 xl:py-16">
        <CustomText
          className="font-medium mb-4 text-3xl lg:text-5xl"
          variant="h2"
        >
          Contact AICampsite
        </CustomText>
        <CustomText className="text-base md:text-xl">
          Let us know how we can help. Fill out this form and we'll get back to
          you shortly.
        </CustomText>
        <div className="pt-10">
          <ThemeProvider theme={darkTheme}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <FormControl>
                  <FormLabel className="text-white text-lg">Name</FormLabel>
                  <TextField
                    className="bg-[#ffffff12] rounded"
                    name="name"
                    fullWidth
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControl>
                  <FormLabel className="text-white text-lg">E-mail</FormLabel>
                  <TextField
                    className="bg-[#ffffff12] rounded"
                    name="name"
                    type="email"
                    fullWidth
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel className="text-white text-lg">Message</FormLabel>
                  <TextField
                    className="bg-[#ffffff12] rounded"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </FormControl>
              </Grid>
            </Grid>
          </ThemeProvider>
        </div>
      </CustomContainer>
    </div>
  );
};
