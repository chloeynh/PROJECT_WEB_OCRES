import React from 'react';
import axios from 'axios';

const API_key = "AIzaSyC7eQHFT-1EBe2P4E-Nv5UJXZet-0vdNYk"

export default class Image extends React.Component {

  constructor(props) {
    super(props);
    this.state =
    {
      city: "Paris",
      previous: "Paris",
      icon1: `https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg`,
      icon2: `https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-Fotolia.jpg`,
      
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }

  componentDidMount() {
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_key}&cx=744c8d41c1a1949ac&q=${this.state.city} Photo Paysage`)
      .then(res => {
        this.setState(state => (
          {
            icon1: res.data.items[0].pagemap.cse_image[0].src,
            icon2: res.data.items[1].pagemap.cse_image[0].src,
          }
        ));
      })
  }



  handleClick() {
    axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_key}&cx=744c8d41c1a1949ac&q=${this.state.city} Photo Paysage`)
      .then(res => {
        this.setState(state => (
          {
            icon1: res.data.items[0].pagemap.cse_image[0].src,
            icon2: res.data.items[1].pagemap.cse_image[0].src,
            previous: this.state.city
          }
        ));
      })
  }

  handleChange(event) {
    this.setState({ city: event.target.value })
  }





  render() {

    return (
      <div className="photos">
        <span className="itemsTitle">Photos</span>
        <div className="imagesComponent">
          <div className="cityTemp">{this.state.previous}</div>
          <img className="imgCity" src={this.state.icon1} alt="forecast" />
          <img className="imgCity" src={this.state.icon2} alt="forecast" />
          <input type="text" placeholder="Où es-tu ?" onChange={event => this.handleChange(event)} />
          <button onClick={this.handleClick}>Valider</button>
        </div>
      </div>
    )
  }
}
