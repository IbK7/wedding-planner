import React from "react";
import { Button, makeStyles, Box, AppBar, Toolbar, Typography, Link } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    grow:{
        flexGrow: 1,
    },
    appBar:{
        zIndex: theme.zIndex.drawer + 1,
        background: "#D7A7AA",
        height: "10vh",
        width: "100%",
    },
    appBarText:{
        color: "white",
        margin: theme.spacing(1)
    },
    logo:{
        height: '8vh'
    },
    sectionDesktop:{
        display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    },
    button:{
        margin: theme.spacing(1),
        backgroundColor: "#8B5B6E",
        color: 'white',
        // '&:hover':{
        //     backgroundColor: "#8B5B6E",
        // }
    }
}));

export default function Header(){
    const classes = useStyles();

    return (
        <div className = {classes.grow}>
            <AppBar position = "fixed" className = {classes.appBar}>
                <Toolbar>
                    {/* For logo */}
                    {/* <img src = {Logo} className ={classes.logo} /> */}
                    <Link href = '/landing'>
                        <Typography 
                        variant = "h4"
                        style ={{fontFamily: 'DancingScript', color: 'black'}}>
                            My Wedding Planner
                        </Typography>
                    </Link>
                    <div className = {classes.grow} />
                    <div className = {classes.sectionDesktop}>
                        
                        <Box
                        style={{ width: "100%" }}
                        display="flex"
                        flexDirection="row"
                        p={1}>
                            <Box className = {classes.appBarText}>    
                                <Typography variant = "body1" style = {{marginTop: '5%'}} >
                                    <Link href = "#" style = {{color:"black",}}>
                                        Wedding Suppliers
                                    </Link>
                                </Typography>
                            </Box>
                            <Box className = {classes.appBarText}>    
                                <Typography variant = "body1" style = {{marginTop: '5%'}}>
                                    <Link href = "#" style = {{color:"black"}}>
                                        Wedding Venues
                                    </Link>
                                </Typography>
                            </Box>
                            <Box className = {classes.appBarText}>    
                                <Typography variant = "body1" style = {{marginTop: '5%'}}>
                                    <Link href = "#" style = {{color:"black"}}>
                                        Planning Tools 
                                    </Link>
                                </Typography>
                            </Box>
                            <Box>
                                <Button className = {classes.button} href = "/login">
                                    Login
                                </Button>
                            </Box>
                            <Box>
                                <Button className = {classes.button} href = "/signup">
                                    Signup
                                </Button>
                            </Box>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
