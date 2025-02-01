import { Box, Container, Stack, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import FeaturedCard, { FeaturedCardProps } from "./FeaturedCard";
import { useContext, useEffect, useState } from "react";
import { homeContext } from "pages/HomeContext";
import { imgPath } from "methods/img";
const InfoCardContainer = (props: FeaturedCardProps) => (
  <Box p={2} pt={0} pb={6}>
    <FeaturedCard {...props} />
  </Box>
);
function SliderLogo() {
  const theme = useTheme();
  const { homeData } = useContext(homeContext);
  const [cols, setCols] = useState(6);
  useEffect(() => {
    const listener: EventListener = () => {
      const width = window.innerWidth;
      if (width > theme.breakpoints.values.xl) {
        setCols(6);
      } else if (width > theme.breakpoints.values.md) {
        setCols(4);
      } else if (width > theme.breakpoints.values.sm) {
        setCols(1);
      } else {
        setCols(1);
      }
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cols]);
  return (
    <Stack sx={{ pt: "80px" }}>
      <Container maxWidth="lg">
        <Swiper
          slidesPerView={cols}
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          pagination={{
            clickable: true,
          }}
          key={cols}
        >
          {homeData?.brands.map((item) => (
            <>
              <SwiperSlide>
                <InfoCardContainer image={imgPath(item.image)} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </Container>
    </Stack>
  );
}

export default SliderLogo;
