import React from 'react'
import {makeStyles, Button, Typography, TextField, Link} from '@material-ui/core'
import Background from '../../../assets/Images/signupbg.jpg'
import Facebook from '../../../assets/Icons/facebookLogo.jpg'
import Google from '../../../assets/Icons/google-icon.svg'


const useStyle = makeStyles((theme) => ({
    backgoundImage: {
        width: "100vw",
        height: "100vh",
        position: "relative",
        top: "0%",
        left: "0%",
        zIndex: "0",
        opacity: '0.90',
        //background: 'rgba(0,0,0,0.5)'
    },
    button:{
        margin: theme.spacing(1),
        backgroundColor: "#8B5B6E",
        color: 'white',
        // '&:hover':{
        //     backgroundColor: "#8B5B6E",
        // }
    },
    signupForm:{
        padding: theme.spacing(2),
        width: '32%', 
        backgroundColor: 'white',
        borderRadius: "3%",
        position: 'absolute',
        top: '23%',
        left: '32%',
        zIndex: '1'
    },
    buttonIcons: {
        height: "36px",
        position: "absolute",
        left: "10px",
    },
    textField: {
        width: "100%",
        marginBottom: '2%',
    },
    signUpButtons: {
        color: 'white', 
        width: '100%',
        padding: theme.spacing(1.5),
    },
    header: {
        width:'100%',
        //height: '10vh',
        backgroundColor: '#95A7B6'
    }
}));
export default function Signup(){
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
                    <Button className = {classes.button} href ="/login">
                        Log In
                    </Button>
                </div>
            </div>
            <div align = "center" className={classes.signupForm} >
                <Typography 
                variant = "h6"
                style ={{marginBottom: "2%", fontWeight: 'bold', fontFamily: 'DancingScript'}}>
                    Sign up and start planning
                </Typography>
                <TextField 
                variant = "outlined" 
                className = {classes.textField}
                placeholder = "Username"
                />
                <TextField 
                variant = "outlined" 
                className = {classes.textField}
                placeholder = "Email Address"
                /><TextField 
                variant = "outlined" 
                className = {classes.textField}
                placeholder = "Password"
                />
                <Button className = {classes.signUpButtons} style = {{width: "100%", backgroundColor:"#8B5B6E", }}>
                   Sign Up
                </Button>
                <hr style = {{marginTop: '5%', marginBottom: '5%'}}></hr>
                <Button 
                className = {classes.signUpButtons} 
                style = {{backgroundColor: '#3B5998', marginBottom: "2%",}}
                >
                    <img src = {Facebook} className = {classes.buttonIcons}></img>
                    Continue with Facebook
                </Button>
                <Button 
                variant = "outlined"
                className = {classes.signUpButtons} 
                style = {{backgroundColor: 'white', borderColor: 'red', color: 'black' }}>
                    <img src = {Google} className = {classes.buttonIcons}></img>
                    Continue with Google
                </Button>
            </div>
            <img src = {Background} className = {classes.backgoundImage}></img>
        </div>
    );
}