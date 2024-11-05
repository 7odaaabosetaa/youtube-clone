/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./video.css";
// import video from "../../files/video.mp4";
import jack from "../../files/jack.png";
import like from "../../files/like.png";
import dislike from "../../files/dislike.png";
import share from "../../files/share.png";
import save from "../../files/save.png";
import user_profile from "../../files/user_profile.jpg";
import thumbnail1 from "../../files/thumbnail1.png";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { api_key, textConventor } from "../../../data";
import moment from "moment";


const Video = () => {

    const {categoryId , videoId } = useParams();
    const [videoData, setVideoData ] = useState(null);
    const [channal, setChannal ] = useState();
    const [comments,setComments] = useState()
    const [recommended,setRecommendedd] = useState();
    const [id ,setId] = useState(videoId);
    



    const fetchingData = async () => {
        const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key}`

        await fetch(videoUrl).then(response=>response.json()).then( data => setVideoData(data.items[0]))
    }
    const fetchingChannalData = async () => {
        const channalUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${api_key}`

        await fetch(channalUrl).then(response=>response.json()).then( data => setChannal(data.items[0]))
    }

    const fetchingComments = async () => {
        const commentsUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${id}&key=${api_key}`

        await fetch(commentsUrl).then(response=>response.json()).then( data => setComments(data.items))
    }

    const fetchingRecommended = async () => {
        const videosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=eg&videoCategoryId=${categoryId}&key=${api_key}`;
            await fetch(videosUrl).then(res => res.json()).then(data => setRecommendedd(data.items));
    }
     
  


    useEffect(
        ()=>{
            fetchingData();
    },[videoData]);

    useEffect(
        ()=>{
            fetchingChannalData();
            
    },[ videoData]);

    useEffect(
        ()=>{
            fetchingComments();
            
    },[ videoData,videoId,id]);

    useEffect(
        ()=>{
            fetchingRecommended();
            console.log(recommended)
            
            
    },[ videoData,videoId ]);
    


    return (
        <div className="video-page">
            <div className="video">
                {/* <video src={video} controls autoPlay muted></video> */}
                <iframe  src= {`https://www.youtube.com/embed/${id}`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                <h2>{videoData ?videoData.snippet.title: "loading"}</h2>
                <div className="details">
                    <p> {videoData? textConventor(videoData.statistics.viewCount) :""} views . {videoData ? moment(videoData.snippet.publishedAt).fromNow() :''} </p>
                    <div>
                        <img src={like} alt="" />
                        {videoData?textConventor(videoData.statistics.likeCount) :""}
                        <img src={dislike} alt="" />
                        
                        <img src={share} alt="" />
                        share
                        <img src={save} alt="" />
                    </div>
                </div>
                <hr />
                <div className="chanal">
                    <div>
                        <img src={channal ? channal.snippet.thumbnails.default.url: ""} alt="" />
                        <div className="text ">
                            <h3>{videoData? videoData.snippet.channelTitle :""}</h3>
                            <p>{channal?  textConventor(channal.statistics.subscriberCount): ""} subscribes</p>
                        </div>
                    </div>
                    <button> subscribe </button>
                </div>

                <p className="chanal-details">
                    {videoData? videoData.snippet.description.slice(0,300) :""}
                    
                </p>
            

            <div className="comments-section">
                <hr />
                            <p>{channal ? textConventor(videoData.statistics.commentCount):""} comments</p>
                            
                            {comments ? comments.map((comment,index)=>{
                                return (
                                <div className="comment-container" key={index}>
                                    <img src={comment ? comment.snippet.topLevelComment.snippet.authorProfileImageUrl:jack}  />
                                    <div className="comment">
                                        <h3>{comment ? comment.snippet.topLevelComment.snippet.authorDisplayName:""} <span> {comment ? moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow():""}</span> </h3>
                                        <p>
                                            {comment ? comment.snippet.topLevelComment.snippet.textDisplay.slice(0,200) :""}
                                            
                                        </p>
                                        <img src={like} alt="" />
                                        {comment ?textConventor(comment.snippet.topLevelComment.snippet.likeCount):""}
                                        <img src={dislike} alt="" />
                                        
                                    </div>
                
                                </div>
                                )
                            }) :''}
 
                </div>
            </div>

                {/* recommended section */}
            <div className="recommended">
                {recommended ?  recommended.map((video,index)=>{
                    return(
                    <div to={""} className="vid" key={index} onClick={()=>
                       setId(video.id)
                    
                    } >
                    <img src={video.snippet.thumbnails.default.url} alt="recommendd" />
                    <div className="text"> <h4>{video.snippet.title}</h4>
                   <p> {video.snippet.channelTitle}</p>
                    <span> {textConventor(video.statistics.viewCount)}</span>
                    </div>
                </div>
                )
                
                }) : ""}
              
                
            </div>
        </div>
    );
};

export default Video;
