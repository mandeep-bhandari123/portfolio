import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

import { ReactComponent as OutlineSVG } from '../../../assets/images/file.svg'
import './index.scss'

const Logo = () => {
  const outlineRef = useRef()
  const solidLogo = useRef()
  const bgRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    const paths = outlineRef.current.querySelectorAll('path')
    gsap.set(paths, { drawSVG: '0%' })
    gsap.set(solidLogo.current, { opacity: 0 }) // start invisible

    const tl = gsap.timeline()
    
  
    
    // Draw SVG outline
    tl.to(paths, {
      drawSVG: '100%',
      duration: 3.5,
      stagger: 0.1,
      ease: 'power2.inOut',
  }) 
    
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <OutlineSVG className="outline-svg" ref={outlineRef} />
      
    </div>
  )
}

export default Logo
