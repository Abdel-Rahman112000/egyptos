import { Box, Grid, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { homeContext } from "pages/HomeContext";
import { useContext } from "react";
import { imgPath } from "methods/img";
import { LocalNavLink } from "hooks/useLocalNavigate";

function CardRight() {
  const { homeData } = useContext(homeContext);
  return (
    <Grid item md={4} xs={12} mt={4}>
      <Stack sx={{ border: "solid 2px #EEE", py: "50px", px: "20px" }}>
        <Typography variant="h6" sx={{ pb: "15px", fontWeight: "700" }}>
          Blog
        </Typography>
        {homeData?.blogs.map((item) => (
          <Stack
            key={item.id}
            flexDirection={"row"}
            mb={2}
            component={LocalNavLink}
            to={`../blog/${item.title}`}
          >
            <img
              src={imgPath(item.image)}
              alt=""
              height={"70px"}
              width={"70px"}
            />
            <Box sx={{ mx: 2 }}>
              <Typography
                variant="body2"
                sx={{ fontWeight: "700", fontSize: "15px" }}
              >
                {item.title}
              </Typography>
              <Stack flexDirection={"row"} alignItems={"center"}>
                <CalendarMonthIcon
                  color="primary"
                  sx={{ fontSize: "18px", mx: 0.2 }}
                />
                <Typography variant="body2">{item.created_at}</Typography>
              </Stack>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Grid>
  );
}

export default CardRight;
