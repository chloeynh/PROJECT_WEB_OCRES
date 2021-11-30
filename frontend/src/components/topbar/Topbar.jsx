import React from 'react'
import "./Topbar.css"
import reglages from "./reglages.png"
import carte from "./carte.png"


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper"> 
                <div className="topLeft">
                    <img src={carte} className="carte"/>
                    <h2 className="logo">Mon guide de voyage</h2>
                </div>
                <div className="topRight"><img src={reglages} className="reglage"/></div>
            </div>

        </div>)
}
