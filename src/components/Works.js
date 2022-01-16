import '../style/Works.css';
import React, { useState,useEffect } from 'react'
import WorkItem from './WorkItem';
import streaks from '../images/streaks.png';
import duels from '../images/duels.png';
import { Progress } from '../objects/Progress';
import handleViewport from 'react-in-viewport';


function Works() {
  
  return (
    <div className="works">
        <h1 id="backTitle">Works</h1>
        <h2 id="title">Works</h2>
        <WorkItem id="1" type="Full Stack Development" title="Streaks.fr" desc="Full development of the website of a clothes productor" image={streaks} size="100%"  margin="25%" sizeMobile="300%" marginMobile="0%" link="http://streaks.fr"/>
        <WorkItem id="2" type="Mobile Application" title="Duels" desc="Development of an Android application based on social and music" image={duels} size="40%"   margin="50%" sizeMobile="150%" marginMobile="70%" link="http://streaks.fr"/>
        <div id="finalProgress"><ViewportProgress /></div>
    </div>
  )
}

export default Works;


const Backend = (props) => {
  const { inViewport, forwardedRef, enterCount } = props;
  let width=0;
  if(window.innerWidth>750) width=window.innerWidth-350
  else width=window.innerWidth-100
  if (enterCount >= 1) {
      return (
          <div ref={forwardedRef} >
            <Progress width={width} percent={1}/>
          </div>
      )
  }
  return (
      <div ref={forwardedRef}>
          <Progress width={width} percent={0}/>
      </div>
  );
}
const ViewportProgress = handleViewport(Backend);


