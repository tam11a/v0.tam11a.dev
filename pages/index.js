import { Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageContainer from "../src/components/PageContainer";
import ServiceCard from "../src/components/ServiceCard";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const Home = ({ data }) => {
  console.log(data);

  return (
    <>
      <Header />
      <PageContainer>
        <Stack
          direction={"column"}
          alignItems={"center"}
          minHeight={"80vh"}
          justifyContent={"center"}
          rowGap={2}
        >
          {/* <Paper
            sx={{
              width: "200px",
              height: "200px",
              bgcolor: "primary.main",
            }}
          /> */}
          <Typography variant="h3">
            Hi! I'm{" "}
            <Typography variant={"span"} sx={{ color: "primary.main" }}>
              {data.name}
            </Typography>
            .
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
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-end", md: "center" },
            }}
          >
            <ServiceCard
              imgUrl={"/svg/illustration.svg"}
              imgSize={"90px"}
              title={"Illustration"}
              desc={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aliquam illum magnam a impedit explicabo alias libero fuga quasi ipsum?"
              }
              toUrl={"hello"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start", md: "center" },
            }}
          >
            <ServiceCard
              imgUrl={"/svg/ui-ux.svg"}
              imgSize={"90px"}
              title={"UI/UX Design"}
              desc={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aliquam illum magnam a impedit explicabo alias libero fuga quasi ipsum?"
              }
              toUrl={"hello"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-end", md: "center" },
            }}
          >
            <ServiceCard
              imgUrl={"/svg/programming.svg"}
              imgSize={"90px"}
              title={"Web Development"}
              desc={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aliquam illum magnam a impedit explicabo alias libero fuga quasi ipsum?"
              }
              toUrl={"hello"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start", md: "center" },
            }}
          >
            <ServiceCard
              imgUrl={"/svg/iot.svg"}
              imgSize={"90px"}
              title={"IOT"}
              desc={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aliquam illum magnam a impedit explicabo alias libero fuga quasi ipsum?"
              }
              toUrl={"hello"}
            />
          </Grid>
        </Grid>
      </PageContainer>
      <Footer />
    </>
  );
};

// This gets called on every request
export async function getStaticProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default React.memo(Home);
