import App from "App";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotVaild() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/en");
  }, []);
  return (
    <>
      <App />
    </>
  );
}

export default NotVaild;
