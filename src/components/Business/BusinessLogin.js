import React from 'react';
import { makeStyles, Button, Typography, TextField } from '@material-ui/core'
import Backkground from '../../assets/Images/business.jpg'
import {Link} from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    backgoundImage: {
        width: "100vw",
        height: "100vh",
        position: "relative",
        top: "0%",
        left: "0%",
        zIndex: "0",
        opacity: '0.75',
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: "#8B5B6E",
        color: 'white',
    },
    loginButtons: {
        color: 'white',
        width: '100%',
        padding: theme.spacing(1.5),
    },
    loginForm: {
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

export default function BusinessLogin() {
    const classes = useStyle();

    return (
        <div style={{ position: 'fixed' }}>

            <div style={{ width: "100%", position: 'absolute', right: '0', zIndex: '1' }}>
                <Link to='/'>
                    <Typography
                        variant="h4"
                        style={{ fontFamily: 'DancingScript', color: 'black', marginTop: '1%', marginLeft: '1%' }}>
                        My Wedding Planner
                    </Typography>
                </Link>
                <div align="right" style={{ marginTop: "-2.75%" }}>
                    <Link to = '/businesssignup'>
                        <Button className={classes.button}>
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </div>

            <div align="center" className={classes.loginForm} >
                <Typography variant="h6" style={{ marginBottom: "2%", fontWeight: 'bold', fontFamily: 'DancingScript' }}>
                    Log in to Your Account
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder="Email Address"
                    className={classes.textField}
                />
                <TextField
                    variant="outlined"
                    placeholder="Password"
                    className={classes.textField}
                />
                <Link href="">
                    <Typography variant="body1" style={{ marginBottom: '0%', color: '#95A7B6' }} align="right">
                        Forgot Password?
                    </Typography>
                </Link>
                <Button className={classes.loginButtons} style={{ width: "100%", backgroundColor: "#8B5B6E", }}>
                    Log In
                </Button>

            </div>
            <img src={Backkground} className={classes.backgoundImage} alt=""></img>

        </div>
    )
}