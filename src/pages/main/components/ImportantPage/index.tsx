import { Box, Grid, Stack, Typography } from "@mui/material";
import { homeContext, useHomeData } from "pages/HomeContext";
import { useContext } from "react";
import RenderRte from "Components/RenderRte";
import { imgPath } from "methods/img";
function ImportPage() {
  const { homeData } = useContext(homeContext);
  const findObj = useHomeData(homeData?.siteContent);

  return (
    <Stack sx={{ margin: "20px 0px", backgroundColor: "primary.main" }}>
      <Box>
        <Grid container>
          <Grid item md={6} p={6}>
            <Typography
              sx={{ color: "#fff", fontWeight: 600, fontSize: "30px" }}
            >
              <RenderRte rte={findObj("Why Choose Us")?.description} />
            </Typography>
            <Typography
              sx={{ color: "#fff", fontWeight: 600, fontSize: "16px", py: 2 }}
            >
              <RenderRte rte={findObj("Why Choose Us 1")?.description} />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              <RenderRte rte={findObj("Why Choose Us 2")?.description} />
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ display: { md: "block", xs: "none" } }}>
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              src={imgPath(homeData?.siteInformation.pdf)}
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}

export default ImportPage;
