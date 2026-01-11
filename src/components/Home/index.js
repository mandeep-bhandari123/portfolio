import './index.scss';
import { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-m.png';
import LogoTitle_1 from '../../assets/images/logo-b.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const firstnameArray=['a','n','d','e','e','p']
    const lastnameArray=["h","a","n","d","a","r","i"]
    useEffect(() => {
    const timeout = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeout)
}, [])

    return(
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _12`}>,</span>
                 <br />
                 <span className={`${letterClass} _13`}>I</span>
                 <span className={`${letterClass} _14`}>'</span>
                 <span className={`${letterClass} _15`}>m</span>
                 
                 <img src={LogoTitle} alt="developer" /> 
                <AnimatedLetters letterClass={letterClass} strArray={firstnameArray} idx={16} /> 
                <img src={LogoTitle_1} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={lastnameArray} idx={21} />


                <br />
                

                </h1>
                <br />
                <br />
                <h2>Full Stack Developer and AI/ML Engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    )
}
export default Home;
