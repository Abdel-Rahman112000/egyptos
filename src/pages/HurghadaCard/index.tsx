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
import { HardProductsType } from "types/HardProducts";
import RenderRte from "Components/RenderRte";
import Spinner from "pages/SpinnerPage/Spinner";
import { imgPath } from "methods/img";
import "./main.css";
import { homeContext } from "pages/HomeContext";
import { LocalNavLink } from "hooks/useLocalNavigate";
function HurghadaCard() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const navigate = useNavigate();
  const { name } = useParams();
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [products, setProducts] = useState<HardProductsType | undefined>(
    undefined
  );
  const { homeData } = useContext(homeContext);
  function getProductsData() {
    setStatus("loading");
    //
    axios
      .get<{ data: HardProductsType }>(api(`products/${name}`))
      .then(({ data }) => {
        setStatus("done");
        setProducts(data.data);
      })
      .catch((error) => {
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
          <FixedSection title={homeData?.siteInformation?.service_title} />
          <Stack sx={{ padding: "80px 30px" }}>
            <Typography
              variant="h1"
              sx={{
                textAlign: "center",
                fontWeight: 600,
                mb: 10,
                fontSize: "45px",
              }}
            >
              {products?.category}
            </Typography>
            <Container>
              <Grid container spacing={2}>
                {products?.products.map((card, index) => (
                  <Grid item md={4} key={index}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor: "#fff",
                        border: "2px solid",
                        borderRadius: "10px",
                        minHeight: "630px",
                        "&:hover .line": {
                          width: 1,
                        },
                      }}
                    >
                      <Stack sx={{ position: "relative" }}>
                        <Box
                          component={LocalNavLink}
                          to={`/excursionsfroomhurghada/${card.title}`}
                          sx={{
                            overflow: "hidden",
                            "&:hover img": {
                              transform: "scale(1.1)",
                              height: "250px",
                            },
                          }}
                        >
                          <img
                            src={imgPath(card.images[0].image)}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "all .5s",
                            }}
                            alt=""
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            backgroundColor: "primary.main",
                            color: "#fff",
                            textAlign: "center",
                            position: "absolute",
                            bottom: "0",
                            left: "50%",
                            fontWeight: "700",
                            p: "3px 12px",
                            transform: "translateY(50%) translateX(-50%)",
                            borderRadius: "10px",
                          }}
                        >
                          {card.price}
                        </Typography>
                      </Stack>
                      <CardContent>
                        <Typography
                          variant="h6"
                          component={LocalNavLink}
                          to={`/excursionsfroomhurghada/${card.title}`}
                          sx={{
                            fontWeight: 700,
                            marginTop: 4,
                            marginBottom: 2,
                            display: "inline-block",
                            fontSize: "18px",
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Box
                          color={"#F19B02"}
                          sx={{
                            borderBottom: "dashed 1px #000",
                            pb: 2,
                          }}
                        >
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                        </Box>
                        <Typography
                          className="limit_word"
                          variant="body1"
                          sx={{ py: 2 }}
                        >
                          <RenderRte rte={card.description} />
                        </Typography>
                      </CardContent>
                      <Stack
                        sx={{
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            height: "100%",
                          }}
                        >
                          <Typography
                            variant="body1"
                            component={LocalNavLink}
                            sx={{
                              width: "100px",
                              textAlign: "center",
                              borderRadius: "10px",
                              backgroundColor: homeData?.SiteColor.mainColor,
                              transition: "all .3s",
                              color: "#fff",
                              padding: "9px",
                              marginBottom: "15px",
                            }}
                            to={`/excursionsfroomhurghada/${card.title}`}
                          >
                            {t("main.ReadMore")}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: 0,
                            height: "5px",
                            backgroundColor: homeData?.SiteColor.mainColor,
                            transition: "all .8s",
                          }}
                          className={"line"}
                        ></Box>
                      </Stack>
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

export default HurghadaCard;
