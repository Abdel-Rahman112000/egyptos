import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useContext } from "react";
import { homeContext } from "pages/HomeContext";
import { useTranslation } from "react-i18next";
import { imgPath } from "methods/img";
function ContactUs() {
  const [t] = useTranslation();
  const { homeData } = useContext(homeContext);
  return (
    <Stack
      style={{
        backgroundImage: `url(${imgPath(
          homeData?.siteInformation.home_contact_image
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        padding: "100px 0px",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  paddingBottom: "20px",
                }}
              >
                {homeData?.siteInformation.contact_us}
              </Typography>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                {homeData?.siteInformation.you_will_be}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            xs={5.5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CallOutlinedIcon sx={{ color: "#fff", fontSize: "2.4rem" }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: "600",
                    alignSelf: "center",
                    marginLeft: 2,
                  }}
                >
                  {homeData?.siteInformation.call_us}
                </Typography>
              </Box>
              <Box sx={{ margin: "10px 0 0 0px", direction: "ltr" }}>
                {homeData?.siteInformation?.phone1 && (
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {homeData?.siteInformation?.phone1}
                  </Typography>
                )}
                {homeData?.siteInformation?.phone2 && (
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {homeData?.siteInformation?.phone2}
                  </Typography>
                )}
                {homeData?.siteInformation?.phone3 && (
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {homeData?.siteInformation?.phone3}
                  </Typography>
                )}
                {homeData?.siteInformation?.phone4 && (
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {homeData?.siteInformation?.phone4}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            xs={6.5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <EmailOutlinedIcon sx={{ color: "#fff", fontSize: "2.4rem" }} />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: "600",
                    alignSelf: "center",
                    marginLeft: 2,
                  }}
                >
                  {homeData?.siteInformation.email_trans}
                </Typography>
              </Box>
              <Box sx={{ margin: "10px 0 0 0px" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#fff", width: "200px" }}
                >
                  {homeData?.siteInformation?.email}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default ContactUs;
