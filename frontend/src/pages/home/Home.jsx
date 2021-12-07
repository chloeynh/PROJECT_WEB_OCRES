import React from 'react'
import "./Home.css"
import Meteo from './Meteo'
import Calendrier from './Calendrier'
import Image from './Images'
import Flights from './Flights'
import Monnaie from './Monnaie'
import Carte from './Carte'
//import Traduction from './Traduction'


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
                    <Carte />
                </div>
            </div>

            <div className="items3">
                <div className="itemsComponent3">
                    <Flights />
                </div>
            </div>

            <div className="items2">
                <div className="itemsComponent2">
                    <span className="itemsTitle">Traduction</span>
                    {/* <Traduction /> */}
                </div>

                <div className="itemsComponent2">
                    <Image />
                </div>
            </div>

            <div className="items3">
                <div className="itemsComponent3">
                    {/* <Monnaie /> */}
                    <canvas id="graph"></canvas>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
                </div>
            </div>

        </div>)
}