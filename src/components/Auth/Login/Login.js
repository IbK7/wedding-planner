import React, { useCallback, useEffect } from 'react';
import { makeStyles, Button, Typography, TextField } from '@material-ui/core'
import Backkground from '../../../assets/Images/loginng1.jpg'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { auth_actions } from "../../../redux"
import { useHistory, Link } from "react-router-dom"


const useStyle = makeStyles((theme) => ({
    backgoundImage: {
        width: "100%",
        height: "auto",
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
        marginBottom: '1.5em',
    },
    buttonIcons: {
        height: "36px",
        position: "absolute",
        left: "10px",
    }
}));

export default function Login() {
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.auth)
    const { handleSubmit, errors, register, getValues } = useForm({ mode: "all" })

    const login_handler = useCallback(() => {
        const values = getValues()
        dispatch(auth_actions.login(values))
    }, [])

    useEffect(() => {
        if (user && user._id) {
            history.push("/home")
        }
    }, [user])

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
                    <Link to="/signup">
                        <Button className={classes.button} >
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
                    label="Email"
                    name="email"
                    inputRef={register({
                        required: {
                            value: true,
                            message: "This field is required"
                        }
                    })}
                    className={classes.textField}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? errors.email.message : ""}
                />
                <TextField
                    variant="outlined"
                    label="Password"
                    className={classes.textField}
                    name="password"
                    type="password"
                    inputRef={register({
                        required: {
                            value: true,
                            message: "This field is required"
                        }
                    })}
                    error={Boolean(errors.password)}
                    helperText={errors.password ? errors.password.message : ""}
                />
                <Link to="">
                    <Typography variant="body1" style={{ marginBottom: '0%', color: '#95A7B6' }} align="right">
                        Forgot Password?
                    </Typography>
                </Link>
                <Button onClick={handleSubmit(login_handler)} className={classes.loginButtons} style={{ width: "100%", backgroundColor: "#8B5B6E", }}>
                    Log In
                </Button>
            </div>
            <img src={Backkground} className={classes.backgoundImage} alt=""></img>

        </div>
    )
}