import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "./footer.css";
import { makeStyles } from "@mui/styles";
import { homeContext, useHomeData } from "pages/HomeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "methods/api";
import axios from "axios";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { imgPath } from "methods/img";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      backgroundColor: "#3D4147", // Change this to whatever color you want
    },

    "& .MuiInputBase-input": {
      color: "#fff", // Change this to whatever color you want
    },
  },
});
function Footer() {
  const classes = useStyles();
  const { homeData } = useContext(homeContext);
  const findObj = useHomeData(homeData?.siteContent);
  const emailSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email(),
  });
  type InputContact = z.infer<typeof emailSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputContact>({
    mode: "onChange",
    resolver: zodResolver(emailSchema),
  });
  const onSubmit: SubmitHandler<InputContact> = (data) => {
    axios
      .post(api(`subscribe`), { ...data })
      .then((res) => {
        reset({ email: "" });
      })
      .catch((err) => {});
  };
  return (
    <Stack bgcolor="primary.main" padding={"80px 0px 80px 0px"}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item md={6}>
            <Box
              component={"img"}
              src={imgPath(homeData?.siteInformation.footer_logo)}
              sx={{ width: "300px" }}
            />
            <Typography
              variant="h5"
              sx={{ color: "#fff", py: 3, fontWeight: "600" }}
            >
              {findObj("Footer")?.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", pb: 3, width: "88%" }}
            >
              {findObj("Footer")?.description}
            </Typography>
            <Box>
              <NavLink to={homeData?.socialMedia[0].link || ""}>
                <FontAwesomeIcon icon={faFacebook} className="icons" />
              </NavLink>
              <NavLink to={homeData?.socialMedia[1].link || ""}>
                <FontAwesomeIcon icon={faYoutube} className="icons" />
              </NavLink>
              <NavLink to={homeData?.socialMedia[2].link || ""}>
                <FontAwesomeIcon icon={faInstagram} className="icons" />
              </NavLink>
              <NavLink to={homeData?.socialMedia[3]?.link || ""}>
                <FontAwesomeIcon icon={faTiktok} className="icons" />
              </NavLink>
            </Box>
          </Grid>
          <Grid
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            item
            md={6}
          >
            <Typography
              variant="h6"
              sx={{ color: "#fff", py: 3, fontWeight: "600" }}
            >
              {homeData?.siteInformation?.subscribe_now}
            </Typography>
            <Typography variant="body1" sx={{ color: "#fff", pb: 3 }}>
              {homeData?.siteInformation?.reach_all_now}
            </Typography>
            <TextField
              {...register("email")}
              className={classes.root}
              placeholder="Email"
              variant="outlined"
              sx={{ color: "red", width: "80%" }}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ mt: 3 }}
            >
              {homeData?.siteInformation?.subscribe_now}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Footer;
