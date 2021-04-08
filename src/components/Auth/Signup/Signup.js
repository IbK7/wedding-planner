import React, { useCallback, useEffect } from 'react'
import { makeStyles, Button, Typography, TextField, Grid, Divider, Box, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'
import Background from '../../../assets/Images/signupbg.jpg'
import { useForm, Controller } from "react-hook-form"
import { countries, find_rate } from "../../../assets/data"
import { useHistory, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { auth_actions } from "../../../redux"
import { HistorySharp } from '@material-ui/icons'


const useStyle = makeStyles((theme) => ({
    backgoundImage: {
        height: "auto",
        minWidth: '100vw',
        minHeight: '100vh',
        position: "fixed",
        top: "0%",
        left: "0%",
        zIndex: "0",
        opacity: '0.90',
        //background: 'rgba(0,0,0,0.5)'
    },
    button: {
        margin: theme.spacing(2),
        backgroundColor: "#8B5B6E",
        color: 'white',
    },
    signupForm: {
        padding: theme.spacing(2),
        width: '40%',
        backgroundColor: 'white',
        borderRadius: "3%",
        position: 'absolute',
        top: '120%',
        left: '29%',
        zIndex: '1',

    },
    buttonIcons: {
        height: "36px",
        position: "absolute",
        left: "10px",
    },
    textField: {
        width: "100%",
    },
    signUpButtons: {
        color: 'white',
        width: '100%',
        padding: theme.spacing(1.5),
        marginTop: "2em"
    },
    header: {
        width: '100%',
        //height: '10vh',
        backgroundColor: '#95A7B6'
    }
}));
export default function Signup() {
    const classes = useStyle();
    const { handleSubmit, errors, register, getValues, control } = useForm()
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth)

    useEffect(() => {
        if (user && user._id) {
            history.push("/")
        }
    }, [user])

    const register_customer = useCallback(() => {
        const values = getValues();
        const customer = {
            ...values,
            address: {
                name: values.name,
                city: values.city,
                zip: values.zip,
                country: values.country,
                state: values.state
            },
            currency: {
                name: values.currency,
                conversion_rate_per_us_dollar: find_rate(values.currency)
            }
        }
        console.log(customer)
        dispatch(auth_actions.register_customer(customer))
    }, [])
    return (
        <div style={{ position: 'relative', }}>
            <Grid
                container
                direction='column'
                justify='space-between'
                alignItems="center"
                style={{ width: "100vw", position: 'absolute', left: '0', zIndex: '1', backgroundAttachment: "scroll" }}
            >
                <Grid item style={{ width: "100%" }}>
                    <Grid container direction="row" justify="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Grid item>
                            <Link to='/'>
                                <Typography
                                    variant="h4"
                                    style={{ fontFamily: 'DancingScript', color: 'black', marginTop: '1%', }}>
                                    My Wedding Planner
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/login">
                                <Button className={classes.button}>
                                    Log In
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <div align="center" className={classes.signupForm}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    style={{ marginBottom: "2%", fontWeight: 'bold', fontFamily: 'DancingScript' }}>
                                    Sign up and start planning
                            </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container justify="center" alignItems="center" spacing={2}>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="First Name"
                                            name="first_name"
                                            type="text"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                }
                                            })}
                                            error={Boolean(errors.first_name)}
                                            helperText={errors.first_name ? errors.first_name.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="Last Name"
                                            name="last_name"
                                            type="text"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                }
                                            })}
                                            error={Boolean(errors.last_name)}
                                            helperText={errors.last_name ? errors.last_name.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="Email"
                                            name="email"
                                            type="email"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                }
                                            })}
                                            error={Boolean(errors.email)}
                                            helperText={errors.email ? errors.email.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="Password"
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
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="Password"
                                            name="conf_password"
                                            type="password"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                },
                                                validate: v => v === getValues().password || "Passwords don't match"
                                            })}
                                            error={Boolean(errors.password)}
                                            helperText={errors.conf_password ? errors.conf_password.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="Phone"
                                            name="phone"
                                            type="text"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                },
                                            })}
                                            error={Boolean(errors.password)}
                                            helperText={errors.phone ? errors.phone.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={12} lg={12} xl={12}>
                                        <Divider />
                                        <Box mt={3} textAlign="left">
                                            <Typography variant="h5" color=" primary">Address Information</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="Street Address"
                                            name="name"
                                            type="text"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                }
                                            })}
                                            error={Boolean(errors.name)}
                                            helperText={errors.name ? errors.name.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="City"
                                            name="city"
                                            type="text"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                }
                                            })}
                                            error={Boolean(errors.city)}
                                            helperText={errors.city ? errors.city.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="State"
                                            name="state"
                                            type="text"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                }
                                            })}
                                            error={Boolean(errors.state)}
                                            helperText={errors.state ? errors.state.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="Zip"
                                            name="zip"
                                            type="text"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                }
                                            })}
                                            error={Boolean(errors.zip)}
                                            helperText={errors.zip ? errors.zip.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <TextField
                                            variant="outlined"
                                            className={classes.textField}
                                            label="Country"
                                            name="country"
                                            type="text"
                                            inputRef={register({
                                                required: {
                                                    value: true,
                                                    message: "This field is required"
                                                }
                                            })}
                                            error={Boolean(errors.country)}
                                            helperText={errors.country ? errors.country.message : ""}
                                        />
                                    </Grid>
                                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                                        <FormControl variant="outlined"
                                            className={classes.textField}
                                            name="currency"
                                            label="Currency"
                                            error={Boolean(errors.currency)}
                                        >
                                            <InputLabel>Currency</InputLabel>
                                            <Controller
                                                as={
                                                    <Select label="Currency">
                                                        <MenuItem value="">Select Currency</MenuItem>
                                                        {countries.map(i => <MenuItem key={i.code} value={i.code}>{i.name}</MenuItem>)}
                                                    </Select>
                                                }
                                                name="currency"
                                                rules={{ required: { value: true, message: "This field is required" } }}
                                                control={control}
                                            />
                                            <FormHelperText>{errors.currency ? errors.currency.message : ""}</FormHelperText>
                                        </FormControl>

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button onClick={handleSubmit(register_customer)} className={classes.signUpButtons} style={{ width: "100%", backgroundColor: "#8B5B6E", }}>
                                    Sign Up
                            </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <img src={Background} className={classes.backgoundImage} alt="" />
        </div>
    );
}