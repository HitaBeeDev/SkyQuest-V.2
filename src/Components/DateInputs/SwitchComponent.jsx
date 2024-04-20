import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { useFlights } from "../../ContextAPI/FlightContext";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

function SwitchComponent() {
  const { switchOn, handleSwitchChange } = useFlights();

  return (
    <div>
      <Switch
        {...label}
        defaultChecked={switchOn}
        color="secondary"
        onChange={handleSwitchChange}
      />
    </div>
  );
}

export default SwitchComponent;
