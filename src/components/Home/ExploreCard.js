import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles ((theme)=>({
    card:{
        margin: theme.spacing(2),
    },
    imageDiv:{
        position: 'relactive',
        zIndex: '0',
    },
    image:{
        height: '35vh',
    }
}))
export default function ExploreCard(props){
    const classes = useStyles();
    return(
        <div className = {classes.card}>
            <img src = {props.image} className = {classes.image} alt=""/>
            <div>
                <Typography variant = "h6">
                    {props.name}
                </Typography>
                <Typography variant = "body2">
                    {props.supplierType}
                </Typography>
                <Typography variant = "body2">
                    {props.rating}
                </Typography>
            </div>
        </div>
    )
}