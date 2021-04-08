import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Header from '../../Navigation/BusinessHeader/BusinessHeader'
import Venue from '../../../assets/Images/venues.jpg'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    name: {
        margin: theme.spacing(3),
        color: "#8B5B6E"
    }
}))

export default function Supplier(){
    const classes = useStyles();
    return(
        <div>
            <Header />
            <div style = {{marginTop: '5%'}}>
            <Typography variant = "h3" className = {classes.name}>
                    Name
                </Typography>
                <Grid container direction = "row" alignItems = "center" justify = "space-around">
                    <Grid item lg = {5} md = {5}>
                        <img src = {Venue} style = {{width: "100%"}}/>
                    </Grid>
                    <Grid item lg = {5} md = {5}>
                        <Grid container direction = "column" justify = "flex-start" alignItems = "flex-start" spacing = {3}>
                            <Grid item>
                                <Typography variant = "h5">
                                    Venue
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant = "h5">
                                    Service Charges
                                </Typography>
                                <Typography variant = "body2">
                                    Charges
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant = "h5">
                                    About us:
                                </Typography>
                                <Typography
                                variant = "body2"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant = "h5">
                                    Reviews
                                </Typography>
                                <Typography variant = "body2">
                                    reviews
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}