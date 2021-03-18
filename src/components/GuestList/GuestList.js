import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeHeader from '../Navigation/HomeHeader/HomeHeader'
import { EditOutlined } from '@material-ui/icons';
import Footer from '../Navigation/Footer/Footer';

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

      demo: {
        backgroundColor: theme.palette.background.paper,
      },
      title: {
        margin: theme.spacing(4, 0, 2),
      },
      content2:{
        boxShadow: "1px 5px 1px #9E9E9E", 
        paddingBottom: '1%',
        margin: theme.spacing(1,1,3,1)
      }
}));
    
function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function GuestList(){
    const classes = useStyles();

    return(
        <div>
            <HomeHeader />
            
            <main className = {classes.content}>
                <div className={classes.toolbar} /> 
                <div className = {classes.mainContent}>
                    <Typography variant = 'h4' style = {{fontFamily:'DancingScript', fontWeight: 'bolder', marginLeft:'1%', marginTop: '-4%'}}>
                        Your Guest List
                    </Typography>
                    <div>
                        <div className={classes.content2}>
                            <Typography variant = 'h6' align = 'center'>
                                Groom's Guests
                            </Typography>
                            <List>
                                {
                                    generate(
                                        <ListItem>
                                            Guest Name
                                            <ListItemSecondaryAction>
                                                <IconButton>
                                                    <EditOutlined />
                                                </IconButton>
                                                </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                }
                            </List>
                        </div>
                        <div className={classes.content2}>
                            <Typography variant = 'h6' align = 'center'>
                                Bride's Guests
                            </Typography>
                            <List>
                                {
                                    generate(
                                        <ListItem>
                                            Guest Name
                                            <ListItemSecondaryAction>
                                                <IconButton>
                                                    <EditOutlined />
                                                </IconButton>
                                                </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                }
                            </List>
                        </div>
                    </div>
                    <Footer />
                </div>
                
            </main>
        </div>
    )
}