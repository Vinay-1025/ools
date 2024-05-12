import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/fav.png'
import admin from '../../assets/admin.png'
import menu from '../../assets/r2b.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : '' }`}>
            <img src={logo} alt="logo" className='logo'/>
            <ul className={mobileMenu ? '' : 'menu-toggle'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={-250} duration={500}>About</Link></li>
                <li><Link to='programs' smooth={true} offset={-230} duration={500}>Student</Link></li>
                <li><Link to='campus' smooth={true} offset={-230} duration={500}>Gallery</Link></li>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Progress</Link></li>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Statistics</Link></li>
                <li><Link to='contact' smooth={true} offset={-230} duration={500}><button className='btn'>Contact Us</button></Link></li>
                <li><Link to='hero' smooth={true} offset={0} duration={500}><img src={admin} alt="admin" className='icon-nav'/></Link></li>
            </ul>
            <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar
