import React from 'react'
import 'date-fns';
import {makeStyles} from '@material-ui/core/styles'
import {IconButton, Modal, Paper, TextField, Grid, Typography} from '@material-ui/core'
import { CloseOutlined, EditRounded } from '@material-ui/icons'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    modal:{
        position: "absolute",
        width: "40%",
        left: "50%",
        top: "50%",
        //transform: "translate(-50%, -50%)", 
    },
    form: {
        padding: theme.spacing(2),
        width: '100%',
        backgroundColor: 'white',
        borderRadius: "3%",
    },
    textField: {
        width: "100%",
    },
}))

export default function Edit(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () =>{
        setOpen(true)
    }
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const body = (
        <Paper>
            <div align = 'right'>
                <IconButton onClick = {handleClose} style = {{}}>
                    <CloseOutlined style ={{color:'black'}} />
                </IconButton>
            </div>
            <div className = {classes.form}>
                <Typography
                    variant="h5"
                    style={{ marginBottom: "2%", fontWeight: 'bold', fontFamily: 'DancingScript' }}>
                    Edit values
                </Typography>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                        <TextField
                            variant="outlined"
                            className={classes.textField}
                            label="Groom Name"
                            name="groom_name"
                            type="text"
                            
                        />
                    </Grid>
                    <Grid item xs={12} xm={12} md={6} lg={6} xl={6}>
                        <TextField
                            variant="outlined"
                            className={classes.textField}
                            label="Bride Name"
                            name="bride_name"
                            type="text"
                        />
                    </Grid>

                </Grid>
            </div>
        </Paper>
    );

    return(
        <div>
            <IconButton onClick = {handleOpen} style = {{marginLeft: '57%', marginTop: '-3.5%'}} >
                <EditRounded style = {{color: 'white' }}/>
            </IconButton>

            <Modal open = {open} onClose = {handleClose} className = {classes.modal}>
                {body}
            </Modal>
        </div>
    )
}