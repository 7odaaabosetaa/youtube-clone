/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Home.css"
// import thumbnail1 from "../../files/thumbnail1.png";
// import thumbnail2 from "../../files/thumbnail2.png";
// import thumbnail3 from "../../files/thumbnail3.png";
// import thumbnail4 from "../../files/thumbnail4.png";
// import thumbnail5 from "../../files/thumbnail5.png";
// import thumbnail6 from "../../files/thumbnail6.png";
// import thumbnail7 from "../../files/thumbnail7.png";
// import thumbnail8 from "../../files/thumbnail8.png";
// import jack from "../../files/jack.png";
import Sidebar from "../../componantes/navbar/sidebar/sidebar";
import { api_key, textConventor } from "../../../data";
import { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";



function Home({sidebar}) {

    const [category,setCategory] = useState(0);
    const [data,setData] = useState([]);
    
    const fetchData = async ()=> {
            const videosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=eg&videoCategoryId=${category}&key=${api_key}`;
            await fetch(videosUrl).then(res => res.json()).then(data => setData(data.items));
        }

  

    useEffect(()=>{
        fetchData();
    },[category]);



    

    return (

    <>
        <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
        <div className="Home">

            { data == ""? <div className="loader"> </div> : data.map((item,index)=>{
           
                 return(
                            
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
                <img src={item.snippet.thumbnails.high.url}  alt="" className="thumbnail" />
                <div className="info">
                <div className="avatar">
                    {/* <img src={item.snippet.thumbnails.high.url} alt="" /> */}
                </div>
                <div className="text">
                    <h3>{item.snippet.title}</h3>
                    <p>{item.snippet.channelTitle}</p>
                    <span>{textConventor(item.statistics.viewCount)} views . {moment(item.snippet.publishedAt).fromNow()} </span>
                </div>
                </div>
            </Link> 
            
        
                    )
            })




            }

        </div>
    </>
    );
}

export default Home;
