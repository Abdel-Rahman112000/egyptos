import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AboutUsImg from "../../assets/aboutUs.png";
import "./About.css";
import { useTranslation } from "react-i18next";
import FixedSection from "../../Components/FixedSection";
import RenderRtchText from "../../Components/RenderRte";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { api } from "methods/api";
import { AboutType } from "types/About";
import { homeContext } from "pages/HomeContext";
import RenderRte from "../../Components/RenderRte";
import Helmet from "react-helmet";
function AboutUs() {
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [aboutData, setAboutData] = useState<AboutType | undefined>(undefined);
  const [t, i18n] = useTranslation();
  const { homeData } = useContext(homeContext);
  function getAboutData() {
    setStatus("loading");
    axios
      .get<{ data: AboutType }>(api(`about`))
      .then(({ data }) => {
        setStatus("done");
        setAboutData(data.data);
      })
      .catch((error) => {
        setStatus("none");
      });
  }

  useEffect(() => {
    getAboutData();
  }, []);
  return (
    <Stack>
      <FixedSection title={homeData?.siteInformation?.about_title} />
      <Helmet>
        <title>{homeData?.siteInformation.about_us}</title>
        <meta
          name="description"
          content={homeData?.siteInformation?.about_description}
        />
        <meta
          name="keywords"
          content={homeData?.siteInformation?.aboutMetaTags}
        />
      </Helmet>
      <Container maxWidth={"lg"} sx={{ py: "80px" }}>
        <Grid container>
          <Grid item md={6}>
            <Box sx={{ width: { md: "440px", xs: "300px" } }}>
              <img src={aboutData?.metaImage} width={"100%"} alt="AboutUsImg" />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, textTransform: "uppercase " }}
            >
              {t("main.AboutUs")}
            </Typography>
            <Typography
              className="subAbout"
              variant="h5"
              sx={{
                py: 3,
                fontWeight: "600",
                "&::before": {
                  content: '""',
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  marginRight: "15px",
                  borderRight: `5px solid ${homeData?.SiteColor.mainColor}`,
                },
              }}
            >
              {aboutData?.siteInformation?.about}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgb(3, 14, 44)", fontWeight: "600" }}
            >
              <RenderRte rte={aboutData?.siteInformation.description} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default AboutUs;
