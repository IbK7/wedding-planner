import React from 'react'
import HomeHeader from '../Navigation/HomeHeader'
import {makeStyles} from '@material-ui/core/styles'
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';

const useStyles = makeStyles ((theme) => ({
    content: {
        flexGrow: 1,
        //padding: theme.spacing(3),
    },
    mainContent:{
        padding: theme.spacing(1,0,0,0),  
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
    button:{
        padding: theme.spacing(1),
        //marginTop: theme.spacing(2),
        backgroundColor: "#8B5B6E",
        color: 'white',
        // '&:hover':{
        //     backgroundColor: "#8B5B6E",
        // }
    },
}))

export default function CheckList(){
    const classes = useStyles();

    const tick = (
        <Check style = {{color: "green"}} />
    )
    const cross = (
        <Clear style = {{color: "red"}}/>
    )

    const data = [
        {
            Type: "Venue",
            Name: "Venue Name",
            Paid: true
        },
        {
            Type: "Caterer",
            Name: "Caterer Name",
            Paid: true
        },
        {
            Type: "Potographer",
            Name: "Photographer Name",
            Paid: true
        },
        {
            Type: "Jewellery",
            Name: "Jeweller Name",
            Paid: false
        },
        {
            Type: "Favour",
            Name: "Favour Name",
            Paid: true
        },
        {
            Type: "Invites",
            Name: "Invites Name",
            Paid: false
        },
        {
            Type: "Florist",
            Name: "Florist Name",
            Paid: true
        },
        {
            Type: "Cakes",
            Name: "Baker Name",
            Paid: true
        },
        {
            Type: "Music",
            Name: "Name",
            Paid: false
        },

    ]
    return(
        <div>
            <HomeHeader />
            <main className = {classes.content}>
                <div className={classes.toolbar} /> 
                <div className = {classes.mainContent}>
                    <Typography variant = 'h4' style = {{fontFamily:'DancingScript', fontWeight: 'bolder', marginLeft:'1%', marginTop: '-4%'}}>
                        Booked Suppliers
                    </Typography>
                    <Grid container direction = "column" justify = 'flex-start' alignItems = 'center' style = {{width: '100%'}}>
                        
                            <Grid container justify ="space-around" alignContent = "center">
                                <Grid item lg = {3} md = {3}>
                                    <Typography variant = "h6">
                                        Supplier Type
                                    </Typography>
                                </Grid>
                                <Grid item lg = {3} md = {3}>
                                    <Typography variant = "h6">
                                        Supplier Name
                                    </Typography>
                                </Grid>
                                <Grid item lg = {3} md = {3}>
                                    <Typography variant = "h6">
                                        Invoice Paid
                                    </Typography>
                                </Grid>
                            </Grid>
                            {
                                data.map((item) => {
                                    return(
                                        <Grid container justify ="space-around" alignContent = "center">
                                        <Grid item lg = {3} md = {3}>
                                            <Typography variant = "body1">
                                                {item.Type}
                                            </Typography>
                                        </Grid>
                                        <Grid item lg = {3} md = {3}>
                                            <Typography variant = "body1">
                                            {item.Name}
                                            </Typography>
                                        </Grid>
                                        <Grid item lg = {3} md = {3}>
                                            {item.Paid? tick: cross}
                                        </Grid>
                                    </Grid>
                                    )
                                })
                            }
                            
                            {/* <Grid container justify ="space-around" alignContent = "center">
                                <Grid item lg = {3} md = {3}>
                                    <Typography variant = "body1">
                                        Caterer
                                    </Typography>
                                </Grid>
                                <Grid item lg = {3} md = {3}>
                                    <Typography variant = "body1">
                                       Caterer Name
                                    </Typography>
                                </Grid>
                                <Grid item lg = {3} md = {3}>
                                    {cross}
                                </Grid>
                            </Grid> */}
                    </Grid>
                </div>
            </main>
        </div>
    )
}

