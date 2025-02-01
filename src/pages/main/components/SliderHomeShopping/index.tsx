import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import FeaturedCard, { FeaturedCardProps } from "./FeaturedCard";
import { useContext, useEffect, useState } from "react";
import { homeContext } from "pages/HomeContext";
const InfoCardContainer = (props: FeaturedCardProps) => (
  <Box sx={{ p: { md: 5, sm: 2 } }}>
    <FeaturedCard {...props} />
  </Box>
);
function SliderHomeShopping() {
  const theme = useTheme();
  const { homeData } = useContext(homeContext);
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const listener: EventListener = () => {
      const width = window.innerWidth;
      if (width > theme.breakpoints.values.xl) {
        setCols(3);
      } else if (width > theme.breakpoints.values.md) {
        setCols(4);
      } else if (width > theme.breakpoints.values.sm) {
        setCols(3);
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
    <Stack>
      <Typography
        variant="h4"
        sx={{
          py: 4,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        الفنادق
      </Typography>
      <Container maxWidth="lg" sx={{ pb: 1 }}>
        <Swiper
          slidesPerView={cols}
          spaceBetween={0}
          modules={[EffectFade, Autoplay, Navigation, Pagination, Scrollbar]}
          allowSlideNext={true}
          allowSlidePrev={true}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          // pagination={{
          //   clickable: true,
          // }}
          key={cols}
        >
          {homeData?.category_hotels.map((item) => (
            <>
              <SwiperSlide>
                <InfoCardContainer hotels={item} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </Container>
    </Stack>
  );
}

export default SliderHomeShopping;
