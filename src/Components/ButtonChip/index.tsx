import { Grid, Stack } from "@mui/material";
import { LocalNavLink } from "hooks/useLocalNavigate";
import { homeContext } from "pages/HomeContext";
import { useContext } from "react";

function ButtonChip({ id, name, link }: PropsType) {
  const { homeData } = useContext(homeContext);
  return (
    <Grid sx={{ p: 1 }} item md={3} xs={12}>
      <Stack
        component={LocalNavLink}
        to={`${link + "/" + name}`}
        sx={{
          backgroundColor: "primary.main",
          py: 2,
          fontSize: "18px",
          fontWeight: "600",
          width: "100%",
          borderRadius: "10px",
          textAlign: "center",
          transition: "all .3s",
          color: "#fff",
          "&:hover": {
            background: homeData?.SiteColor.secondaryColor || "#F19B02",
          },
        }}
      >
        {name}
      </Stack>
    </Grid>
  );
}

type PropsType = {
  name: string;
  link: string;
  id: number;
};
export default ButtonChip;
