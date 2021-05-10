import "./RoundButtons.css"
import {ROUND_BUTTON} from "../../constants/roundButtons";
import React from "react";
import {Add, East, Menu, Notification, Star} from "../../assets";

function RoundButtons({ radius = ROUND_BUTTON.border, classCSS, color, colorBlock}) {

    return (
        <div style={{backgroundColor: colorBlock}}>
            <button className={classCSS} style={{borderRadius: radius, backgroundColor: color}}>
                <Menu></Menu>
            </button>
            <button className={classCSS} style={{borderRadius: radius, backgroundColor: color}}>
                <Star></Star>
            </button>
            <button className={classCSS} style={{borderRadius: radius, backgroundColor: color}}>
                <Add></Add>
            </button>
            <button className={classCSS} style={{borderRadius: radius, backgroundColor: color}}>
                <East></East>
            </button>
            <button className={classCSS} style={{borderRadius: radius, backgroundColor: color}}>
                <Notification></Notification>
            </button>
        </div>
    )
}

export default RoundButtons