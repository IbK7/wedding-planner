import React from 'react'
import HomeHeader from '../Navigation/HomeHeader'
import {makeStyles} from '@material-ui/core/styles'

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
}))

export default function CheckList(){
    const classes = useStyles();

    return(
        <div>
            <HomeHeader />
            <main className = {classes.content}>
                <div className={classes.toolbar} /> 
                <div className = {classes.mainContent}>
                    
                </div>
            </main>
        </div>
    )
}