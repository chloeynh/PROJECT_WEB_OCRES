import React from 'react'
import "./Sidebar.css"
import home from "./home.png"
import calendrier from "./calendrier.png"
import image from "./image.png"
import map from "./map.png"
import meteo from "./meteo.png"
import traduction from "./traduction.png"
import avion from "./avion.png"
import monnaie from "./monnaie.png"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <img src={home} className="icone" alt="forecast"/> Home
                        </li>
                        <li className="sidebarListItem">
                        <img src={meteo} className="icone" alt="forecast"/> Météo
                        </li>
                        <li className="sidebarListItem">
                        <img src={calendrier} className="icone" alt="forecast"/> Calendrier
                        </li>
                        <li className="sidebarListItem">
                        <img src={map} className="icone" alt="forecast"/> Carte
                        </li>
                        <li className="sidebarListItem">
                        <img src={traduction} className="icone" alt="forecast"/> Traduction
                        </li>
                        <li className="sidebarListItem">
                        <img src={image} className="icone" alt="forecast"/> Photo
                        </li>
                        <li className="sidebarListItem">
                        <img src={avion} className="icone" alt="forecast"/> Avions
                        </li>
                        <li className="sidebarListItem">
                        <img src={monnaie} className="icone" alt="forecast"/> Monnaie
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}