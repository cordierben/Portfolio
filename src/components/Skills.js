import '../style/Skills.css';
import React, { useState,useEffect } from 'react'
import me from '../images/me.png';
import { Progress } from '../objects/Progress';
import handleViewport from 'react-in-viewport';
import TableOfSkills from './TableOfSkills';
function Skills() {
  
  

  return (
    <div className="skills">
        <h1 id="backTitle">About</h1>
        <h2 id="title">About</h2>
        <Pic/>
        <div id="skillList">
            <div id="firstSkills">
              <div id="desc">
                <h2>I'm a 22 years old web and mobile developper based in Paris.</h2>
                <h6>I considered myself as full-stack, but with a backend background.
                When I'm not creating a website, you will find me playing music or videogames.</h6>
              </div>
              <div id="frontend">
                  <h3>Front-end</h3>
                  <ViewportFrontend />
              </div>
            </div>
            <div id="secondSkills">
              <div id="backend">
                  <h3>Back-end</h3>
                  <ViewportBackend/>
              </div>
              <TableOfSkills/>
            </div>
            
          </div>
          
      </div>
  )
}

export default Skills;


const Picture = (props) => {
  const { inViewport, forwardedRef, enterCount } = props;
  console.log(enterCount)
  if (enterCount >= 1) {
      return (
        <div ref={forwardedRef}>
          <img src={me} id="me" ></img>
        </div>
      )
  }
  return (
        <div ref={forwardedRef}></div>
  );
}
const Pic = handleViewport(Picture);

const Backend = (props) => {
  const { inViewport, forwardedRef, enterCount } = props;
  let width=0;
  if(window.innerWidth>750) width=500
  else width=300
  if (enterCount >= 1) {
      return (
          <div ref={forwardedRef} >
              <h4>Node JS</h4>
            <Progress width={width} percent={0.8}/>
            <h4>PHP</h4>
            <Progress width={width} percent={0.6}/>
            <h4>SQL</h4>
            <Progress width={width} percent={0.9}/>
            <h4>Kotlin</h4>
          <Progress width={width} percent={0.8}/>
          </div>
      )
  }
  return (
      <div ref={forwardedRef}>
          <h4>Node JS</h4>
          <Progress width={width} percent={0}/>
          <h4>PHP</h4>
          <Progress width={width} percent={0}/>
          <h4>SQL</h4>
          <Progress width={width} percent={0}/>
          <h4>Kotlin</h4>
          <Progress width={width} percent={0}/>
      </div>
  );
}
const ViewportBackend = handleViewport(Backend);

const Frontend = (props) => {
const { inViewport, forwardedRef, enterCount } = props;
let width=0;
if(window.innerWidth>750) width=500
else width=300
if (enterCount >= 1) {
    return (
        <div ref={forwardedRef}>
            <h4>React ES6</h4>
            <Progress width={width} percent={0.7}/>
            <h4>HTML / CSS</h4>
            <Progress width={width} percent={0.8}/>
            <h4>XML for Android</h4>
            <Progress width={width} percent={0.9}/>
        </div>
    )
}
return (
    <div ref={forwardedRef}>
        <h4>React ES6</h4>
          <Progress width={width} percent={0}/>
          <h4>HTML / CSS</h4>
          <Progress width={width} percent={0}/>
          <h4>XML for Android</h4>
          <Progress width={width} percent={0}/>
    </div>
);
}
const ViewportFrontend = handleViewport(Frontend);

