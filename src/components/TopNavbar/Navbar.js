import React from 'react';

const Navbar = () => {
    return (
        <header className="site-header py-lg-0 py-2 px-4 d-none d-lg-block">
            <nav className="navbar navbar-expand-lg  px-0">
                <a href="index.html" className="navbar-brand site-logo mr-3 py-0">
                    <img src="assets/img/judicial_dpart_logo.png"
                            width="125"
                            height="54"
                            alt="Site Logo"/>
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="top-navigation">
                    <ul className="nav navbar primary-menu flex-column flex-lg-row">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link nav-massage px-xl-3 px-2"><i className="fas fa-comments" data-fa-transform="flip-h"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link nav-notification px-xl-3 px-2"><i className="fas fa-bell"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link nav-user-name px-xl-3 px-2">إسم المستخدم</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link d-inline px-xl-3 px-2"><img src="./assets/img/icons/small-down.png" alt=""/>
                            <img className="mr-3" src="./assets/img/Avatar.png" alt=""/></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )}
export default Navbar;