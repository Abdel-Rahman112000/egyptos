import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import aboutImg from "../../../../assets/WhyUsImage.png";
import { useTranslation } from "react-i18next";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import { useContext } from "react";
import { homeContext, useHomeData } from "pages/HomeContext";
import RenderRte from "Components/RenderRte";
import { imgPath } from "methods/img";

function WhyusPage() {
  const [t, i18n] = useTranslation();
  const { homeData } = useContext(homeContext);
  const findObj = useHomeData(homeData?.siteContent);

  return (
    <Stack sx={{ padding: "80px 0" }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  marginTop: 3,
                  textTransform: "uppercase",
                }}
              >
                <RenderRte rte={findObj("Home Features")?.title} />
              </Typography>
              <Typography
                variant="body1"
                sx={{ py: 3, fontWeight: "600", fontSize: "25px" }}
              >
                <RenderRte rte={findObj("Home Features")?.description} />
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
              marginBottom={4}
            >
              <Box bgcolor={"primary.main"} height={"100%"} padding={0.5}>
                <VisibilityOffIcon sx={{ fontSize: "60pX", color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="h6">
                  <RenderRte rte={findObj("Home Features 1")?.title} />
                </Typography>
                <Typography variant="body1">
                  <RenderRte rte={findObj("Home Features 1")?.description} />
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
              marginBottom={4}
            >
              <Box bgcolor={"primary.main"} height={"100%"} padding={0.5}>
                <BrightnessHighIcon sx={{ fontSize: "60pX", color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="h6">
                  <RenderRte rte={findObj("Home Features 2")?.title} />
                </Typography>
                <Typography variant="body1">
                  <RenderRte rte={findObj("Home Features 2")?.description} />
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
              marginBottom={4}
            >
              <Box bgcolor={"primary.main"} height={"100%"} padding={0.5}>
                <ModeStandbyIcon sx={{ fontSize: "60pX", color: "#fff" }} />
              </Box>
              <Box>
                <Typography variant="h6">
                  <RenderRte rte={findObj("Home Features 3")?.title} />
                </Typography>
                <Typography variant="body1">
                  <RenderRte rte={findObj("Home Features 3")?.description} />
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Box sx={{ p: 6 }}>
              <Box sx={{ border: "solid 10px #0052a4" }}>
                <Box
                  component="img"
                  sx={{
                    width: { md: "600px", xs: "250px" },
                    position: "relative",
                    top: "30px",
                    right: "30px",
                  }}
                  src={imgPath(homeData?.siteInformation.home_about_image)}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default WhyusPage;
