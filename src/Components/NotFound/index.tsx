import { Stack, Typography } from "@mui/material";
import React from "react";

function NotFound() {
  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 1px #000",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "warning.main", fontWeight: "700" }}
      >
        Not Found
      </Typography>
    </Stack>
  );
}

export default NotFound;
