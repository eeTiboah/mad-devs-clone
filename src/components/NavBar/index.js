import React, {useState} from 'react'
import './NavBar.css'

const NavBar = ()=>{

    const ghSVG = 'images/ghana.svg';

    const [show, setShow] = useState(false)

    const showText = ()=>{
        if (window.scrollY > 20){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    window.addEventListener('scroll', showText)


    return (
        <div className='navbar'>
            <div>
                <svg viewBox="0 0 256 446" className="header-image" data-v-cad16ea4="" data-v-538d7afe="">
                    <g fill="none" fillRule="evenodd" data-v-cad16ea4=""> 
                        <path fill="#CA2228" d="M237.23 1.34l-109.48 50-109.48-50C10.59-2.83 0 3.16 0 13.87v208.77c0 8 
                        4.79 14.52 11.29 14.72a3.6 3.6 0 0 0 .9 0h.65l71.75-7.45L71 210.54c-5.94-8.29 1.26-15.49 
                        8.88-12.69 1.53.56 3.19-.18 4.68.21l-18-60.72c-.07-.21-.13-.42-.19-.63l-.14-.46v-.14a10.39 
                        10.39 0 0 1 19.47-6.7v.09c.17.34 20.65 50.87 20.65 50.87a10.95 10.95 0 0 1 21.62.57 11 11 0 0 1 
                        11.03-9.52c5.35 0 9.5 4.73 10.43 9.83l12.17-34.3a10.44 10.44 0 0 1 20.24 3.52v.32L171 
                        229.84l71.67 7.45h.65a3.6 3.6 0 0 0 .9 0c6.5-.2 10.93-6.68 
                        10.93-14.69V13.82c-.01-10.7-10.24-16.65-17.92-12.48z" data-v-cad16ea4=""></path>
                    </g>
                </svg>
                <div className={show ? 'no-show' : 'name'}>
                    <p className='mad'>MAD</p>
                    <p className='span'>DEVS</p>
                </div>
            </div>
            <div className='nav-buttons'>
                <button className='nav-info'>About</button>
                <button className='nav-info'>Services</button>
                <button className='nav-info'>Projects</button>
                <button className='nav-info'>Careers</button>
                <button className='nav-info'>Blog</button>
            </div>
            <div className='nav-contacts'>
                <a className="nav_p" href="tel:+233248569872">
                    <img className="ghana-flag" src={ghSVG} alt="Ghana Flag" />
                    <p>+233248569872</p>
                </a>
                <button className="contact">Contact me</button>
            </div>
        </div>
    )
}

export default NavBar