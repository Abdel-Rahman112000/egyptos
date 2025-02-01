import { Button, Container, Grid, Stack, TextField } from "@mui/material";
import { withStyles } from "@mui/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import z from "zod";
import axios from "axios";
import { useSnackbar } from "notistack";
import { api } from "methods/api";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { homeContext } from "pages/HomeContext";
import { imgPath } from "methods/img";
const styles = {
  root: {
    "& .MuiInputLabel-root": {
      color: "#000", // Change the label color here
    },
    "& .MuiInputBase-root": {
      borderColor: "#000", // Change the border color here
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000", // Change the border color when focused
    },
  },
};
const CustomTextField = withStyles(styles)(TextField);
function FormPage() {
  const { homeData } = useContext(homeContext);
  const [t, i18n] = useTranslation();
  const contactSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    phone: z.string().min(1, { message: "phone is required" }),
    subject: z.string().min(1, { message: "subject is required" }),
    message: z.string().min(1, { message: "message is required" }),
  });
  type InputContact = z.infer<typeof contactSchema>;
  const { enqueueSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputContact>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });
  const onSubmit: SubmitHandler<InputContact> = (data) => {
    axios
      .post(api(`message`), { ...data })
      .then(() => {
        reset({
          email: "",
          message: "",
          name: "",
          phone: "",
          subject: "",
        });
      })
      .catch((err) => {});
  };
  return (
    <Stack
      sx={{
        backgroundImage: `url(${imgPath(
          homeData?.siteInformation.contact_image
        )})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        pb: 4,
        pt: 12,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          spacing={3}
        >
          <Grid item xs={12} md={6}>
            <CustomTextField
              {...register("name")}
              variant="filled"
              label={t("ContactUs.Name")}
              fullWidth
            />
            {/* {errors.name && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.name.message}
              </Typography>
            )} */}
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              {...register("email")}
              variant="filled"
              label={t("ContactUs.Email")}
              fullWidth
            />
            {/* {errors.email && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.email.message}
              </Typography>
            )} */}
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              {...register("subject")}
              variant="filled"
              label={t("ContactUs.Subject")}
              fullWidth
            />
            {/* {errors.subject && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.subject.message}
              </Typography>
            )} */}
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              {...register("phone")}
              variant="filled"
              label={t("ContactUs.Phone")}
              fullWidth
            />
            {/* {errors.phone && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.phone.message}
              </Typography>
            )} */}
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              {...register("message")}
              variant="filled"
              label={t("ContactUs.Message")}
              fullWidth
              multiline
              rows={5}
            />
            {/* {errors.message && (
              <Typography variant="body2" sx={{ color: "error.main" }}>
                {errors.message.message}
              </Typography>
            )} */}
          </Grid>
          <Grid item md={12}>
            <Stack alignItems={"center"}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                disabled={isSubmitting}
              >
                {t("ContactUs.Send")}
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{ my: 3 }}>
            <iframe
              src={homeData?.siteInformation.map}
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default FormPage;
