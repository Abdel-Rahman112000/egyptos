import { Box, Button, Grow, Stack } from "@mui/material";
import FixedSection from "Components/FixedSection";
import { useContext, useEffect, useState } from "react";
import DialogForm from "./DialogForm";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { api } from "methods/api";
import axios from "axios";
import { ProductSliderType } from "types/HardProducts";
import SliderAndTable from "./SliderAndTable";
import Spinner from "pages/SpinnerPage/Spinner";
import { homeContext } from "pages/HomeContext";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import CallIcon from "@mui/icons-material/Call";
import Helmet from "react-helmet";

function SliderHurhada() {
  const [t, i18n] = useTranslation();
  const { homeData } = useContext(homeContext);
  const [handelIcon, sethandelIcon] = useState(false);
  const actions = [
    {
      icon: <WhatsAppIcon sx={{ color: "#fff", fontSize: "40px" }} />,
      name: "WhatsApp",
      bgcolor: "#25d366",
      link: `${homeData?.contactus.whatsup}`,
    },
    {
      icon: <TelegramIcon sx={{ color: "#fff", fontSize: "40px" }} />,
      name: "Telegram",
      bgcolor: "#279dd8",
      link: `${homeData?.contactus.telegram}`,
    },
    {
      icon: (
        <SettingsPhoneIcon
          sx={{
            color: "#784F99",
            fontSize: "40px",
            background: "#fff",
            borderRadius: "25px",
          }}
        />
      ),
      name: "Viber",
      bgcolor: "#784F99",
      link: `${homeData?.contactus.viber}`,
    },
    {
      icon: <CallIcon sx={{ color: "#fff", fontSize: "40px" }} />,
      name: "Phone",
      bgcolor: "green",
      link: `${homeData?.contactus.phone}`,
    },
  ];
  const { name } = useParams();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [productInfo, setProductInfo] = useState<ProductSliderType | undefined>(
    undefined
  );
  function getProductData() {
    setStatus("loading");
    //
    axios
      .get<{ data: ProductSliderType }>(api(`product/${name}`))
      .then(({ data }) => {
        setStatus("done");
        setProductInfo(data.data);
      })
      .catch((error) => {
        setStatus("none");
      });
  }
  useEffect(() => {
    getProductData();
  }, [name]);
  function bookTravel(name: string) {
    axios
      .post(api(`book-count`), { title: name, product_id: name })
      .then((res) => {})
      .catch((err) => {});
  }
  return (
    <>
      {status == "done" ? (
        <>
          <Helmet>
            <title>{productInfo?.product.title}</title>
            <meta
              name="description"
              content={productInfo?.product.metaDescription}
            />
            <meta name="keywords" content={productInfo?.product.metaTags} />
          </Helmet>
          <FixedSection title="Excursions From Hurghada" />
          <Stack
            sx={{
              py: 8,
              width: { md: "60%", xs: "90%" },
              display: "flex",
              margin: " 0 auto",
            }}
          >
            <SliderAndTable productInfo={productInfo} />
            {handelIcon && (
              <Grow in={handelIcon} timeout={1000}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {actions.map((item) => (
                    <Box
                      key={item.name}
                      component={"a"}
                      onClick={() => {
                        bookTravel(item.name);
                      }}
                      target="_blank"
                      href={`${item.link}`}
                      sx={{
                        backgroundColor: item.bgcolor,
                        borderRadius: "50%",
                        p: 1,
                        ml: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                  ))}
                </Box>
              </Grow>
            )}

            {handelIcon == false && (
              <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{ borderRadius: "10px", padding: "10px 20px" }}
                  variant="contained"
                  onClick={() => {
                    // Adding a delay before showing the icons with animation
                    setTimeout(() => {
                      sethandelIcon(true);
                    }, 100); // 1000ms delay (1 second)
                  }}
                >
                  {t("Hurghada.BookNow")}
                </Button>
              </Box>
            )}
          </Stack>
          <DialogForm open={open} setOpen={setOpen} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default SliderHurhada;
