import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Contact = () =>{
    const [letterClass, setLetterClass] = useState("text-animate")
    const refForm = useRef()
         useEffect(() => {
            const timeout = setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        
            return () => clearTimeout(timeout)
        }, [])

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs
        .sendForm(
            'service_huoswu6',
            'template_p29u414',
            refForm.current,
            '74vphnDu7MEY5v10G'
        )
            .then(
                ()=> {
                    alert('Message sucessfully sent!')
                    window.location.reload(false)
                },
                () =>{
                    alert('Failed to send the message')
                }
            )
        
    }

    return(
        
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}/>
                    </h1>
                    <p>Lets build something together.</p>
                    <div className='contact-form'>
                        <form ref ={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Mandeep Bhandari,
                    <br />
                    Nepal,
                    <br />
                    P8W9+57F, Kathmandu 44600
                    <br />
                    Kathmandu
                    <span>m8211580@gmail.com</span>

                </div>
                <div className='map-wrap'>
                    <MapContainer
                        center={[27.744913, 85.318302]}
                        zoom={13}
                        style={{ height: '100%', width: '100%' }} // important!
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[27.744913, 85.318302]}>
                        <Popup>Hi this is where I live :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>
            <Loader type = "pacman" />
        </>
    )
} 
export default Contact