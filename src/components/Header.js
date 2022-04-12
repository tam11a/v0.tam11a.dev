import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
// import theme from "./../../styles/theme";

import { MdClose, MdMenu } from "react-icons/md";
import PageContainer from "./PageContainer";
import { useRouter } from "next/router";


const Header = () => {
  
  const router = useRouter();

  const [drawer, setDrawer] = React.useState(false);
  const handleDrawer = (event, toLink) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(!drawer);
    goTo(toLink);
  };

  const goTo = (toLink) => {
    if (toLink && toLink !== 'backdropClick') router.push(toLink);
  };

  const tabStyle = {
    "&.MuiTab-root": {
      color: "secondary.main",
      fontSize: "1em",
    },
  };

  return (
    <AppBar sx={{ background: `transparent` }} elevation={0} position="static">
      <PageContainer>
        <Toolbar>
          <Typography variant="agency" onClick={() => goTo("/")}>
            tam
            <Typography
              variant={"span"}
              sx={{ fontSize: "0.62em", color: "primary.main" }}
            >
              .11a
            </Typography>
          </Typography>
          <Box flexGrow={1} />
          <Hidden mdDown>
            <Tabs
              value={
                ["/", "/portfolio", "/blog"].includes(router.pathname)
                  ? router.pathname
                  : "/404"
              }
              sx={{
                mr: 3,
              }}
            >
              <Tab
                sx={tabStyle}
                label={"about"}
                value={"/"}
                onClick={() => goTo("/")}
                disableRipple
              />
              <Tab
                sx={tabStyle}
                label={"Portfolio"}
                value={"/portfolio"}
                onClick={() => goTo("/portfolio")}
                disableRipple
              />
              <Tab
                sx={tabStyle}
                label={"blog"}
                value={"/blog"}
                onClick={() => goTo("/blog")}
                disableRipple
              />
            </Tabs>
            <Button variant={"outlined"}>Contact</Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton color={"secondary"} onClick={handleDrawer}>
              <MdMenu />
            </IconButton>
            <SwipeableDrawer
              anchor={"right"}
              open={drawer}
              onClose={handleDrawer}
              onOpen={handleDrawer}
              // hideBackdrop
              // onBackdropClick={e => handleDrawer(e)}
            >
              <Box
                role={"presentation"}
                sx={{
                  width: "90vw",
                  maxWidth: "280px",
                }}
              >
                <List>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      my: 3,
                    }}
                  >
                    <IconButton color={"primary"} onClick={handleDrawer}>
                      <MdClose />
                    </IconButton>
                  </ListItem>
                  <ListItemButton
                    onClick={(event) => handleDrawer(event, "/")}
                    disabled={router.pathname === "/"}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        sx: {
                          color: "secondary.main",
                          textAlign: "center",
                          textTransform: "uppercase",
                          fontSize: "1em",
                        },
                      }}
                      primary={"About"}
                    />
                  </ListItemButton>

                  <ListItemButton
                    onClick={(event) => handleDrawer(event, "/portfolio")}
                    disabled={router.pathname === "/portfolio"}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        sx: {
                          color: "secondary.main",
                          textAlign: "center",
                          textTransform: "uppercase",
                          fontSize: "1em",
                        },
                      }}
                      primary={"portfolio"}
                    />
                  </ListItemButton>
                  <ListItemButton
                    onClick={(event) => handleDrawer(event, "/blog")}
                    disabled={router.pathname === "/blog"}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        sx: {
                          color: "secondary.main",
                          textAlign: "center",
                          textTransform: "uppercase",
                          fontSize: "1em",
                        },
                      }}
                      primary={"blog"}
                    />
                  </ListItemButton>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      my: 2,
                    }}
                  >
                    <Button variant="outlined">contact</Button>
                  </ListItem>
                </List>
              </Box>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </PageContainer>
    </AppBar>
  );
};

export default React.memo(Header);
