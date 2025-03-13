import { useContext } from "react";
import AboutPage from "./components/AboutPage";
import AnimationNumber from "./components/AnimatedNumber";
import BlogPage from "./components/BlogPage";
import ContactUs from "./components/ContactUs";
import HurghadaPage from "./components/HurghadaPage";
import ImportPage from "./components/ImportantPage";
import ShoppingPage from "./components/Shopping";
import Slider from "./components/SliderPage";
import WhyusPage from "./components/WhyusPage";
import { homeContext } from "pages/HomeContext";
import SliderLogo from "./components/SliderLogo";
import { useTranslation } from "react-i18next";
import SliderHomeShopping from "./components/SliderHomeShopping";
import { Stack } from "@mui/material";

function MainPages() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const { homeData } = useContext(homeContext);

  return (
    <Stack sx={{ overflow: "hidden" }}>
      <Slider />
      {language !== "ar" && (
        <>
          <HurghadaPage />
          <ShoppingPage />
        </>
      )}
      <AboutPage />
      {language === "ar" && <SliderHomeShopping />}
      <AnimationNumber />
      <WhyusPage />
      <ImportPage />
      <BlogPage />
      <SliderLogo />
      <ContactUs />
    </Stack>
  );
}

export default MainPages;
