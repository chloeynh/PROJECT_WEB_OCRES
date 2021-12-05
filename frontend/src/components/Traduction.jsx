import React from 'react';
import axios from 'axios';

const API_key = 'AIzaSyC7eQHFT-1EBe2P4E-Nv5UJXZet-0vdNYk'

export default class Traduction extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            city: "Paris",
            previous: "Paris",
            q: "",
            source: "fr",
            target: "en"

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    componentDidMount() {
        axios.get(`https://translation.googleapis.com/language/translate/v2?api_key=${API_key}`)
            .then(res => {
                console.log(res.data);
                this.setState(state => (
                    {
                        // format: res.data,
                        // source: res.data,
                        // target: res.data
                    }
                ));
            })
    }



    handleClick() {
        axios.get(`https://libretranslate.com/translate?format="text"&q=${this.state.q}&source=${this.state.source}&target=${this.state.target}`)
            .then(res => {
                this.setState(state => (
                    {

                    }
                ));
            })
    }

    handleChange(event) {
        this.setState({ city: event.target.value })
    }





    render() {

        return (
            <div className="traduction">
                <span className="itemsTitle">Un mot pour vous</span>
                <div className="traductionContainer">
                    Quelques mots en fonction du pays où il est
                </div>
            </div>
        )
    }
}
