import React from 'react'
import HomeHeader from '../Navigation/HomeHeader'
import {makeStyles} from '@material-ui/core/styles'
import { Grid, TextField, Button } from '@material-ui/core';

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

    return(
        <div>
            <HomeHeader />
            <main className = {classes.content}>
                <div className={classes.toolbar} /> 
                <div className = {classes.mainContent}>
                    <Grid container justify = 'center' alignItems = 'center'>
                        <Grid item lg = {8} >
                            <TextField 
                            variant = 'outlined'
                            label = 'Add new task'
                            style = {{width: '90%'}}
                            />
                        </Grid>
                        <Grid item>
                            <Button className = {classes.button}>
                                Add 
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </main>
        </div>
    )
}