import '../style/Navbar.css';
import { FaGithub,FaLinkedinIn,FaInstagram } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber'
import Box from '../objects/scene.js';

function Social(props) {


    return (
    <div>
        <ul  id="social">
                <li>
                    <div id="canvas">
                        <Canvas>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <Box position={[0, 0, 1]} />
                        </Canvas>
                    </div>
                </li>
                <li><a href="https://www.linkedin.com/in/benoît-cordier/"><FaLinkedinIn className='icon' size={25}/></a></li>
                <li><a href="https://github.com/cordierben"><FaGithub className='icon' size={25}/></a></li>
                <li><a href="https://www.linkedin.com/in/benoît-cordier/"><FaInstagram className='icon' size={25}/></a></li>
        </ul >
        
    </div>
  );
}

export default Social;
