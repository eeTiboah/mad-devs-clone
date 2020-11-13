import React from 'react'
import Tech from '../TechTools'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className='jobs'>
                <p className='title'>We create IT jobs for: </p>
                <div className='apps'>
                    <div>
                        <p>Content Streaming</p>
                        <p>Transportation</p>
                    </div>
                    <div>
                        <p>Health Tech</p>
                        <p>IOTs</p>
                    </div>
                    <div>
                        <p>E-Commerce</p>
                        <p>AdTech</p>
                    </div>
                    <div>
                        <p>E-Learning</p>
                        <p>Fintech</p>
                    </div>
                    <div>
                        <p>Serverless</p>
                        <p>BYOD</p>
                    </div>
                    <div>
                        <p>Blockchain</p>
                        <p>FoodTech</p>
                    </div>
                </div>
                <div className='country-flags'>
                    <img src='images/ghana.svg' alt='Ghana Flag' width='50' height='50'/>
                    <img src='images/belgium.svg' alt='Belgium Flag' width='50' height='50' />
                    <img src='images/united-kingdom.svg' alt='United Kingdom Flag' width='50' height='50' />
                    <img src='images/united-states-of-america.svg' alt='United States of America Flag' width='50' height='50' />
                    <img src='images/russia.svg' alt='Russia Flag' width='50' height='50' />
                    <img src='images/germany.svg' alt='Germany Flag' width='50' height='50' />
                </div>
            </div>

            <Tech />
        </div>
    )
}

export default About