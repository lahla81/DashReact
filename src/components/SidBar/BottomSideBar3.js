import React from 'react';
import Avatar  from '../img/Avatar.png';
import SmallDown  from '../img/icons/small-down.png';

function BottomSideBar3 () {
    return (
        <ul className="list-unstyled navbar justify-content-center d-lg-none p-0">
            <li className="nav-item">
                <a href="offer.html" className="nav-link nav-user-name px-2">إسم المستخدم</a>
            </li>
            <li className="nav-item">
                <a href="app.html" className="nav-link d-inline px-2">
                    <img src={SmallDown} alt="" />
                    <img className="mr-3" src={Avatar} alt="" />
                </a>
            </li>
        </ul>
    )}
    export default BottomSideBar3;