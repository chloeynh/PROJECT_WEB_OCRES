import React from 'react'
import "./Topbar.css"
import reglages from "./reglages.png"


export default function Topbar() {
    return (

        <div className="topbar">
            <div className="sides"> <a href="#"> <img src={reglages} className="reglages"/> </a> </div> 
            <div className="info">
                <h1>Mon guide de voyage</h1>
                <div className="meta">
                    By Joé LHUERRE and Chloé Y NHAO on November 29, 2021 
                </div>
            </div>
        </div>)
        
}
