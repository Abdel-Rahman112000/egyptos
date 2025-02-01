import SimpleImageSlider from "react-simple-image-slider";

import { useContext } from "react";
import { homeContext } from "pages/HomeContext";
import { imgPath } from "methods/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import "./Slider.css";
function Slider() {
  const { homeData } = useContext(homeContext);
  const images = [
    ...(homeData?.sliders.map((item) => ({ url: imgPath(item.image) })) || []),
  ];

  return (
    <>
      {images.length > 0 ? (
        <Box>
          <Swiper
            className="Swiper_test"
            slidesPerView={1}
            spaceBetween={50}
            speed={900}
            modules={[EffectFade, Autoplay, Navigation]}
            allowSlideNext={true}
            allowSlidePrev={true}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            effect="coverflow"
            loop
            navigation={true}
            fadeEffect={{ crossFade: true }}
            key={images.join()}
          >
            {homeData?.sliders.map((image) => (
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
    </>
  );
}

export default Slider;
