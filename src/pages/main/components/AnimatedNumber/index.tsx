import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import bgAnimated from "../../../../assets/animatedNumberImage.png";
import AnimatedNumber from "react-animated-numbers";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PersonIcon from "@mui/icons-material/Person";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { homeContext, useHomeData } from "pages/HomeContext";
import { useContext } from "react";
import { imgPath } from "methods/img";

function AnimationNumber() {
  const { homeData } = useContext(homeContext);
  const findObj = useHomeData(homeData?.siteContent);

  return (
    <Stack
      sx={{
        backgroundImage: `url(${imgPath(
          homeData?.siteInformation.home_number_image
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "50px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#FFF",
              marginY: 3,
            }}
          >
            <CheckBoxIcon sx={{ fontSize: "50px" }} />
            <Typography sx={{ direction: "ltr" }}>
              <AnimatedNumber
                includeComma
                animateToNumber={parseInt(
                  findObj("Home Count 1")?.title || "0"
                )}
                locale="en-US"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.8,
                })}
                fontStyle={{
                  fontSize: 50,
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                  color: "#fff",
                }}
              />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              {findObj("Home Count 1")?.description}
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#FFF",
              marginY: 3,
            }}
          >
            <PersonIcon sx={{ fontSize: "50px" }} />
            <Typography sx={{ direction: "ltr" }}>
              <AnimatedNumber
                includeComma
                animateToNumber={parseInt(
                  findObj("Home Count 2")?.title || "0"
                )}
                locale="en-US"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.8,
                })}
                fontStyle={{
                  fontSize: 50,
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                  color: "#fff",
                }}
              />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              {findObj("Home Count 2")?.description}
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#FFF",
              marginY: 3,
            }}
          >
            <ThumbsUpDownIcon sx={{ fontSize: "50px" }} />
            <Typography sx={{ direction: "ltr" }}>
              <AnimatedNumber
                includeComma
                animateToNumber={parseInt(
                  findObj("Home Count 3")?.title || "0"
                )}
                locale="en-US"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.8,
                })}
                fontStyle={{
                  fontSize: 50,
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                  color: "#fff",
                }}
              />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              {findObj("Home Count 3")?.description}
            </Typography>
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#FFF",
              marginY: 3,
            }}
          >
            <ThumbUpAltIcon sx={{ fontSize: "50px" }} />
            <Typography sx={{ direction: "ltr" }}>
              <AnimatedNumber
                includeComma
                animateToNumber={parseInt(
                  findObj("Home Count 4")?.title || "0"
                )}
                locale="en-US"
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.8,
                })}
                fontStyle={{
                  fontSize: 50,
                  fontWeight: 600,
                  fontFamily: "sans-serif",
                  color: "#fff",
                }}
              />
            </Typography>
            <Typography variant="body1" color={"#fff"}>
              {findObj("Home Count 4")?.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default AnimationNumber;
