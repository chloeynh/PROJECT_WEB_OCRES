import React from 'react'
import "./Sidebar.css"
import home from "./home.png"
import calendrier from "./calendrier.png"
import image from "./image.png"
import map from "./map.png"
import meteo from "./meteo.png"
import traduction from "./traduction.png"
import train from "./train.png"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <img src={home} className="icone"/> Home
                        </li>
                        <li className="sidebarListItem">
                        <img src={meteo} className="icone"/> Météo
                        </li>
                        <li className="sidebarListItem">
                        <img src={map} className="icone"/> Carte
                        </li>
                        <li className="sidebarListItem">
                        <img src={traduction} className="icone"/> Traduction
                        </li>
                        <li className="sidebarListItem">
                        <img src={calendrier} className="icone"/> Calendrier
                        </li>
                        <li className="sidebarListItem">
                        <img src={train} className="icone"/> Train
                        </li>
                        <li className="sidebarListItem">
                        <img src={image} className="icone"/> Photo
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}