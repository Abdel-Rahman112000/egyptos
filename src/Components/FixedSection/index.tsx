import { Box, Typography } from "@mui/material";
import AboutImg from "../../assets/animatedNumberImage.png";
import { useTranslation } from "react-i18next";
import RenderRte from "Components/RenderRte";
import { homeContext } from "pages/HomeContext";
import { useContext } from "react";
import { imgPath } from "methods/img";

function FixedSection({ title }: { title?: string }) {
  const [t] = useTranslation();
  const { homeData } = useContext(homeContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${imgPath(
          homeData?.siteInformation.product_image
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        padding: "100px 0px",
        height: "65vh",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "700",
          color: "#fff",
          mt: 15,
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        <RenderRte rte={title} />
      </Typography>
    </Box>
  );
}

export default FixedSection;
