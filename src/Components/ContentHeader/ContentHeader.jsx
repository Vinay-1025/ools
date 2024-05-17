import React from 'react';
import './ContentHeader.css';
import { BiSearch, BiNotification } from 'react-icons/bi'; // Corrected import

const ContentHeader = () => {
    return (
        <div className="content-header">
            <h1 className="header-title">Dashboard</h1>
            <div className="header-activity">
                <div className="search-box">
                    <input type="text" placeholder="Search here...." />
                    <BiSearch className="icon" /> {/* Corrected icon name */}
                </div>
                <div className="notify">
                    <BiNotification className="icon" /> {/* Corrected icon name */}
                </div>
            </div>
        </div>
    );
}

export default ContentHeader; // Corrected export
