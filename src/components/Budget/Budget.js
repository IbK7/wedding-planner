import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {InputAdornment, InputLabel, Select, TextField, Typography, FormControl, MenuItem, Button} from '@material-ui/core'
import HomeHeader from '../Navigation/HomeHeader'
import Footer from '../Navigation/Footer'

const useStyles = makeStyles((theme) => ({
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
    textfield:{
        minWidth: 'auto',
        width: '30%',
        
    },
    dropdown:{
        //padding: theme.spacing(3,0,3,0)
        //height: '50px'
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
export default function Budget(){
    const classes = useStyles();
//     const [age, setAge] = React.useState('');
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
    return(
        <div>
            <HomeHeader />
            <main className = {classes.content}>
                <div className={classes.toolbar} /> 
                <div className = {classes.mainContent}>
                    <Typography variant = 'h4' style = {{fontFamily:'DancingScript', fontWeight: 'bolder', marginLeft:'1%', marginTop: '-4%'}}>
                        Your Wedding Budget
                    </Typography>
                    <div align = 'center' style = {{margin: '2%'}}>
                        <TextField 
                        variant = 'outlined'
                        placeholder = 'Please enter target budget...'
                        label = 'Target Budget'
                        style = {{
                            minWidth: 'auto',
                            width: '30%'
                        }}
                        inputProps ={{
                            startAdornment: (
                                <InputAdornment position = "start">
                                    $
                                </InputAdornment>
                            ),
                        }}
                        />
                    </div>
                    <div align = 'center' style = {{margin: '2%'}}>
                    <FormControl className = {classes.textfield}>
                        <InputLabel variant = 'outlined'>Estimated number of Guests</InputLabel>
                        <Select
                        variant = 'outlined'
                        placeholder = 'Please select number of Guests'
                        style = {{width: '100%'}}
                        className = {classes.dropdown}   
                        >
                            <MenuItem value="">
                                <em>Undecided</em>
                            </MenuItem>
                            <MenuItem value='<50'>Less than 50</MenuItem>
                            <MenuItem value='50-99'>50 - 99</MenuItem>
                            <MenuItem value='100-149'>100 - 149</MenuItem>
                            <MenuItem value='150-250'>150 - 250</MenuItem>
                            <MenuItem value='>250'>Greater than 250</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <div align = 'center' style = {{margin: '2%'}}>
                    <FormControl className = {classes.textfield}>
                        <InputLabel variant = 'outlined'>Day of the week you want the wedding</InputLabel>
                        <Select
                        variant = 'outlined'
                        placeholder = 'Please select number of Guests'
                        style = {{width: '100%'}}
                        className = {classes.dropdown}   
                        >
                            <MenuItem value="">
                                <em>Undecided</em>
                            </MenuItem>
                            <MenuItem value='Weekday'>Weekday</MenuItem>
                            <MenuItem value='Fri'>Friday</MenuItem>
                            <MenuItem value='Sat'>Saturday</MenuItem>
                            <MenuItem value='Sun'>Sunday</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <div align = 'center' style = {{margin: '2%'}}>
                    <FormControl className = {classes.textfield}>
                        <InputLabel variant = 'outlined'>Year of Wedding</InputLabel>
                        <Select
                        variant = 'outlined'
                        placeholder = 'Please select number of Guests'
                        style = {{width: '100%'}}
                        className = {classes.dropdown}   
                        >
                            <MenuItem value="">
                                <em>Undecided</em>
                            </MenuItem>
                            <MenuItem value='Weekday'>2021</MenuItem>
                            <MenuItem value='Fri'>2022</MenuItem>
                            <MenuItem value='Sat'>2023</MenuItem>
                            <MenuItem value='Sun'>After 2023</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                    <div align = 'center' style = {{margin: '2%'}}>
                        <Button variant = 'outlined' className = {classes.button}>
                            Estimate Budget
                        </Button>
                    </div>
                    <Footer />
                </div>
                
            </main>
        </div>
    )
}