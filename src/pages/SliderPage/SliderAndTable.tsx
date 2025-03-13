import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import { imgPath } from "methods/img";
import { useContext, useEffect, useState } from "react";
import { ProductSliderType } from "types/HardProducts";
import RenderRte from "Components/RenderRte";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

function SliderAndTable({ productInfo }: PropsType) {
  const images = [
    ...(productInfo?.product.images?.map((item) => ({
      url: imgPath(item.image),
    })) || []),
  ];
  const [sliderWidth, setSliderWidth] = useState("60%");
  const [sliderHeight, setSliderHeight] = useState("80vh");
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSliderWidth("90%");
        setSliderHeight("40vh");
      } else {
        setSliderWidth("60%");
        setSliderHeight("80vh");
      }
    };

    handleResize(); // Set initial width on component mount

    window.addEventListener("resize", handleResize); // Update width on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return (
    <>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", py: 2, fontWeight: "600", fontSize: "45px" }}
      >
        {productInfo?.product.title}
      </Typography>
      {images.length > 0 ? (
        <Box sx={{ py: 3 }}>
          <Swiper
            slidesPerView={1}
            style={{ height: "100%" }}
            spaceBetween={50}
            modules={[EffectFade, Autoplay, Navigation]}
            allowSlideNext={true}
            allowSlidePrev={true}
            autoplay={{ delay: 1500, disableOnInteraction: true }}
            effect="fade"
            loop
            navigation={true}
            fadeEffect={{ crossFade: true }}
            key={images.join()}
          >
            {productInfo?.product.images.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  src={imgPath(image.image)}
                  alt="card media image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ) : (
        "لا يوجد صور للعرض"
      )}
      <Stack>
        <Grid container>
          <Grid
            item
            xs={5}
            sx={{ p: 1, border: "solid 1px #DEE2E6", display: "flex" }}
          >
            <CreditCardIcon color="primary" sx={{ mx: 1 }} />
            <Typography variant="body1">
              {productInfo?.product.price}
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              p: 1,
              border: "solid 1px #DEE2E6",
              display: "flex",
              borderLeft: "0px",
            }}
          >
            <GroupsIcon color="primary" sx={{ mx: 1 }} />
            <Typography variant="body1">
              <RenderRte rte={productInfo?.product.persons} />
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              p: 1,
              border: "solid 1px #DEE2E6",
              display: "flex",
              borderTop: "0px",
            }}
          >
            <AccessTimeIcon color="primary" sx={{ mx: 1 }} />
            <Typography variant="body1">
              <RenderRte rte={productInfo?.product.Fully} />
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              p: 1,
              border: "solid 1px #DEE2E6",
              display: "flex",
              borderLeft: "0px",
              borderTop: "0px",
            }}
          >
            <LanguageIcon color="primary" sx={{ mx: 1 }} />
            <Typography variant="body1">
              <RenderRte rte={productInfo?.product.English} />
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ my: 4 }}>
            <Typography>
              <RenderRte rte={productInfo?.product.overview} />
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default SliderAndTable;
type PropsType = {
  productInfo?: ProductSliderType;
};
