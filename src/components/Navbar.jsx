import React from "react";
import instaLogo from "../images/icons/insta-logo.png"
import instaHeart from "../images/icons/insta-heart.png"
import instaMessage from "../images/icons/insta-message.png"

export default function Navbar() {
    return (
        <nav>
            <img src={instaLogo} class="insta-logo"/>
            <img src={instaHeart} class="insta-heart"/>
            <img src={instaMessage} class="insta-message" />
        </nav>
    )
}