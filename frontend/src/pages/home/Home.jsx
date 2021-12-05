import React from 'react'
import "./Home.css"
import Meteo from './Meteo'
import Calendrier from './Calendrier'
import Traduction from '../../components/Traduction'


export default function Home() {
    return (
        <div className="home">

            <div className="items1">
                <div className="itemsComponent1">
                    <Meteo />
                </div>

                <div className="itemsComponent1">
                    <Calendrier />
                </div>

                <div className="itemsComponent1">
                    <Traduction />
                </div>

            </div>

            <div className="items2">

                <div className="itemsComponent2">
                    <span className="itemsTitle">La carte</span>
                    <div className="carteContainer">
                        google maps j'imagine text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />
                    </div>
                </div>

                <div className="itemsComponent2">
                    <span className="itemsTitle">Quelques photos de là où vous êtes</span>
                    <div className="photoContainer">
                        Photo de là où il est
                    </div>
                </div>

            </div>

            <div className="items3">

                <div className="itemsComponent3">
                    <span className="itemsTitle">Les trains prêts à partir</span>
                    <div className="trainContainer">
                        trains depuis là où il est text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />text<br />
                    </div>
                </div>

            </div>

        </div>)
}