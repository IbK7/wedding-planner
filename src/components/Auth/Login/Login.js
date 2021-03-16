import React from 'react';
import {makeStyles, Button, Typography, TextField, Link} from '@material-ui/core'
import Facebook from '../../../assets/Icons/facebookLogo.jpg'
import Google from '../../../assets/Icons/google-icon.svg'
import Backkground from '../../../assets/Images/loginng1.jpg'

const useStyle = makeStyles((theme)=> ({
    backgoundImage: {
        width: "100%",
        height: "100vh",
        position: "relative",
        top: "0%",
        left: "0%",
        zIndex: "0",
        opacity: '0.75',
      },
    button:{
        margin: theme.spacing(1),
        backgroundColor: "#8B5B6E",
        color: 'white',
    },
    loginButtons: {
        color: 'white', 
        width: '100%',
        padding: theme.spacing(1.5),
    },
    loginForm:{
        padding: theme.spacing(2),
        width: '32%', 
        backgroundColor: 'white',
        borderRadius: "3%",
        position: 'absolute',
        top: '23%',
        left: '32%',
        zIndex: '1'
    },
    textField: {
        width: "100%",
        marginBottom: '2%',
    },
    buttonIcons: {
        height: "36px",
        position: "absolute",
        left: "10px",
    }
}));

export default function Login(){
    const classes = useStyle();
    
    return(
        <div style = {{position: 'fixed'}}>
            
            <div style = {{width: "100%", position: 'absolute', right: '0', zIndex: '1'}}>
                <Link href = '/'>
                    <Typography 
                        variant = "h4"
                        style ={{fontFamily: 'DancingScript', color: 'black', marginTop: '1%', marginLeft: '1%'}}>
                            My Wedding Planner
                    </Typography>
                </Link>
                <div align = "right" style ={{marginTop: "-2.75%"}}>
                    <Button className = {classes.button} href ="/signup">
                        Sign Up
                    </Button>
                </div>
            </div>
            
            <div align = "center" className={classes.loginForm} >
                <Typography variant = "h6" style = {{marginBottom: "2%", fontWeight: 'bold', fontFamily: 'DancingScript'}}>
                    Log in to Your Account
                </Typography>
                <TextField
                    variant = "outlined"
                    placeholder = "Email Address"
                    className = {classes.textField}
                />
                <TextField
                    variant = "outlined"
                    placeholder = "Password"
                    className = {classes.textField}
                />
                <Link href = "">
                    <Typography variant = "body1" style ={{marginBottom: '0%', color: '#95A7B6'}} align = "right">
                        Forgot Password?
                    </Typography>
                </Link>
                <Button className = {classes.loginButtons} style = {{width: "100%", backgroundColor:"#8B5B6E", }}>
                    Log In
                </Button>
                <hr style = {{marginTop: '5%', marginBottom: '5%'}}></hr>
                <Button 
                className = {classes.loginButtons} 
                style = {{backgroundColor: '#3B5998', marginBottom: "2%",}}
                >
                    <img src = {Facebook} className = {classes.buttonIcons}></img>
                    Login with Facebook
                </Button>
                <Button 
                variant = "outlined"
                className = {classes.loginButtons} 
                style = {{backgroundColor: 'white', borderColor: 'red', color: 'black' }}>
                    <img src = {Google} className = {classes.buttonIcons}></img>
                    Login with Google
                </Button>
            </div>
            <img src = {Backkground} className ={classes.backgoundImage}></img>
        </div>
    )
}