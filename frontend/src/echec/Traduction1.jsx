import React from 'react';

const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
})

const detectLanguage = async (text) => {

    try {
        let response = await translate.detect(text);
        return response[0].language;
    } catch (error) {
        console.log('Error at detectLanguage --> ${error}');
        return 0;
    }
}

const translateText = async (text, targetLanguage) => {

    try {
        let [response] = await translate.translate(text, targetLanguage);
        return response;
    } catch (error) {
        console.log('Error at translateText --> ${error}');
        return 0;
    }
}

export default class Traduction extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            target: "en",
            text: "",
            textTraduit: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        this.translateText(this.state.text, this.state.target)
            .then((res) => {
                this.setState(state =>({
                    textTraduit: res
                } ))
            })
            .catch((err) => {
                console.log(err);
            })
    }



    handleClick() {
        this.translateText(this.state.text, this.state.target)
            .then((res) => {
                this.setState(state =>({
                    textTraduit: res
                } ))
            })
            .catch((err) => {
                console.log(err);
            })

    }

    handleChange(event) {
        this.setState({ city: event.target.value })
    }

    render() {

        return (
            <div className="traduction">
                <span className="itemsTitle">Traduction</span>
            </div>
        )
    }
}

