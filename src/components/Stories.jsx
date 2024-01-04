import React from "react";
import plusSign from "../../public/plus-sign.png"

export default function Stories(props) {
    let userText
    if (props.isSelf) {
        userText = "Your story"
    } else {
        userText = props.username
    }
  

    return (
        <>
            <div class="story-template">
                {props.isSelf && <img src={plusSign} class="plus" />}
                <img src={props.profilePic} class="story-pfp"/>
                <p class="story-name">{userText}</p>
            </div>
        </>
    )
}