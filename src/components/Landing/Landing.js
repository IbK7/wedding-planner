import React from 'react'
import {Button, makeStyles, Typography} from '@material-ui/core'
import Header from '../Navigation/Header/Header'
import Background from '../../assets/Images/LandingBG.jpg'

const useStyle = makeStyles((theme) => ({
    backgoundImage: {
        width: "100vw",
        height: "100vh",
        position: "relative",
        top: "0%",
        left: "0%",
        zIndex: "0",
        opacity: '0.55npm',
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
}))

export default function Landing(){
    const classes = useStyle();
    return(
       <div>
            <div style = {{position: 'fixed', overflow :'hidden', zIndex: '0'}}>
            <Header />
            <div style = {{position: 'absolute',top: '45%',left: '10%', zIndex: '1'}}>
                <Typography variant = "h3" style ={{fontFamily: 'DancingScript', width: '55%', fontWeight: 'bold'}}>
                    Welcome to My Wedding Planner, Plan your weddings for free
                </Typography>
                <Button variant = 'outlined' className = {classes.button} href = "/signup">
                    Start Planning                   
                </Button>
            </div>
            <img src = {Background} className ={classes.backgoundImage}></img>
        </div>
        
       </div>
    )
}