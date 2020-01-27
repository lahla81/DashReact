import React from 'react';
import SideBarFun from './SideBarFun';
import SideBarList from './SideBarList';
import BottomSideBar1 from './BottomSideBar1';
import BottomSideBar2 from './BottomSideBar2';
import BottomSideBar3 from './BottomSideBar3';

const SidBar = () => {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h4>قطاع مساندة المحاكم والمتعاملين</h4>
            </div>
            <SideBarFun SideBarList = {SideBarList} />
            <BottomSideBar1 />
            <BottomSideBar2 />
            <BottomSideBar3 />
        </nav>
    )}
export default SidBar;