import React from 'react';
import './style.css';
import Bio from '../../components/Bio';
import Education from '../../components/Education';
import Famjam from '../../components/Famjam';



const AboutMe = props => {
    return (
        <div>
            <Bio/>
            <Education/>
            <Famjam/>
        </div>
    );
}

export default AboutMe;