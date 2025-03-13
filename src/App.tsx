import "./App.css";
import Layout from "./pages/layout";
import { Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme/MUI_Theme";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import axios from "axios";
import isRtl from "methods/isRtl";
import { useContext, useEffect } from "react";
import { homeContext } from "pages/HomeContext";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

function App() {
  const [t, i18n] = useTranslation();
  const { language, changeLanguage } = i18n;
  const { homeData } = useContext(homeContext);
  const { local } = useParams();
  const navigate = useNavigate();
  axios.defaults.headers.common["lang"] = language;
  useEffect(() => {
    if (!local) {
      changeLanguage("en");
    } else {
      changeLanguage(local || "en");
    }
  }, [local]);

  return (
    <ThemeProvider
      theme={theme(
        homeData?.SiteColor.mainColor,
        homeData?.SiteColor.secondaryColor,
        language
      )}
    >
      <HelmetProvider>
        <Stack
          sx={{ direction: isRtl(language) ? "rtl" : "ltr" }}
          component={"main"}
          className="App"
        >
          <Layout key={language} />
        </Stack>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
