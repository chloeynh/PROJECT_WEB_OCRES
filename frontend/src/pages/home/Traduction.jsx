import React from 'react';
import axios from 'axios';

const API_key = "923b8b8bfbca71d0369fd0505d99dcf4"

export default class Traduction extends React.Component {

    constructor(props) {
         super(props);
        this.state =
        {
            city: "Paris",
            previous: "Paris",


        }
        // this.handleClick = this.handleClick.bind(this);
        // this.handleChange = this.handleChange.bind(this);


    }

    // componentDidMount() {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${API_key}`)
    //         .then(res => {
    //             this.setState(state => (
    //                 {
    //                     temp_min: res.data.main.temp_min
    //                 }
    //             ));
    //         })
    // }



    // handleClick() {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${API_key}`)
    //         .then(res => {
    //             this.setState(state => (
    //                 {

    //                     temp_min: res.data.main.temp_min
    //                 }
    //             ));
    //         })
    // }

    // handleChange(event) {
    //     this.setState({ city: event.target.value })
    // }





    render() {

        return (
            <div className="traduction">
                <span className="itemsTitle">Un mot pour vous</span>
                <div className="traductionContainer">
                    quelques mots en fonction du pays où il est
                </div>
            </div>
        )
    }
}
