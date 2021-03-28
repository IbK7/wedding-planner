import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Grid, Button,} from '@material-ui/core'
import ExploreCard from './ExploreCard'
import Venue from '../../assets/Images/venues.jpg'
import Florist from '../../assets/Images/florists.jpg'
import Footer from '../Navigation/Footer/Footer'
import HomeHeader from '../Navigation/HomeHeader'

// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//https://reactjsexample.com/react-side-nav-component/ : SideNav


const useStyles = makeStyles((theme) => ({
    button:{
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
      contentHead:{
          backgroundColor: '#D7A7AA',
          padding: theme.spacing(2),
      },
      toolButtons:{
        padding: theme.spacing(1),
        backgroundColor: '#8B5B6E',
        color: 'white'
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
      card: {
          //margin: theme.spacing(1)
      },
      shadowDiv:{
        boxShadow: "1px 5px 1px #9E9E9E", 
        paddingBottom: '1%',
        margin: theme.spacing(1,1,3,1)
      }
})) 

export default function Home(){
    const classes = useStyles();
     
    return (
        <div>
            <HomeHeader />

            <main className = {classes.content}>
            <div className={classes.toolbar} />

            <div className = {classes.mainContent}>
                <div className = {classes.shadowDiv}>
                    <Typography variant = 'h4' style = {{fontFamily:'DancingScript', fontWeight: 'bolder', marginLeft:'1%', marginTop: '-4%'}}>
                        Explore
                    </Typography>
                    <Typography variant = 'h5'style = {{marginTop:'0.2%'}} align = 'center'>
                        Venues
                    </Typography>
                    <Grid container direction = 'row' alignContent = 'center' justify = 'center' style = {{paddingLeft:'4%'}}>
                        <Grid item lg = {4} className = {classes.card} >
                            <ExploreCard image = {Venue} name = 'Venue Name' rating = '5.0' />
                        </Grid>
                        <Grid item lg = {4} className = {classes.card} >
                            <ExploreCard image = {Venue} name = 'Venue Name' rating = '5.0' />
                        </Grid>
                        <Grid item lg = {4} className = {classes.card} >
                            <ExploreCard image = {Venue} name = 'Venue Name' rating = '5.0' />
                        </Grid>
                    </Grid>
                    <div align = 'center' style = {{}}>
                        <Button align = "center" className = {classes.button}>
                            Load More
                        </Button>
                    </div>
                </div>
                {/* <Divider/> */}
                <div className = {classes.shadowDiv}>
                    <Typography variant = 'h5'style = {{marginTop:'0.2%'}} align = 'center'>
                        Suppliers
                    </Typography>
                    <Grid container direction = 'row' alignContent = 'center' justify = 'center' style = {{paddingLeft:'4%'}}>
                        <Grid item lg = {4}>
                            <ExploreCard image = {Florist} supplierType = 'Florist' name = 'Venue Name' rating = '5.0' />
                        </Grid>
                        <Grid item lg = {4}>
                            <ExploreCard image = {Florist} supplierType = 'Florist' name = 'Venue Name' rating = '5.0' />
                        </Grid>
                        <Grid item lg = {4}>
                            <ExploreCard image = {Florist} supplierType = 'Florist' name = 'Venue Name' rating = '5.0' />
                        </Grid>
                    </Grid>
                    <div align = 'center' style = {{}}>
                        <Button align = "center" className = {classes.button}>
                            Load More
                        </Button>
                    </div>
                </div>
                <Footer />
            </div>
            </main>
        </div>
    )
}