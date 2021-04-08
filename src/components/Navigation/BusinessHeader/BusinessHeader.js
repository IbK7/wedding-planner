import React from "react";
import {
  Button,
  makeStyles,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";
import{Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#D7A7AA",
    height: "10vh",
    width: "100%",
  },
  appBarText: {
    color: "white",
    margin: theme.spacing(1),
  },
  logo: {
    height: "8vh",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#8B5B6E",
    color: "white",
    // '&:hover':{
    //     backgroundColor: "#8B5B6E",
    // }
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* For logo */}
          {/* <img src = {Logo} className ={classes.logo} /> */}
          <Link to="/">
            <Typography
              variant="h4"
              style={{ fontFamily: "DancingScript", color: "black" }}
            >
              My Wedding Planner
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Box
              style={{ width: "100%", marginLeft: "20%", paddingTop: "5%" }}
              display="flex"
              flexDirection="row"
              p={1}
            >
                <Box className={classes.appBarText}>
                <Link to="/businesshome">
                  <Typography variant="body1" style={{ marginTop: "5%",color: "black" }}>
                    Profile
                  </Typography>
                </Link>
              </Box>
              <Box className={classes.appBarText}>
                <Link to="/invoices">
                  <Typography variant="body1" style={{ marginTop: "5%",color: "black" }}>
                    Your Invoices
                  </Typography>
                </Link>
              </Box>
              <Grid container direction="column">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Link to = '/'>
                      <Button className={classes.button}>
                        Logout
                      </Button>
                    </Link>
                  </Grid>

                </Grid>
              </Grid>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )

}
