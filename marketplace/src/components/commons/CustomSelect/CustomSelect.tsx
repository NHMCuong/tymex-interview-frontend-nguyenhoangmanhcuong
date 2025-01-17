import { useState } from "react";
import { InputLabel, MenuItem, Select, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface CustomSelectProps {
  label: string;
}

const CustomSelect = (props: CustomSelectProps) => {
  const { label } = props;
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };

  const StyledSelect = styled(Select)({
    border: "1px solid white",
    color: "white",

    "&.Mui-focused fieldset": {
      border: "none",
      color: "white",
    },
  });
  return (
    <>
      <InputLabel sx={{ color: "#89888B" }}>{label}</InputLabel>
      <StyledSelect
        fullWidth
        value={age}
        label="Tier"
        onChange={handleChange}
        IconComponent={() => <KeyboardArrowDownIcon />}
      >
        <MenuItem value={10}>All</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </StyledSelect>
    </>
  );
};

export default CustomSelect;
