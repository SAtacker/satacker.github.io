import React from 'react';
import {Route} from 'react-router-dom';
import './app.css';
import Particles from 'react-particles-js';
import {makeStyles} from "@material-ui/styles";
import Timeline from './components/timeline';
import Home from './components/home';

const useStyles = makeStyles(theme=>({
    particlesCanvas:{
      position:"absolute",
      opacity:0.5
    }
}));

function App() {
  const classes=useStyles();
  return (
    <div className="App">
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles:{
            number:{
              value:45,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
              type:"circle",
              stroke:{
                width:1,
                color:"#1b262c"
              }
            },
            size:{
              value:8,
              random:true,
              anim:{
                enable:false,
                speed:10,
                size_min:0.1,
                sync:true
              }
            }
          }
        }}
      />
      <Route exact path="/" component={Home} />
      <Route exact path="/timeline" component={Timeline} />
    </div>
  );
}

export default App;
