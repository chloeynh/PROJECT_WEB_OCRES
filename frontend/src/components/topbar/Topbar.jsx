import React from 'react'
import "./Topbar.css"
import reglages from "./reglages.png"


export default function Topbar() {
    return (

        <div class="header">
            <div class="sides"> <img src={reglages} className="reglages"/></div>
            <div class="info">
                <h1>Mon guide de voyage</h1>
                <div class="meta">
                    By Chloé Y NHAO on November 29, 2021
                </div>
            </div>
        </div>)
        
}
