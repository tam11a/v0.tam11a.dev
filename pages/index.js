import { Box, Chip, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { BsFillCircleFill } from 'react-icons/bs';
import { FiGithub, FiDribbble } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageContainer from "../src/components/PageContainer";
import ServiceCard from "../src/components/ServiceCard";
import makeURL from "../src/utilities/makeURL";
import theme from "../styles/theme";

const Home = ({ data }) => {
  return (
    <>
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
            Hi! I&#39;m{" "}
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
              href={"https://dribbble.com/tam11a"}
            >
              <FiDribbble />
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
        <Grid container spacing={1} data-aos="fade-up">
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
                "An Illustrator, Who creates narrative illustrations through digital tools. This maybe a creative solution for you with Adobe Photoshop, Adobe Illustrator or Clip Studio."
              }
              // toUrl={"hello"}
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
              justifyContent: {
                xs: "center",
                sm: "flex-start",
                md: "center",
              },
            }}
          >
            <ServiceCard
              imgUrl={"/svg/ui-ux.svg"}
              imgSize={"90px"}
              title={"UI/UX Design"}
              desc={
                "An Attractive UI/UX Designer for Your Android & IOS Application, Web Application or NFT Portfolio Website Design. This solution is provided with Figma from the Designer."
              }
              // toUrl={"hello"}
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
              title={"Development"}
              desc={
                "A Developer, Who can support with Web Based Software Development in MERN Stack, API Development on MVC Pattern for NodeJS & ExpressJS or Flask for Python."
              }
              // toUrl={"hello"}
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
              justifyContent: {
                xs: "center",
                sm: "flex-start",
                md: "center",
              },
            }}
          >
            <ServiceCard
              imgUrl={"/svg/iot.svg"}
              imgSize={"90px"}
              title={"IOT"}
              desc={
                "An IOT Programmer, Who can program an IOT Device with Arduino C and PyFirmata. Moreover, Supports with Sensor Library, Transfer Data with API or Socket to Server."
              }
              // toUrl={"hello"}
            />
          </Grid>
        </Grid>
        <Box display={'flex'} flexDirection={'column'} my={2} px={2} sx={{marginTop: 6, alignItems: 'center', justifyContent: 'center'}}>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} my={4}>
            <Typography variant="h4">Skills</Typography> 
              {/* <Typography variant="subtitle1" sx={{color: 'primary.dark'}}>Learning How to learn is life's most important skill.</Typography>  */}
              <Divider sx={{
                marginTop: 2,
                '&::before':{
                  minWidth: '10vw',
                  borderTopColor: '#a3a3a3'
                },
                '&::after':{
                  minWidth: '10vw',
                  borderTopColor: '#a3a3a3'
                }
              }}
              
              >
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                  <BsFillCircleFill style={{
                    color: theme.palette.tarnary.main,
                    fontSize: '0.7rem'
                  }}/>
                  <Typography variant="subtitle1" sx={{color: 'tarnary.main'}}> Beginner</Typography> 
                  <BsFillCircleFill style={{
                    color: theme.palette.secondary.main,
                    fontSize: '0.7rem'
                  }}/>
                  <Typography variant="subtitle1" sx={{color: 'secondary.main'}}>Intermediate</Typography> 
                  <BsFillCircleFill style={{
                    color: theme.palette.primary.light,
                    fontSize: '0.7rem'
                  }}/>
                  <Typography variant="subtitle1" sx={{color: 'primary.light'}}>Expert</Typography> 
                </Stack>
              </Divider>
          </Box>
          <Stack direction={'row'} spacing={1} rowGap={1} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} maxWidth={'700px'}>
            {
              data.skills?.map((skill, i) => 
              <Chip label={skill.label} color={skill.color} key={i}/>
              )
            }
          </Stack>
        </Box>
      </PageContainer>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(makeURL("/api/hello"));
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default React.memo(Home);
