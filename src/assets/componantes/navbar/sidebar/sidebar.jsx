import React from 'react';
import "./sidebar.css"

import home from "../../../files/home.png";
import gaming from "../../../files/game_icon.png";
import automobiles from "../../../files/automobiles.png";
import sports from "../../../files/sports.png";
import entertainment from "../../../files/entertainment.png";
import technology from "../../../files/tech.png";
import music from "../../../files/music.png";
import blogs from "../../../files/blogs.png";
import news from "../../../files/news.png";

import jack from "../../../files/jack.png";
import mrbeast from "../../../files/tom.png";
import simon from "../../../files/simon.png";
import cameron from "../../../files/cameron.png";
import gerard from "../../../files/gerard.png";


const Sidebar = ({sidebar,setCategory,category}) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "sm-sidebar" }`}>
            <div className={category== 0 ? "active": ""} onClick={()=>setCategory(0)}>
                <img src={home} alt="" />
                <h3> home</h3>
            </div>
            <div  className={category== 20 ? "active": ""} onClick={()=>setCategory(20)}>
                <img src={gaming} alt="" />
                <h3> gaming</h3>
            </div>
            <div  className={category== 2 ? "active": ""} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="" />
                <h3> automobiles</h3>
            </div>
            <div  className={category== 17 ? "active": ""} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" />
                <h3> sports</h3>
            </div>
            <div  className={category== 24 ? "active": ""} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" />
                <h3>entertainment </h3>
            </div>
            <div  className={category== 28 ? "active": ""} onClick={()=>setCategory(28)}>
                <img src={technology} alt="" />
                <h3>technology </h3>
            </div>
            <div  className={category== 10 ? "active": ""} onClick={()=>setCategory(10)}>
                <img src={music} alt="" />
                <h3> music</h3> 
            </div>
            <div  className={category== 22 ? "active": ""} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" />
                <h3> blogs</h3> 
            </div>
            <div  className={category== 25 ? "active": ""} onClick={()=>setCategory(25)}>
                <img src={news} alt="" />
                <h3> news</h3> 
            </div>
            <hr/>

            <h2> subscribed</h2>

            <div>
                <img src={jack} alt="" className='br50' />
                <h3> jack</h3> 
            </div>
            <div>
                <img src={mrbeast} alt="" className='br50' />
                <h3> MrBeast</h3> 
            </div>
            <div>
                <img src={simon} alt="" className='br50' />
                <h3> simon</h3> 
            </div>
            <div>
                <img src={gerard} alt="" className='br50' />
                <h3> gerard</h3> 
            </div>
            
            <div>
                <img src={cameron} alt="" className='br50' />
                <h3> cameron</h3> 
            </div>
            



            
        </div>
    );
}

export default Sidebar;