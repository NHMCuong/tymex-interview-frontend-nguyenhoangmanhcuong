import React from "react";

import { Button, Grid2, IconButton } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="">
        <Grid2 container spacing={2}>
          <Grid2 size={2}>Home</Grid2>
          <Grid2 size={2}>About us</Grid2>
          <Grid2 size={2}>Our teams</Grid2>
          <Grid2 size={2}>Marketplace</Grid2>
          <Grid2 size={2}>Roadmap</Grid2>
          <Grid2 size={2}>White paper</Grid2>
        </Grid2>
      </div>

      <div>
        <Button>Connect Wallet</Button>
        <IconButton></IconButton>
      </div>
    </>
  );
};

export default Header;
