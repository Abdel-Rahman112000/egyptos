import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import FixedSection from "../../Components/FixedSection";
import { useNavigate, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { api } from "methods/api";
import Spinner from "pages/SpinnerPage/Spinner";
import { imgPath } from "methods/img";
import { HotelCardType } from "types/Hotel";
import { homeContext } from "pages/HomeContext";
import { LocalNavLink } from "hooks/useLocalNavigate";
import RenderRte from "Components/RenderRte";
function HotelCard() {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const { name } = useParams();
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [products, setProducts] = useState<HotelCardType | undefined>(
    undefined
  );
  const { homeData } = useContext(homeContext);
  useEffect(() => {}, []);
  function getProductsData() {
    setStatus("loading");
    axios
      .get<{ data: HotelCardType }>(api(`hotels/${name}`))
      .then(({ data }) => {
        setStatus("done");
        setProducts(data.data);
      })
      .catch((error) => {
        console.log("error", error);
        setStatus("none");
      });
  }

  useEffect(() => {
    getProductsData();
  }, [name]);
  return (
    <>
      {status == "done" ? (
        <>
          <FixedSection title={homeData?.siteInformation?.hotel_title} />
          <Stack sx={{ padding: "80px 30px" }}>
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                fontWeight: 600,
                fontSize: "45px",
                mb: 10,
              }}
            >
              {products?.department}
            </Typography>
            <Container>
              <Grid container spacing={2}>
                {products?.hotels?.map((card, index) => (
                  <Grid item md={4} key={index}>
                    <Card
                      sx={{
                        backgroundColor: "#fff",
                        border: "2px solid",
                        borderRadius: "10px",
                        "&:hover .line": {
                          width: 1,
                        },
                      }}
                    >
                      <Stack sx={{ position: "relative" }}>
                        <Box
                          component={LocalNavLink}
                          to={`/hotel/${card.title}`}
                          sx={{
                            overflow: "hidden",
                            "&:hover img": {
                              transform: "scale(1.1)",
                              height: "250px",
                            },
                          }}
                        >
                          <img
                            src={imgPath(card?.metaImage[0].image)}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "all .5s",
                            }}
                            alt=""
                          />
                        </Box>
                        {/* <Typography
                      variant="h6"
                      sx={{
                        backgroundColor: "primary.main",
                        color: "#fff",
                        textAlign: "center",
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        fontWeight: "700",
                        p: "3px 20px",
                        transform: "translateY(50%) translateX(-50%)",
                        borderRadius: "10px",
                      }}
                    >
                      18 $
                    </Typography> */}
                      </Stack>

                      <CardContent>
                        <Typography
                          variant="h6"
                          component={LocalNavLink}
                          to={`/hotel/${card.title}`}
                          sx={{
                            fontWeight: 700,
                            marginY: 0.5,
                            display: "inline-block",
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 1,
                          }}
                        >
                          {Array.from({ length: card.stars }, (_, i) => (
                            <StarIcon
                              key={i}
                              sx={{ color: "#F19B02", fontSize: 20 }}
                            />
                          ))}
                        </Box>
                        <Typography variant="body1" sx={{ py: 1 }}>
                          {card.stars} {t("Hotel.Stars")}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            variant="body1"
                            component={LocalNavLink}
                            sx={{
                              borderRadius: "10px",
                              backgroundColor: homeData?.SiteColor.mainColor,
                              transition: "all .3s",
                              color: "#fff",
                              padding: "9px",
                            }}
                            to={`/hotel/${card.title}`}
                          >
                            {t("main.ReadMore")}
                          </Typography>
                        </Box>
                      </CardContent>
                      <Box
                        sx={{
                          width: 0,
                          height: "5px",
                          backgroundColor: "primary.main",
                          transition: "all .8s",
                        }}
                        className={"line"}
                      ></Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Stack>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default HotelCard;
