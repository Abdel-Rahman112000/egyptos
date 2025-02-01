import { Container, Grid, Stack, Typography } from "@mui/material";
import ButtonChip from "../../../../Components/ButtonChip";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { homeContext } from "pages/HomeContext";

function ShoppingPage() {
  const [t] = useTranslation();
  const { homeData } = useContext(homeContext);

  return (
    <Stack sx={{ padding: "60px 0px" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            py: 3,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {homeData?.siteInformation?.explorer_us}
        </Typography>
        <Grid container padding={"30px 0"}>
          {homeData?.shippings.map((trip) => (
            <ButtonChip
              key={trip.id}
              name={trip.name}
              id={trip.id}
              link="shopping"
            />
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}

export default ShoppingPage;
