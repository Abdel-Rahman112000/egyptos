import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Drawer,
  MenuItem,
  IconButton,
  Paper,
  MenuList,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import "./SecondNavbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { homeContext } from "pages/HomeContext";
import { imgPath } from "methods/img";
import { Category } from "types/Root";
import { LocalNavLink } from "hooks/useLocalNavigate";

let Color: string | undefined = "";
let MainColor: string | undefined = "";
function SubMenu({ title, link }: PropsType) {
  return (
    <MenuItem
      className="subLink"
      sx={{
        py: 1.5,
        background: MainColor || "#000",
        "&:hover": {
          color: Color || "#F19B02",
        },
      }}
      component={LocalNavLink}
      to={link}
    >
      {title}
    </MenuItem>
  );
}

function SecondNavbar() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const { homeData } = useContext(homeContext);
  const cat: Category[] | undefined = [...(homeData?.Categories || [])];
  Color = homeData?.SiteColor.secondaryColor;
  MainColor = homeData?.SiteColor.mainColor;
  const theme = useTheme();
  const { scrollY } = useWindowScrollPosition();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navBackground, setNavBackground] = useState("0");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setScrollPosition(scrollY);
  }, [scrollY]);

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavBackground("0");
    } else {
      setNavBackground(isMediumScreen ? "60px" : "120px");
    }
  }, [scrollPosition, isMediumScreen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle frist sub item
  const [
    isExursionsFromHurghadaSubMenuOpen,
    setIsExursionsFromHurghadaSubMenuOpen,
  ] = useState(false);
  const toggleExursionsSubMenu = () => {
    setIsExursionsFromHurghadaSubMenuOpen(!isExursionsFromHurghadaSubMenuOpen);
  };
  // secend sub
  const [isShoppingSubMenuOpen, setShoppingSubMenuOpen] = useState(false);

  const toggleShoppingSubMenu = () => {
    setShoppingSubMenuOpen(!isShoppingSubMenuOpen);
  };
  // Blogs sub
  const [isBlogsSubMenuOpen, setBlogsSubMenuOpen] = useState(false);

  const toggleBlogsSubMenu = () => {
    setBlogsSubMenuOpen(!isBlogsSubMenuOpen);
  };
  // Hotel sub
  const [isHotelSubMenuOpen, setHotelSubMenuOpen] = useState(false);

  const toggleHotelSubMenu = () => {
    setHotelSubMenuOpen(!isHotelSubMenuOpen);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        top: navBackground,
        transition: ".2s all ease",
        background: "background",
        color: "primary.main",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container>
            <Grid
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              item
              md={2}
            >
              <Box
                component={LocalNavLink}
                to={""}
                display={"flex"}
                flexDirection={"row"}
                marginY={1}
              >
                <img
                  src={imgPath(homeData?.siteInformation.logo)}
                  alt="logo"
                  width={"130px"}
                />
              </Box>
            </Grid>
            <Grid
              flexDirection={"row"}
              item
              md={10}
              sx={{
                display: { md: "flex", xs: "none" },
                justifyContent: "end",
              }}
            >
              <ul className="secNavbar">
                <li>
                  <Typography
                    component={LocalNavLink}
                    className={"link"}
                    sx={{
                      "&:hover": {
                        color: homeData?.SiteColor.secondaryColor || "#F19B02",
                      },
                    }}
                    to={""}
                  >
                    {homeData?.siteInformation.home}
                  </Typography>
                </li>
                <li>
                  <Typography
                    component={LocalNavLink}
                    className={"link"}
                    sx={{
                      "&:hover": {
                        color: homeData?.SiteColor.secondaryColor || "#F19B02",
                      },
                    }}
                    to={"/about"}
                  >
                    {homeData?.siteInformation.about_us}
                  </Typography>
                </li>
                {language !== "ar" && (
                  <li>
                    <Typography
                      className={"link"}
                      sx={{
                        "&:hover": {
                          color:
                            homeData?.SiteColor.secondaryColor || "#F19B02",
                        },
                      }}
                    >
                      {homeData?.siteInformation.service_us}
                    </Typography>
                    <Paper className="subMenu">
                      <MenuList>
                        {cat.reverse().map((item) => (
                          <SubMenu
                            key={item.id}
                            title={item.title}
                            link={`excursionsfromhurghada/${item.title}`}
                          />
                        ))}
                      </MenuList>
                    </Paper>
                  </li>
                )}
                {(language === "ar" || language === "en") && (
                  <>
                    <li>
                      <Typography
                        className={"link"}
                        sx={{
                          "&:hover": {
                            color:
                              homeData?.SiteColor.secondaryColor || "#F19B02",
                          },
                        }}
                      >
                        {homeData?.siteInformation.hotel_us}
                      </Typography>

                      <Paper className="subMenu">
                        <MenuList>
                          {homeData?.category_hotels.map((item, index) => (
                            <SubMenu
                              key={item.id}
                              title={item.title}
                              link={`/hotels/${item.title}`}
                            />
                          ))}
                        </MenuList>
                      </Paper>
                    </li>
                  </>
                )}

                {language !== "ar" && (
                  <li>
                    <Typography
                      className={"link"}
                      sx={{
                        "&:hover": {
                          color:
                            homeData?.SiteColor.secondaryColor || "#F19B02",
                        },
                      }}
                    >
                      {homeData?.siteInformation.explorer_us}
                    </Typography>
                    <Paper className="subMenu">
                      <MenuList>
                        {homeData?.shippings.map((item, index) => (
                          <SubMenu
                            key={item.id}
                            title={item.name}
                            link={`shopping/${item.name}`}
                          />
                        ))}
                      </MenuList>
                    </Paper>
                  </li>
                )}

                <li>
                  <Typography
                    component={LocalNavLink}
                    className={"link"}
                    sx={{
                      "&:hover": {
                        color: homeData?.SiteColor.secondaryColor || "#F19B02",
                      },
                    }}
                    to={`blog/${homeData?.blogs[0].title}`}
                  >
                    {homeData?.siteInformation.blog_us}
                  </Typography>
                  <Paper className="subMenu">
                    <MenuList>
                      {homeData?.blogs.map((item) => (
                        <SubMenu
                          key={item.id}
                          title={item.title}
                          link={`blog/${item.title}`}
                        />
                      ))}
                    </MenuList>
                  </Paper>
                </li>
                <li>
                  <Typography
                    component={LocalNavLink}
                    className={"link"}
                    sx={{
                      "&:hover": {
                        color: homeData?.SiteColor.secondaryColor || "#F19B02",
                      },
                    }}
                    to={"/contact"}
                  >
                    {homeData?.siteInformation.contact_us}
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid item md={6} sx={{ display: { md: "none", xs: "block" } }}>
            <Drawer
              anchor="top"
              open={mobileMenuOpen}
              onClose={toggleMobileMenu}
            >
              <Box
                sx={{ color: "primary.main" }}
                role="presentation"
                onKeyDown={toggleMobileMenu}
              >
                <Typography
                  component={LocalNavLink}
                  className={"link_down"}
                  to={"/"}
                >
                  <MenuItem onClick={toggleMobileMenu}>
                    {homeData?.siteInformation.home}
                  </MenuItem>
                </Typography>
                <Typography
                  component={LocalNavLink}
                  className={"link_down"}
                  to={"/about"}
                >
                  <MenuItem onClick={toggleMobileMenu}>
                    {homeData?.siteInformation.about_us}
                  </MenuItem>
                </Typography>
                {/* Frist sub item */}
                {language !== "ar" && (
                  <>
                    <MenuItem onClick={toggleExursionsSubMenu}>
                      {homeData?.siteInformation.service_us}
                      {isExursionsFromHurghadaSubMenuOpen ? (
                        <KeyboardArrowUpIcon sx={{ fontWeight: 600, ml: 2 }} />
                      ) : (
                        <KeyboardArrowDownIcon
                          sx={{ fontWeight: 600, ml: 2 }}
                        />
                      )}
                    </MenuItem>
                    {isExursionsFromHurghadaSubMenuOpen && (
                      <Box
                        sx={{
                          backgroundColor: "primary.main",
                          mx: 1,
                          borderRadius: "10px",
                        }}
                      >
                        {cat.map((item) => (
                          <Typography
                            component={LocalNavLink}
                            key={item.id}
                            onClick={() => {
                              toggleMobileMenu();
                              toggleExursionsSubMenu();
                            }}
                            to={`excursionsfromhurghada/${item.title}`}
                          >
                            <MenuItem sx={{ color: "#fff" }}>
                              {item.title}
                            </MenuItem>
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </>
                )}

                {/* sec sub item */}
                {(language === "ar" || language === "en") && (
                  <>
                    <MenuItem onClick={toggleHotelSubMenu}>
                      {homeData?.siteInformation.hotel_us}
                      {isHotelSubMenuOpen ? (
                        <KeyboardArrowUpIcon sx={{ fontWeight: 600, ml: 2 }} />
                      ) : (
                        <KeyboardArrowDownIcon
                          sx={{ fontWeight: 600, ml: 2 }}
                        />
                      )}
                    </MenuItem>
                    {isHotelSubMenuOpen && (
                      <Box
                        sx={{
                          backgroundColor: "primary.main",
                          mx: 1,
                          borderRadius: "10px",
                        }}
                      >
                        {homeData?.category_hotels.map((item) => (
                          <Typography
                            component={LocalNavLink}
                            key={item.id}
                            onClick={() => {
                              toggleMobileMenu();
                              toggleHotelSubMenu();
                            }}
                            to={`/hotels/${item.title}`}
                          >
                            <MenuItem sx={{ color: "#fff" }}>
                              {item.title}
                            </MenuItem>
                          </Typography>
                        ))}
                      </Box>
                    )}
                    {/* third sub item */}
                    {language !== "ar" && (
                      <>
                        <MenuItem onClick={toggleShoppingSubMenu}>
                          {homeData?.siteInformation.explorer_us}
                          {isShoppingSubMenuOpen ? (
                            <KeyboardArrowUpIcon
                              sx={{ fontWeight: 600, ml: 2 }}
                            />
                          ) : (
                            <KeyboardArrowDownIcon
                              sx={{ fontWeight: 600, ml: 2 }}
                            />
                          )}
                        </MenuItem>
                        {isShoppingSubMenuOpen && (
                          <Box
                            sx={{
                              backgroundColor: "primary.main",
                              mx: 1,
                              borderRadius: "10px",
                            }}
                          >
                            {homeData?.shippings.map((item) => (
                              <Typography
                                component={LocalNavLink}
                                key={item.id}
                                onClick={() => {
                                  toggleMobileMenu();
                                  toggleShoppingSubMenu();
                                }}
                                to={`shopping/${item.name}`}
                              >
                                <MenuItem sx={{ color: "#fff" }}>
                                  {item.name}
                                </MenuItem>
                              </Typography>
                            ))}
                          </Box>
                        )}
                      </>
                    )}
                  </>
                )}

                {/* Blogs */}
                <MenuItem onClick={toggleBlogsSubMenu}>
                  {homeData?.siteInformation.blog_us}
                  {isBlogsSubMenuOpen ? (
                    <KeyboardArrowUpIcon sx={{ fontWeight: 600, ml: 2 }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ fontWeight: 600, ml: 2 }} />
                  )}
                </MenuItem>
                {isBlogsSubMenuOpen && (
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      mx: 1,
                      borderRadius: "10px",
                    }}
                  >
                    {homeData?.blogs.map((item) => (
                      <Typography
                        component={LocalNavLink}
                        key={item.id}
                        onClick={() => {
                          toggleMobileMenu();
                          toggleBlogsSubMenu();
                        }}
                        to={`blog/${item.title}`}
                      >
                        <MenuItem sx={{ color: "#fff" }}>{item.title}</MenuItem>
                      </Typography>
                    ))}
                  </Box>
                )}
                {/* End */}

                <Typography
                  component={LocalNavLink}
                  className={"link_down"}
                  to={"/contact"}
                >
                  <MenuItem onClick={toggleMobileMenu}>
                    {homeData?.siteInformation.contact_us}
                  </MenuItem>
                </Typography>
              </Box>
            </Drawer>
            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open mobile menu"
              edge="start"
              onClick={toggleMobileMenu}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

type PropsType = {
  title: string;
  link: string;
};

export default SecondNavbar;
