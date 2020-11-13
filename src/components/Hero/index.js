import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-info'>
                <p className='hero-name'>Mad Devs</p>
                <p className='hero-description'>Engineering</p>
                <p className='hero-description hero-line'>Your Growth</p>
            </div>

            <div className='departments'>
                <p>Remote Tech Staff</p>
                <p>Software Development</p>
                <p>Infrastructure Optimisation</p>
                <p>IT Consulting</p>
            </div>
        </div>
    )
}

export default Hero