import { Button, Container, Grid2, IconButton } from "@mui/material";

import styles from "./style.module.scss";
import MenuSelect from "../commons/MenuSelect/MenuSelect";

const Header = () => {
  return (
    <div className="bg-zinc-900/[0.6]">
      <Container
        maxWidth="xl"
        className="w-full flex items-center p-2"
        component="div"
      >
        <div className="w-4/5 inline-block">
          <Grid2 container spacing={2}>
            <Grid2 size={2}>
              <span className={styles["navigate-menu-text"]}>Home</span>
            </Grid2>
            <Grid2 size={2}>
              <span className={styles["navigate-menu-text"]}>About us</span>
            </Grid2>
            <Grid2 size={2}>
              <span className={styles["navigate-menu-text"]}>Our teams</span>
            </Grid2>
            <Grid2 size={2}>
              <span className={styles["navigate-menu-text"]}>Marketplace</span>
            </Grid2>
            <Grid2 size={2}>
              <span className={styles["navigate-menu-text"]}>Roadmap</span>
            </Grid2>
            <Grid2 size={2}>
              <span className={styles["navigate-menu-text"]}>Whitepaper</span>
            </Grid2>
          </Grid2>
        </div>
        <div className="w-1/5 inline-block">
          <Grid2
            container
            spacing={4}
            sx={{
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Grid2 size={6}>
              <Button variant="text" className={styles["cw-btn"]} color="info">
                Connect Wallet
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <MenuSelect />
            </Grid2>
          </Grid2>
        </div>
      </Container>
    </div>
  );
};

export default Header;
