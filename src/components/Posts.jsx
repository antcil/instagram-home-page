import React from "react";
import me from "../../public/Headshot.jpeg"
import ellipsis from "../../public/ellipsis.png"
import heart from "../images/icons/insta-heart.png"
import comment from "../images/icons/comment.png"
import sendTo from "../images/icons/send-to.png"
import savePost from "../images/icons/save-post.png"





export default function Posts(props){
    return (
        <div class="post">
            <div class="poster">
                <img src={props.postPfp} class="post-pfp" />
                <div class="name-location" >
                    <h1>{props.username}</h1>
                    <p>{props.location}</p>
                </div>
                <img src={ellipsis} class="ellipsis" />
            </div>
            <hr className="line" />
            <img src ={props.postPic} class="post-pic" />
            <div class="post-icons">
                <img src={heart} class="post-heart" />
                <img src={comment} class="post-comment" />
                <img src={sendTo} class="post-send" />
                <img src={savePost} class="post-save" />
            </div>
            <h2 class="likes">{props.likes} likes</h2>
            <span class="caption-name">{props.username}</span>
            <span class="caption-desc">{props.caption}</span>
            <p class="view-comments">View all {props.comments} comments</p>
            <div class="add-comment">
                <img src={me} class="comment-pfp" />
                <p>Add a comment...</p>
            </div>
            <p class="post-date">{props.time} ago</p>
            <hr class="line"/>
        </div>
    )
}