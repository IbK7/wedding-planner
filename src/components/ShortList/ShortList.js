import React from 'react'
import HomeHeader from '../Navigation/HomeHeader'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Grid} from '@material-ui/core'
import ShortlistCard from './ShorlitstCard'
import Venue from '../../assets/Images/venues.jpg'

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
    shadowDiv:{
        boxShadow: "1px 5px 1px #9E9E9E", 
        paddingBottom: '1%',
        margin: theme.spacing(1,1,3,1)
      }
}))

export default function CheckList(){
    const classes = useStyles();

    return(
        <div>
            <HomeHeader />
            <main className = {classes.content}>
                <div className={classes.toolbar} /> 
                <div className = {classes.mainContent}>
                    <Typography variant = 'h4' style = {{fontFamily:'DancingScript', fontWeight: 'bolder', marginLeft:'1%', marginTop: '-4%'}}>
                        Your Shortlist
                    </Typography>
                    <div className = {classes.shadowDiv}>
                    <Grid container direction = 'row' alignContent = 'center' justify = 'center' style = {{paddingLeft:'4%'}}>
                        <Grid item lg = {4} className = {classes.card} >
                            <ShortlistCard image = {Venue} supplierType = 'Venue' name = 'Venue Name' rating = '5.0' />
                        </Grid>
                        <Grid item lg = {4} className = {classes.card} >
                            <ShortlistCard image = {Venue} name = 'Venue Name' rating = '5.0' supplierType = 'Venue' />
                        </Grid>
                        <Grid item lg = {4} className = {classes.card} >
                            <ShortlistCard image = {Venue} name = 'Venue Name' rating = '5.0' supplierType = 'Venue' />
                        </Grid>
                    </Grid>
                    </div>
                </div>
            </main>
        </div>
    )
}   