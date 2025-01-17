import { useEffect } from "react";

import { Grid2 } from "@mui/material";

import CustomTextField from "../commons/CustomTextField/CustomTextField";
import CustomSelect from "../commons/CustomSelect/CustomSelect";
import CustomSilder from "../commons/CustomSlider/CustomSlider";

const ProductFilters = () => {
  useEffect(() => {}, []);

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <CustomTextField label="Quick search" />
      </Grid2>
      <Grid2 size={12}>
        <CustomSilder label="Price" />
      </Grid2>
      <Grid2 size={12}>
        <CustomSelect label="Tier" />
      </Grid2>
      <Grid2 size={12}>
        <CustomSelect label="Theme" />
      </Grid2>
      <Grid2 size={12}>
        <CustomSelect label="Time" />
      </Grid2>
      <Grid2 size={12}>
        <CustomSelect label="Price" />
      </Grid2>
      <Grid2 size={12}>
        <div></div>
      </Grid2>
    </Grid2>
  );
};

export default ProductFilters;
