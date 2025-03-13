import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import FixedSection from "Components/FixedSection";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CardRight from "./CardRight";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { api } from "methods/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BlogType } from "types/Blog";
import { imgPath } from "methods/img";
import RenderRte from "Components/RenderRte";
import { homeContext } from "pages/HomeContext";
function Blog() {
  const { name } = useParams();
  const { homeData } = useContext(homeContext);
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [blogData, setBlogData] = useState<BlogType | undefined>(undefined);
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  function getAboutData() {
    setStatus("loading");
    axios
      .get<{ data: BlogType }>(api(`blog/${name}`))
      .then(({ data }) => {
        setStatus("done");
        setBlogData(data.data);
      })
      .catch((error) => {
        setStatus("none");
      });
  }

  useEffect(() => {
    getAboutData();
  }, [name]);
  return (
    <Stack>
      <FixedSection title={homeData?.siteInformation?.blog_title} />
      <Container maxWidth={"lg"} sx={{ py: "100px" }}>
        <Grid container spacing={4}>
          <Grid item md={8} xs={12}>
            <Box sx={{ width: 1 }}>
              <img
                src={imgPath(blogData?.blog.image)}
                width={"100%"}
                height={"350px"}
                alt=""
              />
            </Box>
            <Stack sx={{ p: 1 }} flexDirection={"row"}>
              <CalendarMonthIcon sx={{ mx: 1 }} color="primary" />
              <Typography variant="body1">Nov 18 , 2022</Typography>
            </Stack>
            <Typography variant="h4" sx={{ my: 2, fontWeight: "600" }}>
              <RenderRte rte={blogData?.blog.title} />
            </Typography>
            <Typography>
              <RenderRte rte={blogData?.blog.description} />
            </Typography>
          </Grid>
          <CardRight />
        </Grid>
      </Container>
    </Stack>
  );
}

export default Blog;
