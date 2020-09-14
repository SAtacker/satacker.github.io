import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from '@material-ui/core';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';
import  avatar from '../Boy With Glasses 2.png';
/* <a href="https://www.vecteezy.com/free-vector/teenagers">Teenagers Vectors by Vecteezy</a> */

const useStyles= makeStyles(theme=>({
    menuSliderContainer:{
        width: "250px",
        background: "#1b262c",
        height: "100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13),
    },
    listItem:{
        color:"#3f4c6b",

    }
}));

const menuItems = [
    {
        listIcon:<Home />,
        listText:"Home",
        listPath:"/"
    },
    {
        listIcon:<AssignmentInd />,
        listText:"Timeline",
        listPath:"/timeline"
    },
    {
        listIcon:<Apps />,
        listText:"Projects"
    },
    {
        listIcon:<ContactMail />,
        listText:"Contact Me"
    }
];

const Navbar = ()=>{
    const [state,setState] = useState({
        right:false
    });
    const toggleSlider = (slider,open)=>()=>{
        setState({...state,[slider]:open});
    };
    const classes = useStyles();
    const slideList = slides => (
            <Box component="div" className={classes.menuSliderContainer} style={{color:"cyan"}} onClick={toggleSlider("right",false)}>
                <Avatar src={avatar} alt="Shreyas Atre" className={classes.avatar}/>
                <Divider></Divider>
                <List>
                    {menuItems.map((isItem,Key)=>(
                        <ListItem button key={Key} component={Link} to={isItem.listPath}>
                            <ListItemIcon className={classes.listItem} style={{color:"cyan"}}>
                                {isItem.listIcon}
                            </ListItemIcon>
                            <ListItemText primary={isItem.listText}>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
    );
    return(
        <Box>
            <Box component="nav" >
                <AppBar position="static" style={{background:"#1b262c"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right",true)}>
                            <ArrowBack style={{color:"cyan"}}></ArrowBack>
                        </IconButton>
                        <Typography variant="h3" style={{color:"cyan"}}>
                            Portfolio
                        </Typography>
                        <MobileRightMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right",false)}>
                            {slideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    );
}

export default Navbar;