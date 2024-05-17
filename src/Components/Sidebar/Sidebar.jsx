import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { BiAperture, BiCoinStack, BiHome, BiNetworkChart, BiSolidDashboard, BiSolidQuoteSingleRight, BiSolidReport } from 'react-icons/bi';
import logo from '../../assets/fav_icon.png';

const Sidebar = () => {
    const [showIconsOnly, setShowIconsOnly] = useState(false);

    const toggleMenu = () => {
        setShowIconsOnly(prevState => prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 200) {
                setShowIconsOnly(true);
            } else {
                setShowIconsOnly(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set the state based on initial window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`menu ${showIconsOnly ? 'icons-only' : ''}`}>
            <div className='sidebar-content'>
                <div className='logo' onClick={toggleMenu}>
                    <img src={logo} className='logo-icon' alt="logo" />
                    <h2>OOLS</h2>
                </div>

                <div className="menu-list">
                    <a href='#' className='item active'>
                        <BiSolidDashboard className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Dashboard</span>
                    </a>
                    <a href='#' className='item'>
                        <BiNetworkChart className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Work Place</span>
                    </a>
                    <a href='#' className='item'>
                        <BiCoinStack className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Stack</span>
                    </a>
                    <a href='#' className='item'>
                        <BiAperture className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Applications</span>
                    </a>
                    <a href='#' className='item'>
                        <BiSolidReport className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Reports</span>
                    </a>
                    <a href='#' className='item'>
                        <BiSolidQuoteSingleRight className='icon'/>
                        <span className={showIconsOnly ? 'hidden-text' : ''}>Queries</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
