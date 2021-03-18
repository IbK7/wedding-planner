import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    appBar: {
        top: "auto",
        bottom: 0,
      },
      footer: {
        backgroundColor: "black",
        color: "white",
        padding: theme.spacing(5, 0, 5, 0),
      },
}));

export default function Footer(){
    const classes = useStyle();

    return(
        <div className = {classes.appBar}>
            <div className = {classes.footer}>
                <Typography
                    variant = "h5"
                    style ={{fontFamily: 'DancingScript', color: 'white', marginLeft: '2%'}}>
                        My Wedding Planner
                    </Typography>
            </div>
        </div>
    )
}