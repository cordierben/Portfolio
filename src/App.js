import './style/App.css';
import React,{useRef,useState} from 'react';
import Navbar from './components/Navbar';
import { Canvas } from '@react-three/fiber'
import Box from './objects/scene.js';
import Typical from 'react-typical';
import arrow from './images/scroll.png';
import me from './images/me.jpg';
import colorful from './images/colorful.jpg';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import useWindowSize from "./utils/useWindowSize";
import Resume from './components/Resume';
import Social from './components/Social';

function App() {

  const[index,setIndex] = useState("Home")
  const home = useRef(null)
  const skills = useRef(null)
  const works = useRef(null)
  const contact = useRef(null)

  const scrollTo=(val)=>{
    if(index=="Resume") setIndex("Home")
    if(val=="Home") window.scrollTo({top:home.current.offsetTop,behavior:"smooth"})
    if(val=="Skills") window.scrollTo({top:skills.current.offsetTop,behavior:"smooth"})
    if(val=="Work") window.scrollTo({top:works.current.offsetTop,behavior:"smooth"})
    if(val=="Contact") window.scrollTo({top:contact.current.offsetTop,behavior:"smooth"})
  }

  return (
    <div className="App" ref={home}>
        <Navbar setElem={e=>scrollTo(e)}/>
        <div id="background">
          <img src={colorful} />
        </div>
        
        {index=="Home"?(
          <div>
            <div id="mainTitle">
              <div id="intro">
                <div>Hi! I'm <div style={{color:'orange'}}>Benoît Cordier</div></div><br/>
                A full stack web/mobile developper
              </div>
              

              <div id="link">
                  <div className="btn" onClick={e=>setIndex("Resume")}>Resume</div>
                  <div onClick={e=>scrollTo("Skills")}>About</div>
                  <div onClick={e=>scrollTo("Work")}>Works</div>
                  <div onClick={e=>scrollTo("Contact")}>Contact</div>
              </div>
            </div>
            <Social/>
            <div id="scroll">
                Scroll down<br/>
                <img src={arrow} width="10px" height="10px" alt="arrow"/>
            </div>
            <div id="fade"></div>
            <div ref={skills}></div>
            <Skills />
            <div ref={works}></div>
            <Works/>
            <div ref={contact}></div>
            <Contact/>
          </div>
        ):(
          <Resume setIndex={e=>setIndex(e)}/>
        )}
        
    </div>
  );
}

export default App;


