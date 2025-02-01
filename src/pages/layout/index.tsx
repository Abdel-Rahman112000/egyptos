import Navbar from "../../Components/Navbar";
import MainPages from "../main";
import Footer from "../../Components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "../AboutUs";
import ContactUsPage from "../ContactUs";
import FixedIcon from "../main/components/FixedIcon";
import { homeContext } from "../HomeContext";
import HurghadaCard from "pages/HurghadaCard";
import Blog from "pages/Blog";
import { useContext, useEffect } from "react";
import Spinner from "pages/SpinnerPage/Spinner";
import SliderHurhada from "pages/SliderPage";
import HotelCard from "pages/HotelCard";
import SliderHotel from "pages/HotelCard/SliderPage";
import ShopCard from "pages/ShoppingCard";
import { Stack, Typography } from "@mui/material";
import NotFound from "Components/NotFound";
import { useTranslation } from "react-i18next";

function Layout() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const { status } = useContext(homeContext);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {status === "done" ? (
        <div>
          <Navbar />
          <div className="main-view">
            <Routes>
              <Route path="" element={<MainPages />} />
              <Route path="home" element={<MainPages />} />
              {language !== "ar" && (
                <>
                  <Route
                    path="excursionsfromhurghada/:name"
                    element={<HurghadaCard />}
                  />
                  <Route path="product/:name" element={<SliderHurhada />} />
                </>
              )}
              {(language === "ar" || language === "en") && (
                <>
                  <Route path="hotels/:name" element={<HotelCard />} />
                  <Route path="hotel/:name" element={<SliderHotel />} />
                </>
              )}

              {language !== "ar" && (
                <Route path="shopping/:name" element={<ShopCard />} />
              )}

              <Route path="about" element={<AboutUs />} />
              <Route path="blog/:name" element={<Blog />} />
              <Route path="contact" element={<ContactUsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FixedIcon />
          </div>
          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Layout;
