import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>OOLS</h1>
            <p>
                ifbiu4tcngiurhiughfgiruhncmhogihrih
            </p>
            <button className='btn'>View<img src={dark_arrow}  alt="arrow"/></button>
        </div>
    </div>
    )
}

export default Hero
