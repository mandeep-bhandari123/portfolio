
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

import { useState , useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  faGitAlt, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import {  faBrain, faRobot } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
const About =()=> {
    const [letterClass, setLetterClass] = useState("text-animate")
     useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timeout)
    }, [])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={["A","b","o","u","t",' ','m','e']}
                idx  = {15}/>
            </h1>
            <p>Hi I am Mandeep Bhandari.</p>
            <p>I'm very amibitious in AI/ML , Agentic AI, and Web dievelopment </p>
            <p>I am currently building cool project and in high school</p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubesipinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon = {faPython} color ="#3776AB" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon = {faRobot} color ="#00E5FF" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon = {faBrain} color ="#FFD700" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon = {faReact} color ="#61DBFB" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon = {faJsSquare} color ="#F7DF1E" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon = {faGitAlt} color ="#F05032" />
                </div>
            </div>
        </div>
    </div>
    <Loader type='pacman' />
    </>
    )
}

export default About