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
                <Link to="/suppliers">
                  <Typography variant="body1" style={{ marginTop: "5%",color: "black" }}>
                    Wedding Suppliers
                  </Typography>
                </Link>
              </Box>
              <Box className={classes.appBarText}>
                <Link to="/venues">
                  <Typography variant="body1" style={{ marginTop: "5%",color: "black" }}>
                    Wedding Venues
                  </Typography>
                </Link>
              </Box>
              <Box className={classes.appBarText}>
                <Link to="/planning" style={{  }}>
                  <Typography variant="body1" style={{ marginTop: "5%",color: "black" }}>
                    Planning Tools    
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
                    <Link to = '/login'>
                      <Button className={classes.button}>
                        Login
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to ="/signup">
                      <Button className={classes.button}>
                        Signup
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <Grid item>
                  
                <Link to="/businesssignup">
                  <Typography
                    variant="body2"
                    style={{ marginTop: "0%", marginLeft: "20%", color: "black" }}
                  >
                      Are you a business?
                    
                  </Typography>
                  </Link>
                </Grid>
              </Grid>
              {/* <Box>
>>>>>>> origin/frontend-arwah
                                <Button className = {classes.button} to = "/login">
                                    Login
                                </Button>
                            </Box>
                            <Box>
                                <Button className = {classes.button} to = "/signup">
                                    Signup
                                </Button>
                            </Box> */}

              {/* <Box className = {classes.appBarText}>     */}
              {/* <Typography variant = "body2" style = {{marginTop: '7%', marginLeft:'-20%'}}>
                                    <Link to = "#" style = {{color:"black"}}>
                                       Are you a business? 
                                    </Link>
                                </Typography> */}

              {/* </Box> */}
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )

}
