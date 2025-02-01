import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import CallIcon from "@mui/icons-material/Call";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import { homeContext } from "pages/HomeContext";
import axios from "axios";
import { api } from "methods/api";

function FixedIcon() {
  const { homeData } = useContext(homeContext);
  const actions = [
    {
      icon: <WhatsAppIcon sx={{ color: "#fff", fontSize: "40px" }} />,
      name: "WhatsApp",
      bgcolor: "#25d366",
      link: `${homeData?.contactus.whatsup}`,
    },
    {
      icon: <TelegramIcon sx={{ color: "#fff", fontSize: "40px" }} />,
      name: "Telegram",
      bgcolor: "#279dd8",
      link: `${homeData?.contactus.telegram}`,
    },
    {
      icon: (
        <SettingsPhoneIcon
          sx={{
            color: "#784F99",
            fontSize: "40px",
            background: "#fff",
            borderRadius: "25px",
          }}
        />
      ),
      name: "Viber",
      bgcolor: "#784F99",
      link: `${homeData?.contactus.viber}`,
    },
    {
      icon: <CallIcon sx={{ color: "#fff", fontSize: "40px" }} />,
      name: "Phone",
      bgcolor: "green",
      link: `${homeData?.contactus.phone}`,
    },
  ];
  function bookTravel(name: string) {
    axios
      .post(api(`book-count`), { title: name })
      .then((res) => {})
      .catch((err) => {});
  }
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: "5px",
        right: "10px",
        zIndex: "10000000000000000000000",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 10, right: 0 }}
        icon={
          <SpeedDialIcon
            icon={<MarkUnreadChatAltIcon />}
            openIcon={<CloseIcon />}
          />
        }
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              bookTravel(action.name);
              window.open(`${action.link}`, "_blank");
            }}
            sx={{
              width: "60px",
              height: "60px",
              bgcolor: action.bgcolor,
              "&:hover": {
                background: action.bgcolor,
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default FixedIcon;
