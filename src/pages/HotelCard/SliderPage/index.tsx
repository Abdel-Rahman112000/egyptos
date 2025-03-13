import { Box, Button, Stack } from "@mui/material";
import FixedSection from "Components/FixedSection";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "methods/api";
import axios from "axios";
import { ProductSliderType } from "types/HardProducts";
import Spinner from "pages/SpinnerPage/Spinner";
import SliderAndTableHotel from "./SliderAndTable";
import { HotelSliderType } from "types/Hotel";
import { homeContext } from "pages/HomeContext";

function SliderHotel() {
  const [t, i18n] = useTranslation();
  const { homeData } = useContext(homeContext);
  const { name } = useParams();
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [cardHotelInfo, setcardHotelInfo] = useState<
    HotelSliderType | undefined
  >(undefined);
  function getProductData() {
    setStatus("loading");
    //
    axios
      .get<{ data: HotelSliderType }>(api(`hotel/${name}`))
      .then(({ data }) => {
        setStatus("done");
        setcardHotelInfo(data.data);
      })
      .catch((error) => {
        setStatus("none");
      });
  }
  useEffect(() => {
    getProductData();
  }, [name]);
  return (
    <>
      {status == "done" ? (
        <>
          <FixedSection title="Hotel" />
          <Stack
            sx={{
              py: 8,
              width: { md: "60%", xs: "90%" },
              display: "flex",
              margin: " 0 auto",
            }}
          >
            <SliderAndTableHotel cardHotelInfo={cardHotelInfo} />
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                target="_blank"
                variant="contained"
                href={cardHotelInfo?.hotel?.link || " "}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "primary.main",
                  transition: "all .3s",
                }}
              >
                {homeData?.siteInformation.vedio}
              </Button>
            </Box>
          </Stack>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default SliderHotel;
