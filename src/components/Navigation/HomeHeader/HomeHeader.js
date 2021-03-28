import React from 'react'
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {Drawer, AppBar, Toolbar, List, Typography, CssBaseline, Divider, IconButton, Link, Grid, Button,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AttachMoney, ExitToAppRounded, FavoriteRounded, HomeRounded, PeopleRounded, PlaylistAddCheckRounded, SearchRounded, SettingsRounded } from '@material-ui/icons';
import Edit from './Edit'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        //padding: theme.spacing(3),
      },
      drawerIcon: {
          color: '#8B5B6E'
      },
      contentHead:{
        backgroundColor: '#D7A7AA',
        padding: theme.spacing(2),
    },
    toolButtons:{
      padding: theme.spacing(1),
      backgroundColor: '#8B5B6E',
      color: 'white'
    },
    modal:{
        marginLeft: '100%'
    }
    
}))
export default function HomeHeader(){
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    //const [bride, setBride] = React.useState('Bride');
    //const [groom, setGroom] = React.useState('Groom')
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return(
        <div className = {classes.root}>
            <CssBaseline />
            <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            >
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Link href = '/'>
                        <Typography variant="h5" style = {{fontFamily: 'DancingScript', color: 'black'}}>
                            My Wedding Planner
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                }),
            }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Home', 'Search Suppliers', 'Guest List', 'Budget', 'CheckList'].map((text, index) => (
                    <ListItem button key={text}>  
                        <ListItemIcon>{
                            index === 0 ? <HomeRounded className = {classes.drawerIcon} /> :(
                                index === 1 ? <SearchRounded className = {classes.drawerIcon} />: (
                                    index === 2 ? <PeopleRounded className = {classes.drawerIcon} />: (
                                        index === 3 ? <AttachMoney className = {classes.drawerIcon} />: <PlaylistAddCheckRounded className = {classes.drawerIcon} />
                            ))) 
                        }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Settings', 'Log out'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <SettingsRounded /> : <ExitToAppRounded /> }</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className ={classes.contentHead}>
                    <span>
                        <Typography variant = 'h5' align = 'center' style = {{color: 'white', marginRight: '0%'}}>
                            Bride & Groom
                            
                        </Typography>
                        <Edit />
                    </span>
                    <Typography variant = 'h6' align = 'center' style = {{color: 'white'}}>
                        Date
                    </Typography>
                    <Typography variant = 'h6' align = 'center' style = {{color: 'white'}}>
                        Venue
                    </Typography>
                    <Typography variant = 'h6' align = 'center' style = {{color: 'white'}}>
                        Time left till wedding
                    </Typography>
                    
                    <Grid container direction = 'row' justify = 'space-evenly' alignContent = 'center' style ={{marginTop: '1%'}}>
                        <Grid item>
                            <Button variant = 'contained' className = {classes.toolButtons} href = '/home'>
                                <div>
                                    <HomeRounded style = {{marginRight: '2%', marginBottom: '-3%'}} />
                                    Home
                                    <Typography variant = 'body2'>
                                        Number of days to go
                                    </Typography>
                                </div>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant = 'contained' className = {classes.toolButtons} href = '/guestlist'>
                                <div>
                                    <PeopleRounded style = {{marginRight: '2%', marginBottom: '-3%'}} />
                                    Guest List   
                                    <Typography variant = 'body2'>
                                        Number of people invited
                                    </Typography>
                                </div>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant = 'contained' className = {classes.toolButtons} href = '/budget'>
                                <div>
                                    <AttachMoney style = {{marginRight: '2%', marginBottom: '-5%'}} />
                                    Budget
                                    <Typography variant = 'body2'>
                                        Estimated Budget
                                    </Typography>
                                </div>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant = 'contained' className = {classes.toolButtons} href = '/checklist' >
                                <div>
                                    <PlaylistAddCheckRounded style = {{marginRight: '2%', marginBottom: '-4%'}} />
                                    Check List
                                    <Typography variant = 'body2'>
                                        Percentage completed
                                    </Typography>
                                </div>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant = 'contained' className = {classes.toolButtons} href = '/shortlist'>
                                <div>
                                    <FavoriteRounded style = {{marginRight: '2%', marginBottom: '-3%'}}  />
                                    Shortlist
                                    <Typography variant = 'body2'>
                                        Number of saved supplier
                                    </Typography>
                                </div>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </main>
        </div>
    )
}