import React from 'react';
import YoutubeIcon from "../../files/youtube-logo.png"
import  "./navbar.css";
import more from "../../files/more.png";
import notification from "../../files/notification.png";
import jack from "../../files/jack.png";
import upload from "../../files/upload.png";
import menu from "../../files/menu.png";
import search from "../../files/search.png";
import Sidebar from './sidebar/sidebar';





function Navbar({setSidebar}) {

    return (
        <nav>
            <div className='left'>
                <img src={menu} alt='' onClick={()=>setSidebar(prev=>prev===true?false: true)} />
                <img src={YoutubeIcon} alt="" className='youtube' />

            </div>
            <div className='middle'>
                <input type="text" placeholder='Search ?'/>
                <img src={search} alt="" />

                

            </div>
            <div className='right'>
                <img src={upload} alt="" />
                <img src={more} alt="" />
                <img src={notification} alt="" />
                <img src={jack} alt="" />
            </div>
        </nav>

    );
}

export default Navbar;
