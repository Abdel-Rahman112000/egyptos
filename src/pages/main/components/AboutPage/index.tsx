import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SquareIcon from "@mui/icons-material/Square";
import { useContext } from "react";
import { homeContext, useHomeData } from "pages/HomeContext";
import RenderRte from "Components/RenderRte";
import { imgPath } from "methods/img";
function SquuareTypeo({ title }: PropsType) {
  return (
    <Box display={"flex"} flexDirection={"row"} marginBottom={2} gap={3}>
      <SquareIcon sx={{ color: "#DDD" }} />
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
}
function AboutPage() {
  const [t] = useTranslation();
  const { homeData } = useContext(homeContext);
  const findObj = useHomeData(homeData?.siteContent);
  return (
    <Stack sx={{ padding: "80px 30px" }}>
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              width: { md: "450px", xs: "350px" },
            }}
            src={imgPath(homeData?.siteInformation.about_image)}
            alt="About Image"
          />
        </Grid>
        <Grid item md={5} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, marginTop: 1, textTransform: "uppercase" }}
            >
              {homeData?.siteInformation?.about_us}
            </Typography>
            <Typography variant="h5" fontWeight={600}>
              <RenderRte rte={findObj("Home About")?.title} />
            </Typography>
            <Typography sx={{ py: 2 }}>
              <RenderRte rte={findObj("Home About")?.description} />
            </Typography>
            <SquuareTypeo title={findObj("Home About 1")?.description} />
            <SquuareTypeo title={findObj("Home About 2")?.description} />
            <SquuareTypeo title={findObj("Home About 3")?.description} />
            <Box
              sx={{
                borderTop: "3px solid #EEE",
                borderBottom: "3px solid #EEE",
              }}
            >
              <Typography
                sx={{
                  fontSize: "140px",
                  fontWeight: "600",
                  position: "relative",
                  mb: 1,
                }}
              >
                <RenderRte rte={findObj("Home About Years")?.title} />
              </Typography>
              <Typography
                variant="body1"
                sx={{ position: "relative", bottom: "50px", left: "0px" }}
              >
                <RenderRte rte={findObj("Home About Years")?.description} />
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

type PropsType = {
  title?: string;
};
export default AboutPage;
