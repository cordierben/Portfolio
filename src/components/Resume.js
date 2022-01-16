import '../style/Resume.scss';
import React, { useState,useRef } from 'react';
import qr from '../images/qr.png';
import esilv from '../images/esilv.jpg';
import onepoint from '../images/onepoint.jpg';
import coventry from '../images/coventry.jpg';
import sbre from '../images/softbankrobotics.jpg';
import arrow from '../images/scroll.png';


function Resume(props) {

    

    return (
    <div class="resume">
        
        <a id="backMobile" href="http://localhost:3000">
            <div id="pseudo">Home</div>
        </a>
        <div id="scanText">Scan Me!</div>
        <div class="checkerboard">
            {[...Array(400)].map((x, i) =>
                <div key={i}/>
            )}
        </div>
        <div id="formation">
            <h2>Formation & experience</h2>
            <div class="itemFormation" onClick={e=>window.open("https://www.esilv.fr/")}>
                <img src={esilv} class="formationLogo"/>
                <div class="formationText"><div class="formationtitle">ESILV</div>Master in IT, IOT & Security<br/>2017-2022</div>
            </div>
            <div class="itemFormation" onClick={e=>window.open("https://www.groupeonepoint.com/fr/")}>
                <img src={onepoint} class="formationLogo"/>
                <div class="formationText"><div class="formationtitle">OnePoint</div>Android and Web application consultant<br/>2022</div>
            </div>
            <div class="itemFormation" onClick={e=>window.open("https://www.softbankrobotics.com/emea/en/index")}>
                <img src={sbre} class="formationLogo"/>
                <div class="formationText"><div class="formationtitle">SoftBank Robotics</div>Android application developper for robotics<br/>2021</div>
            </div>
            <div class="itemFormation" onClick={e=>window.open("https://www.coventry.ac.uk/")}>
                <img src={coventry} class="formationLogo"/>
                <div class="formationText"><div class="formationtitle">Coventry University</div>Licence in computer science<br/>2019</div>
            </div>
        </div>
    </div>
  )
}

export default Resume;

/*
<div id="backbutton" onClick={e=>props.setIndex("Home")}>
            <div><img src={arrow} width="10px" height="10px" alt="arrow"/></div>
            <div>Home</div><br/>
        </div>
        */



