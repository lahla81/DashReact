import React from 'react';
import OneMainList from './OneMainList';


function SideBarFun ({ SideBarList }) {
  return (
    <ul className="list-unstyled components p-0">
        {
            SideBarList.map(SideBar => {
                return (
                    <OneMainList 
                        key={SideBar.key} 
                        title={SideBar.title}
                        mainHref={SideBar.mainHref}
                        img={SideBar.img}
                        many={SideBar.many}
                        href={SideBar.href}
                        sub={SideBar.sub}
                    />
                )
            })
        }
    </ul>
    )
  }
  export default SideBarFun;