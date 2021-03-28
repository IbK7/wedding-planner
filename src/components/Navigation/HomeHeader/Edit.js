import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {IconButton, Modal, Paper} from '@material-ui/core'
import { CloseOutlined, EditRounded } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({

}))

export default function Edit(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () =>{
        setOpen(true)
    }

    const body = (
        <Paper>
            <div align = 'right'>
                <IconButton onClick = {handleClose} style = {{}}>
                    <CloseOutlined style ={{color:'black'}} />
                </IconButton>

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