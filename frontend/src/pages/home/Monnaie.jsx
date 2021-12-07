import React from 'react';
import axios from 'axios';

const API_key = 'af0c9234d84bfc3c9af58fb09d1108cd'


export default class Monnaie extends React.Component {

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
        axios.get(`http://api.currencylayer.com/live?access_key=${API_key}`)
          .then(res => {
            this.setState(state => (
              {

              }
            ));
          })
      }
    
    
    
      handleClick() {
        axios.get(`http://api.currencylayer.com/live?access_key=${API_key}`)
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
          <div className="monnaie">
            <span className="itemsTitle">Le cours de la monnaie</span>
            <div className="monnaieComponent">
              <input type="text" placeholder="Où es-tu ?" onChange={event => this.handleChange(event)} />
              <button onClick={this.handleClick}>Valider</button>
            </div>
          </div>
        )
      }

}