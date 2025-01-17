import { Button, Container, Divider, Grid2 } from "@mui/material";

import ChatIcon from "@mui/icons-material/Chat";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CustomTextField from "../commons/CustomTextField/CustomTextField";

const Footer = () => {
  return (
    <div className="bg-[#17161A]">
      <Container maxWidth="xl" className="w-full p-2" component="div">
        <Grid2
          container
          spacing={1}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Grid2 size={4}>
            <div className="text-[white] m-0 pb-5 uppercase font-bold text-xl">
              Navigation
            </div>
            <Grid2
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid2 size={4}>
                <span>Home</span>
              </Grid2>
              <Grid2 size={4}>
                <span>Whitepaper</span>
              </Grid2>
              <Grid2 size={4}>
                <span>FAQs</span>
              </Grid2>
              <Grid2 size={4}>
                <span>About us</span>
              </Grid2>
              <Grid2 size={4}>
                <span>Marketplace</span>
              </Grid2>
              <Grid2 size={4}>
                <span>News</span>
              </Grid2>
              <Grid2 size={4}>
                <span>Our teams</span>
              </Grid2>
              <Grid2 size={4}>
                <span>Roadmap</span>
              </Grid2>
              <Grid2 size={4}>
                <span>Community</span>
              </Grid2>
            </Grid2>
          </Grid2>

          <Grid2 size={4}>
            <div className="text-[white] m-0 pb-5 uppercase font-bold text-xl">
              Contact Us
            </div>

            <Grid2 container spacing={2}>
              <Grid2 size={12}>
                <LocalPhoneIcon />
                <span className="ml-4">012345678910</span>
              </Grid2>
              <Grid2 size={12}>
                <ChatIcon />
                <span className="ml-4">tymex-talent@tyme.com</span>
              </Grid2>
            </Grid2>
          </Grid2>

          <Grid2 size={4}>
            <div className="text-[white] m-0 pb-5 uppercase font-bold text-xl">
              Subcribe to receive our latest update
            </div>

            <Grid2 container spacing={2}>
              <Grid2 size={10}>
                <CustomTextField label="Your email address" />
              </Grid2>
              <Grid2 size={2}>
                <Button classes="">Subcribe</Button>
              </Grid2>
            </Grid2>
          </Grid2>

          <Divider
            sx={{ borderColor: "#3A3841", width: "100%", margin: "2rem" }}
          />

          <Grid2 size={12}>
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <span>©2023 Tyme - Edit. All Rights reserved.</span>
              </Grid2>
              <Grid2 size={6} className="flex items-center justify-end">
                <span className="m-3">Security</span>
                <span className="m-3">Legal</span>
                <span className="m-3">Privacy</span>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Footer;
