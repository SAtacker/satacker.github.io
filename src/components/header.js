import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box,
} from '@material-ui/core';
import avatar from '../Boy With Glasses 2.png';
import ReactTyped from 'react-typed';

const useStyles = makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1),
    },
    title:{
        color:"cyan",
        margin:"1rem"
    },
    subtitle:{
        color:"#00FFEF",
        margin:"2rem"
    },
    text:{
        color: "#08E8DE",
        margin: "2rem",
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}));

const Header = ()=>{
    const classes = useStyles();
    return(
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Shreyas Atre" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <ReactTyped strings={["Hola!"," Konnichiwa!","Namaste!","Hey, I am Shreyas!"]} typeSpeed={100}></ReactTyped>
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <ReactTyped strings={["Welcome to my portfolio","Know me better!"]} typeSpeed={100}></ReactTyped>
            </Typography>
            <Typography className={classes.text} variant="h6">
                <ReactTyped strings={["Web","Machine Learning","Computer Vision","Embedded"]} typeSpeed={300} backSpeed={100} loop></ReactTyped>
            </Typography>
        </Box>
    );
}

export default Header;