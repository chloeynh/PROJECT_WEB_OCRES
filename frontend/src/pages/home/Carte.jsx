import React from 'react';

export default class Carte extends React.Component {

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
    //     axios.get(``)
    //         .then(res => {
    //             this.setState(state => (
    //                 {

    //                 }
    //             ));
    //         })
    // }



    // handleClick() {
    //     axios.get(``)
    //         .then(res => {
    //             this.setState(state => (
    //                 {

    //                 }
    //             ));
    //         })
    // }

    // handleChange(event) {
    //     this.setState({ city: event.target.value })
    // }





    render() {

        return (
            <div className="carte">
                <span className="itemsTitle">Carte de {this.state.previous}</span>
                <div className="carteComponent">
                    google maps j'imagine
                    <input type="text" placeholder="Où es-tu ?" onChange={event => this.handleChange(event)} />
                    <button onClick={this.handleClick}>Valider</button>
                </div>
            </div>
        )
    }

}