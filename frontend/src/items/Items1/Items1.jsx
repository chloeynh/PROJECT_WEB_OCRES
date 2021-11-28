import React from 'react'
import "./Items1.css"

export default function Items1() {
    return (
        <div className="items">

        <div className="items1">   
            <div className="itemsComponent1">
                <span className="meteoTitle">Météo</span>
                <div className="meteoContainer">
                <span className="meteoLocation">Paris</span><br/>
                <span className="meteoTemperature">5°C</span>
                </div>
            </div>
            
            <div className="itemsComponent1">
                <span className="calendrierTitle">Calendrier</span>
                <div className="calendrierContainer">
                Jsp le jour 
                </div>
            </div>

            <div className="itemsComponent1">
                <span className="traductionTitle">Un mot pour vous</span>
                <div className="traductionContainer">
                quelques mots en fonction du pays où il est 
                </div>
            </div>

        </div> 

        <div className="items2">

            <div className="itemsComponent2">
                <span className="carteTitle">La carte</span>
                <div className="carteContainer">
                google maps j'imagine
                </div>
            </div>
            
            <div className="itemsComponent2">
                <span className="photoTitle">Quelques photos de là où vous êtes</span>
                <div className="photoContainer">
                Photo de là où il est
                </div>
            </div>

        </div>

        <div className="items3">

            <div className="itemsComponent3">
                <span className="trainTitle">Les trains prêts à partir</span>
                <div className="trainContainer">
                trains depuis là où il est
                </div>
            </div>

        </div>

        </div>
        
        )
}