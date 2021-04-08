import React, { useState, useEffect, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Button, TextField, FormControl, InputLabel, FormHelperText, Select, MenuItem } from '@material-ui/core'
import ExploreCard from './ExploreCard'
import Venue from '../../assets/Images/venues.jpg'
import Florist from '../../assets/Images/florists.jpg'
import Footer from '../Navigation/Footer/Footer'
import HomeHeader from '../Navigation/HomeHeader'
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import Dialog from "../../containers/Dialog"
import DateTimePicker from "../../containers/DatePicker"
import { auth_actions } from "../../redux"

// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//https://reactjsexample.com/react-side-nav-component/ : SideNav


const useStyles = makeStyles((theme) => ({
    button: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        backgroundColor: "#8B5B6E",
        color: 'white',
        // '&:hover':{
        //     backgroundColor: "#8B5B6E",
        // }
    },
    content: {
        flexGrow: 1,
        //padding: theme.spacing(3),
    },
    contentHead: {
        backgroundColor: '#D7A7AA',
        padding: theme.spacing(2),
    },
    toolButtons: {
        padding: theme.spacing(1),
        backgroundColor: '#8B5B6E',
        color: 'white'
    },
    mainContent: {
        padding: theme.spacing(1, 0, 0, 0),
        marginLeft: '5%'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    card: {
        //margin: theme.spacing(1)
    },
    shadowDiv: {
        boxShadow: "1px 5px 1px #9E9E9E",
        paddingBottom: '1%',
        margin: theme.spacing(1, 1, 3, 1)
    },
    fullwidth: {
        width: "100%"
    }
}))

export default function Home() {
    const classes = useStyles();
    const { handleSubmit, errors, getValues, setValue, register, control } = useForm()
    const [dialog, setDialog] = useState(false)
    const [weddingDate, setWeddingDate] = useState(new Date())

    const dispatch = useDispatch()
    const user = useSelector(state => state.auth)
    const { loading, success } = useSelector(state => state.global)

    useEffect(() => {
        if (user && user._id) {
            if (user.user.role === "customer") {
                Object.keys(user).filter(i => !["_id", "user", "spouse"].includes(i)).forEach(i => {
                    setValue(i, user[i])
                })
                setDialog(Boolean(user.preferred_year) && Boolean(user.preferred_season))
            }
        }
    }, [user])
    useEffect(() => {
        if (success) {
            console.log(success)
            setDialog(false)
        }
    }, [success])
    const update_handler = useCallback(() => {
        const values = { ...getValues(), wedding_date: weddingDate };
        console.log(values)
        dispatch(auth_actions.update_customer(values))
    }, [])
    return (
        <div>
            <HomeHeader />

            <main className={classes.content}>
                <div className={classes.toolbar} />

                <div className={classes.mainContent}>
                    <div className={classes.shadowDiv}>
                        <Typography variant='h4' style={{ fontFamily: 'DancingScript', fontWeight: 'bolder', marginLeft: '1%', marginTop: '-4%' }}>
                            Explore
                    </Typography>
                        <Typography variant='h5' style={{ marginTop: '0.2%' }} align='center'>
                            Venues
                    </Typography>
                        <Grid container direction='row' alignContent='center' justify='center' style={{ paddingLeft: '4%' }}>
                            <Grid item lg={4} className={classes.card} >
                                <ExploreCard image={Venue} name='Venue Name' rating='5.0' />
                            </Grid>
                            <Grid item lg={4} className={classes.card} >
                                <ExploreCard image={Venue} name='Venue Name' rating='5.0' />
                            </Grid>
                            <Grid item lg={4} className={classes.card} >
                                <ExploreCard image={Venue} name='Venue Name' rating='5.0' />
                            </Grid>
                        </Grid>
                        <div align='center' style={{}}>
                            <Button align="center" className={classes.button}>
                                Load More
                        </Button>
                        </div>
                    </div>
                    {/* <Divider/> */}
                    <div className={classes.shadowDiv}>
                        <Typography variant='h5' style={{ marginTop: '0.2%' }} align='center'>
                            Suppliers
                    </Typography>
                        <Grid container direction='row' alignContent='center' justify='center' style={{ paddingLeft: '4%' }}>
                            <Grid item lg={4}>
                                <ExploreCard image={Florist} supplierType='Florist' name='Venue Name' rating='5.0' />
                            </Grid>
                            <Grid item lg={4}>
                                <ExploreCard image={Florist} supplierType='Florist' name='Venue Name' rating='5.0' />
                            </Grid>
                            <Grid item lg={4}>
                                <ExploreCard image={Florist} supplierType='Florist' name='Venue Name' rating='5.0' />
                            </Grid>
                        </Grid>
                        <div align='center' style={{}}>
                            <Button align="center" className={classes.button}>
                                Load More
                        </Button>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
            <Dialog title="Further Information" open={dialog} loading={loading} onSuccess={handleSubmit(update_handler)} onClose={() => { }}>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} xm={12} md={12} lg={12} xl={12}>
                        <TextField
                            className={classes.fullwidth}
                            variant="outlined"
                            type="text"
                            label="Preferred Year"
                            name="preferred_year"
                            inputRef={register({
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                validate: v => {
                                    const year = new Date().getFullYear()
                                    return (year < v && v < year + 5) || `Please enter a year within ${year} and ${year + 5}`
                                }
                            })}
                            error={Boolean(errors.preferred_year)}
                            helperText={errors.preferred_year ? errors.preferred_year.message : ""}
                        />
                    </Grid>
                    <Grid item xs={12} xm={12} md={12} lg={12} xl={12}>
                        <FormControl variant="outlined"
                            className={classes.fullwidth}
                            label="Preferred Season"
                            error={Boolean(errors.preferred_season)}
                        >
                            <InputLabel>Preferred Season</InputLabel>
                            <Controller
                                as={
                                    <Select label="Preferred Season">
                                        <MenuItem value="">Select Preferred Season</MenuItem>
                                        <MenuItem value="summer">Summer</MenuItem>
                                        <MenuItem value="winter">Winter</MenuItem>
                                        <MenuItem value="spring">Spring</MenuItem>
                                        <MenuItem value="autumn">Autumn</MenuItem>
                                    </Select>
                                }
                                name="preferred_season"
                                rules={{ required: { value: true, message: "This field is required" } }}
                                control={control}
                            />
                            <FormHelperText>{errors.preferred_season ? errors.preferred_season.message : ""}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} xm={12} md={12} lg={12} xl={12}>
                        <DateTimePicker
                            className={classes.fullwidth}
                            type="date"
                            variant="outlined"
                            label="Wedding Date"
                            onChange={d => setWeddingDate(d)}
                            value={weddingDate}
                        />
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    )
}