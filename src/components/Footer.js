import {
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiInstagram, FiGithub } from "react-icons/fi";
import { RiChatSmile3Line } from "react-icons/ri";
import PageContainer from "./PageContainer";

const Footer = () => {
  return (
    <Paper sx={{ mt: "2rem", py: "2rem" }}>
      <PageContainer>
        <Grid
          container
          spacing={3}
          width={{ xs: "96vw", sm: "98vw" }}
          maxWidth={"1300px"}
          mx={"auto"}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack sx={{ maxWidth: "380px" }} spacing={2}>
              <Stack>
                <Typography variant="h5">Got a project?</Typography>
                <Typography variant="h5">Let&#39;s talk.</Typography>
              </Stack>
              <Typography variant="normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                doloremque voluptas deleniti!
              </Typography>
              <Button
                endIcon={<FiArrowRight />}
                sx={{
                  textTransform: "none",
                  fontSize: "1.1em",
                  justifyContent: "space-between",
                  pl: 0,
                  "&:hover": {
                    background: "transparent",
                  },
                }}
                disableRipple
              >
                ibrahimsadiktamim@gmail.com
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack sx={{ maxWidth: "380px" }} spacing={2}>
              <Typography variant="normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae eum perspiciatis a sapiente cumque quisquam
                doloremque fuga vel suscipit, culpa sequi, corporis nesciunt
                tenetur explicabo nostrum. Debitis eum ratione excepturi!
              </Typography>
              <Typography variant="h6">
                Let&#39;s Get a{" "}
                <Typography variant={"span"} sx={{ color: "primary.main" }}>
                  Creative Solution
                </Typography>{" "}
                <br />
                for{" "}
                <Typography variant={"span"} sx={{ color: "primary.main" }}>
                  You...!!
                </Typography>
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="column" alignItems="center" spacing={1.5}>
              <IconButton color={"primary"} sx={{ fontSize: "4rem" }}>
                <RiChatSmile3Line />
              </IconButton>
              <Typography variant={"h6"}>
                Thanks for Scrolling. That&#39;s All Folks.
              </Typography>
              <Stack direction={"row"}>
                <IconButton
                  color={"primary"}
                  component={"a"}
                  target="_blank"
                  href={"https://api.whatsapp.com/send/?phone=8801521579148"}
                >
                  <FaWhatsapp />
                </IconButton>
                <IconButton
                  color={"primary"}
                  component={"a"}
                  target="_blank"
                  href={"https://www.instagram.com/tam11a"}
                >
                  <FiInstagram />
                </IconButton>
                <IconButton
                  color={"primary"}
                  component={"a"}
                  target="_blank"
                  href={"https://www.github.com/tam11a"}
                >
                  <FiGithub />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </PageContainer>
    </Paper>
  );
};

export default Footer;
