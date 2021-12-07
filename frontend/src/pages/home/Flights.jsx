import React from "react";
import axios from "axios";

const API_key = 'KFfG4nOan5scONx3GGuEEiA73qKNIMma'
const URL = 'https://test.api.amadeus.com/v2?appid=KFfG4nOan5scONx3GGuEEiA73qKNIMma'

export default class Flights extends React.Component {

    constructor(props) {
      super(props);
      this.state =
      {
        city: "Paris",
        previous: "Paris",
  
      }
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
  
  
    }
  
    componentDidMount() {
      axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=BOS&departureDate=2021-12-07&adults=1&travelClass=ECONOMY&nonStop=false&max=10`)
        .then(res => {
            console.log(res)
          this.setState(state => (
            {
              
            }
          ));
        })
    }
  
  
  
    handleClick() {
      axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=PAR&destinationLocationCode=BOS&departureDate=2021-12-07&adults=1&travelClass=ECONOMY&nonStop=false&max=10`)
        .then(res => {
          this.setState(state => (
            {
              previous: this.state.city,
            }
          ));
        })
    }
  
    handleChange(event) {
      this.setState({ city: event.target.value })
    }
  
  
  
  
  
    render() {
  
      return (
        <div className="flights">
          <span className="itemsTitle">Les vols à départ de {this.state.previous}</span>
          <div className="flightomponent">
            <input type="text" placeholder="Où es-tu ?" onChange={event => this.handleChange(event)} />
            <button onClick={this.handleClick}>Valider</button>
          </div>
        </div>
      )
    }
  }
  