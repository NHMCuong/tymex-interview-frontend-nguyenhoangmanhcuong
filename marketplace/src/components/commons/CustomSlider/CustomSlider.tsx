import { useState } from "react";
import { InputLabel, Slider } from "@mui/material";

interface CustomSilderProps {
  label: string;
}

const CustomSilder = (props: CustomSilderProps) => {
  const { label } = props;
  const [value, setValue] = useState<number[]>([0, 0]);

  const handleChange = (_: Event, newValue: number | number[]) => {
    console.log("newValue", newValue);
    setValue(newValue as number[]);
  };
  return (
    <>
      <InputLabel sx={{ color: "#89888B" }}>{label}</InputLabel>
      <Slider
        disableSwap
        color="secondary"
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={200}
        min={0}
      />

      <div className="flex justify-between items-center">
        <span style={{ color: "#89888B" }}>{value[0]} ETH</span>
        <span style={{ color: "#89888B" }}>{value[1]} ETH</span>
      </div>
    </>
  );
};

export default CustomSilder;
