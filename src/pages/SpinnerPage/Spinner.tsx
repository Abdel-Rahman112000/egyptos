import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#308fe8",
  },
}));
function Spinner(props: CircularProgressProps) {
  return (
    <Stack
      sx={{
        height: "100vh",
        position: "relative",
        backgroundColor: "primary.main",
      }}
    >
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#fff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateY(100%),translateX(50%)",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Stack>
  );
}

export default Spinner;
