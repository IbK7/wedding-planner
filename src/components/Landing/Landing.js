import React from 'react'
import {Button, Grid, makeStyles, Typography, fade, IconButton, Divider} from '@material-ui/core'
import Header from '../Navigation/Header/Header'
import Footer from '../Navigation/Footer/Footer'
import Background from '../../assets/Images/LandingBG.jpg';
import InputBase from '@material-ui/core/InputBase';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import WebRoundedIcon from '@material-ui/icons/WebRounded';
import Venues from '../../assets/Images/venues.jpg';
import Florists from '../../assets/Images/florists.jpg';
import Cakes from '../../assets/Images/cakes.jpg';
import Invites from '../../assets/Images/invites.jpg';
import Favours from '../../assets/Images/favours.jpg';

const useStyle = makeStyles((theme) => ({
    backgoundImage: {
        width: "100vw",
        height: "75vh",
        position: "relative",
        top: "0%",
        left: "0%",
        zIndex: "0",
        opacity: '0.75',
        overflowX: 'hidden'
    },
    button:{
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        backgroundColor: "#8B5B6E",
        color: 'white',
        // '&:hover':{
        //     backgroundColor: "#8B5B6E",
        // }
    },
    planningButtons:{
        //margin: theme.spacing(0,2,0,2),
        width: '100%',
        position: 'absolute',
        top: '80vh',
        overflowX: 'hidden'
    },
    icon:{
        fontSize: '70px',
        //margin: theme.spacing(0,10,0,10)
        color: '#8B5B6E'
    },
    iconText:{
        //color: '#8B5B6E'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        //backgroundColor: fade(theme.palette.common.white, 0.15),
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        padding: theme.spacing(1),
        margin: theme.spacing(2,0,2,0),
        //marginLeft: 0,
        width: '50%',
        // [theme.breakpoints.up('sm')]: {
        //   marginLeft: theme.spacing(3),
        //   width: 'auto',
        // },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        top: '-2%',
        left: '0',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        marginLeft: '8%'
      },
      featured:{
        //margin: theme.spacing(0,2,0,2),
        width: '100%',
        position: 'absolute',
        top: '100vh',
        overflowX: 'hidden',
        height: 'auto',
    },
    featuredCardGrid:{
        margin: theme.spacing(2),
    },
    card:{
    },
    cardImage:{
        position: 'relative',
        top: "0%",
        left: "0%",
        zIndex: '0'
    },
    cardText:{
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '-20%'
    },
}))

export default function Landing(){
    const classes = useStyle();
    return(
        <div style = {{overflowX: 'hidden'}}>
            <Header />
            <div style = {{position: 'relative', overflow :'hidden', zIndex: '0', overflowX: 'hidden'}}>
               
                <div style = {{position: 'absolute',top: '30%',left: '10%', zIndex: '1'}}>
                    <Typography variant = "h3" style ={{fontFamily: 'DancingScript', fontWeight: 'bold'}}>
                        Welcome to My Wedding Planner, Plan your weddings for free
                    </Typography>
                    {/* <Button variant = 'outlined' className = {classes.button} href = "/signup">
                        Start Planning                   
                    </Button> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchRoundedIcon />
                        </div>
                        <InputBase
                        placeholder="Search Suppliers..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Button variant = 'outlined' className = {classes.button} href = "/signup">
                        Start your journey with us                  
                    </Button>
                </div>
                <img src = {Background} className ={classes.backgoundImage} alt=""></img>
            </div>
            <div className = {classes.planningButtons}>
                <Grid container direction = "row" justify = 'space-around' alignItems = 'center' style = {{overflowX: 'hidden'}}>
                    <Grid item style ={{marginLeft: '5%'}}>
                        <IconButton>
                            <SearchRoundedIcon className = {classes.icon} />
                        </IconButton>
                        <Typography variant = "body1" style = {{marginLeft: '-15%'}} className = {classes.iconText} >
                            Search Suppliers
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <PeopleOutlineRoundedIcon className = {classes.icon} />
                        </IconButton>
                        <Typography variant = "body1" style = {{marginLeft: '-20%'}} className = {classes.iconText} >
                            Manage Guest List
                        </Typography> 
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <ListAltRoundedIcon className = {classes.icon} />
                        </IconButton>
                        <Typography variant = "body1" style = {{marginLeft: '-25%'}} className = {classes.iconText} >
                            Check your To-Do List
                        </Typography> 
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <CreditCardRoundedIcon className = {classes.icon} />
                        </IconButton>
                        <Typography variant = "body1" style = {{marginLeft: '-20%'}} className = {classes.iconText} >
                            Manage Budget
                        </Typography> 
                    </Grid>
                    <Grid item>
                        <IconButton>    
                            <QuestionAnswerRoundedIcon className = {classes.icon} />
                        </IconButton>
                        <Typography variant = "body1" style = {{marginLeft: '-20%'}} className = {classes.iconText} >
                            Join our Community
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <WebRoundedIcon className = {classes.icon} />   
                        </IconButton>
                        <Typography variant = "body1" style = {{marginLeft: '-25%'}} className = {classes.iconText}>
                            Create you Wedding Website
                        </Typography> 
                    </Grid>
                </Grid>
            </div>
            <Divider class = 'middle' style = {{marginTop:'11.5%',}} />
            <div className = {classes.featured}>
                <Typography variant = 'h4' align = 'left' style ={{marginLeft: '1%', fontFamily: 'DancingScript', fontWeight: 'bold'}}>
                    Featured Suppliers
                </Typography>
                <div >
                <Grid container direction = 'row' className = {classes.featuredCardGrid}>
                    <Grid item lg = {6} className = {classes.card}>
                        <div>
                            <div style = {{position: 'absolute', top: '70%', left: '1.5%', zIndex: '2', width: 'auto'}}>
                                <Typography variant = 'h5' className = {classes.cardText}>
                                    Venues
                                </Typography>
                                <Button variant = 'outlined' className = {classes.button} href = "">
                                    Search                  
                                </Button>
                            </div>
                            <img src = {Venues} style ={{height: '70.5vh'}} alt="" />
                        </div>
                    </Grid>
                    <Grid container direction = 'column' lg ={3}>
                        <Grid item className = {classes.card}>
                        <div>
                            <div style = {{position: 'absolute', top: '33.5%', right: '42.9%', zIndex: '2', width: 'auto'}}>
                                <Typography variant = 'h5' className = {classes.cardText}>
                                    Florists
                                </Typography>
                                <Button variant = 'outlined' className = {classes.button} href = "">
                                    Search                  
                                </Button>
                            </div>
                            <img src = {Florists} className = {classes.cardImage} style ={{height: '35vh'}} alt="" />
                        </div>
                            
                        </Grid>
                        <Grid item className = {classes.card}>
                        <div>
                            <div style = {{position: 'absolute', top: '70%', right: '43.5%', zIndex: '2', width: 'auto'}}>
                                <Typography variant = 'h5' className = {classes.cardText}>
                                    Cakes
                                </Typography>
                                <Button variant = 'outlined' className = {classes.button} href = "">
                                    Search                  
                                </Button>
                            </div>
                            <img src = {Cakes} style ={{height: '35vh'}} alt=""/>
                        </div>
                        </Grid>
                    </Grid>
                    <Grid container direction = 'column' lg ={3}>
                        <Grid item className = {classes.card}>
                            <div>
                                <div style = {{position: 'absolute', top: '33%', right: '18.5%', zIndex: '2', width: 'auto'}}>
                                    <Typography variant = 'h5' className = {classes.cardText}>
                                        Invites
                                    </Typography>
                                    <Button variant = 'outlined' className = {classes.button} href = "">
                                        Search                  
                                    </Button>
                                </div>
                                <img src = {Invites} style ={{height: '35vh'}} className = {classes.cardImage} alt="" />
                            </div>
                        </Grid>
                        <Grid item className = {classes.card}>
                        <div>
                            <div  style = {{position: 'absolute', top: '70.5%', right: '17.5%', zIndex: '2', width: 'auto'}}>
                                <Typography variant = 'h5' className = {classes.cardText}>
                                    Favours
                                </Typography>
                                <Button variant = 'outlined' className = {classes.button} href = "">
                                    Search                  
                                </Button>
                            </div>
                            <img src = {Favours} style ={{height: '35vh'}} className = {classes.cardImage} alt=""/>
                        </div>
                        {/* <div>
                            <Typography variant = 'h5' style = {{position: 'absolute', bottom: '15%', zIndex: '2'}}>
                                Favours
                            </Typography>
                            <Button variant = 'outlined' className = {classes.button} href = "/signup">
                                Search                  
                            </Button> 
                            <div  style = {{position: 'absolute', bottom: '5%', right:'10%', zIndex: '2'}}>
                                <Typography variant = 'h5' style ={{color: 'white', fontWeight: 'bold'}}>
                                    Favours
                                </Typography>
                                <Button variant = 'outlined' className = {classes.button} href = "">
                                    Search                  
                                </Button>
                            </div>
                            <img src = {Favours} style ={{height: '35vh'}} className = {classes.cardImage} />
                        </div> */}
                        </Grid>
                    </Grid>
                </Grid>
                <div
                style={{
                  minWidth: "100vw",
                  paddingTop: "0%",
                  overflowX: "hidden",
                }}
              >
                <Footer />
              </div>
                </div>
            </div>
            
        </div>
    );
}

