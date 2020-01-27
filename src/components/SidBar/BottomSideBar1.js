import React from 'react';
import MainPageImg  from '../img/judicial_dpart_logo.png';

function BottomSideBar1 () {
    return (
        <ul className="list-unstyled bg-white navbar justify-content-center d-lg-none p-0">
            <li className="nav-item">
                <a href="index.html" className="navbar-brand site-logo mr-0 px-0 py-0">
                    <img src={MainPageImg}
                        width="125"
                        height="54"
                        alt="Site Logo" />
                </a>
            </li>
        </ul>
    )}
    export default BottomSideBar1;