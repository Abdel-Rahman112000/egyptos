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
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { api } from "methods/api";
import Spinner from "pages/SpinnerPage/Spinner";
import { imgPath } from "methods/img";
import { ShoppingCardType } from "types/Shopping";
import { homeContext } from "pages/HomeContext";
function ShopCard() {
  const [t, i18n] = useTranslation();
  const { name } = useParams();
  const [status, setStatus] = useState<"none" | "loading" | "done">("none");
  const [products, setProducts] = useState<ShoppingCardType | undefined>(
    undefined
  );
  const { homeData } = useContext(homeContext);

  function getProductsData() {
    setStatus("loading");
    axios
      .get<{ data: ShoppingCardType }>(api(`shop/${name}`))
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
          <FixedSection title={homeData?.siteInformation?.explorer_title} />
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
              {products?.category_name}
            </Typography>
            <Container>
              <Grid container spacing={2}>
                {products?.shops?.map((card, index) => (
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
                          sx={{
                            overflow: "hidden",
                            "&:hover img": {
                              transform: "scale(1.1)",
                              height: "250px",
                            },
                          }}
                        >
                          <img
                            src={imgPath(card?.images[0].image)}
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
                          sx={{
                            fontWeight: 700,
                            marginY: 0.5,
                            display: "inline-block",
                          }}
                        >
                          {card.name}
                        </Typography>
                        <Box
                          color="#F19B02"
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
                        <Typography variant="body1" sx={{ my: 1 }}>
                          {card.description}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 600,
                          }}
                        >
                          {card.cost}
                        </Typography>
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

export default ShopCard;
