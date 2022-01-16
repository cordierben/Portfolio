import '../style/Navbar.css';
import { useState } from 'react';
import Box from '../objects/scene.js';
import { Canvas } from '@react-three/fiber';
import { FaGithub,FaLinkedinIn,FaInstagram } from 'react-icons/fa';

function Navbar(props) {

    const[color,setColor] = useState('rgb(18,18,18,0)')

    function get(value){
        props.setElem(value)
    }

    window.addEventListener('scroll', () => {
        let checkpoint=300
        const currentScroll = window.pageYOffset;
        let opacity=0
        if (currentScroll > checkpoint) {
            
            opacity = currentScroll  / (checkpoint*3);
        }
        setColor('rgb(18,18,18,'+opacity+')')
    })

    return (
    <div className="nav" style={{backgroundColor:color}}>
        <div id="home">
            <a href="http://localhost:3000">
                <div id="logo">
                    
                    <div id="pseudo">Noibe</div>
                </div>
            </a>
        </div>
        <div id="navigation">
            <div id="categories">
                <div className="cat" onClick={e=>get("Home")}>Home</div>
                <div className="cat" onClick={e=>get("Skills")}>About</div>
                <div className="cat" onClick={e=>get("Work")}>Work</div>
                <div className="cat" onClick={e=>get("Contact")}>Contact</div>
            </div>
            
        </div>
    </div>
  );
}

export default Navbar;

/*
<Canvas>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <Box position={[0, 0, 2]} />
                    </Canvas>

                    <ul  id="social">
                <li><a href="https://www.linkedin.com/in/benoît-cordier/"><FaLinkedinIn/></a></li>
                <li><a href="https://github.com/cordierben"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/benoît-cordier/"><FaInstagram/></a></li>
            </ul >
                    */
