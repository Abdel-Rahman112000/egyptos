import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { homeContext } from "pages/HomeContext";
import { imgPath } from "methods/img";
import RenderRte from "Components/RenderRte";
import { useTranslation } from "react-i18next";
import { LocalNavLink } from "hooks/useLocalNavigate";
function BlogPage() {
  const [t] = useTranslation();
  const { homeData } = useContext(homeContext);

  return (
    <Paper sx={{ padding: "80px 30px" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 10,
          textTransform: "uppercase",
        }}
      >
        {homeData?.siteInformation?.blog_us}
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {homeData?.blogs.map((item, index) => (
            <Grid
              item
              md={4}
              key={index}
              component={LocalNavLink}
              to={`/blog/${item.title}`}
            >
              <Card variant="outlined">
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    "&:hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <img
                    src={imgPath(item.image)}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      transition: "all .5s",
                    }}
                    alt={item.title}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "#fff",
                      display: "inline-block",
                      width: "60px",
                      padding: "10px",
                      textAlign: "center",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  >
                    {item.created_dm}
                  </Typography>
                </Box>

                <CardContent>
                  <Typography
                    variant="h6"
                    component={LocalNavLink}
                    to={`/blog/${item.title}`}
                    sx={{
                      fontSize: "17px",
                      fontWeight: 600,
                      "&:hover": {
                        letterSpacing: ".3px",
                      },
                      transition: "all .4s",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ py: 2 }}
                    className="max-lines"
                  >
                    <RenderRte rte={item.description} />
                  </Typography>
                  <Button variant="outlined" sx={{ mt: 2 }}>
                    {t("main.ReadMore")}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}

export default BlogPage;
