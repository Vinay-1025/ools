import React from 'react';
import './Profile.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import pro from '../../assets/appadam.png'
import { BiBook } from 'react-icons/bi';


const courses = [
    {
        title: 'English',
        duration: '2hrs',
        icon: <BiBook />,
    },
    {
        title: 'Java',
        duration: '2hrs',
        icon: <BiBook />,
    },
    {
        title: 'React.Js',
        duration: '2hrs',
        icon: <BiBook />,
    },
];

const Profile = () => {
    return (
    <div className='profile'>
        <ProfileHeader />

        <div className='user-profile'>
            <div className="user-detail">
                <img src={pro} alt="" />
                <h3 className="username">
                    Venky
                </h3>
                <span className="profession">Student</span>
            </div>

            <div className="user-courses">
                {courses.map((courses) => (
                    <div className="course">
                        <div className="course-details">
                            <div className="course-cover">
                                {courses.icon}
                            </div>
                            <div className="course-name">
                                <h5 className="title">
                                    {courses.title}
                                </h5>
                                <span className="course-duration">
                                    {courses.duration}
                                </span>
                            </div>
                        </div>
                        <div className="action">:</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Profile
