import React from 'react';
import Navbar from './navbar';
import {makeStyles} from '@material-ui/core/styles';
import {Typography,Box, CssBaseline} from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Work,School,Star} from '@material-ui/icons';
const useStyles =makeStyles(theme=>({
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
    }
}));

const Timeline= ()=>{
    const classes = useStyles();
    return(
        <div>
            <CssBaseline >
                <Navbar />
            </CssBaseline>
            <Box component="header">
                <Typography variant="h3" align="center" className={classes.title}>
                    Timeline (Dummy)
                </Typography>
            </Box>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2020 June - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">ML & Embedded Engg.</h3>
                    <h4 className="vertical-timeline-element-subtitle">WFH Intern</h4>
                    <p>
                    Motion Planning, Computer Vision, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 March - 2020 May"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">IoT Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">WFH Intern</h4>
                    <p>
                    Prototype for Smart Device controller
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2023"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">B.Tech. in Electronics and Telecommunication</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Current (upto 2nd Semester) CPI is 8.45 on a scale of 10
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">FIITJEE</h3>
                    <h4 className="vertical-timeline-element-subtitle">Jee Preparation</h4>
                    <p>
                    97.6 Percentile in JEE Mains ,AIR 693 in MHT-CET
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">10 + 2 boards</h3>
                    <h4 className="vertical-timeline-element-subtitle">93.4 %</h4>
                    <p>
                    from I.E.S. Katrap Vidyalaya
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<Star />}
                />
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;