import React from 'react';
import axios from 'axios';

const API_key = "923b8b8bfbca71d0369fd0505d99dcf4"

export default class WeatherWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state =
    {
      city: "Paris",
      previous: "Paris",
      icon: `https://risibank.fr/cache/stickers/d579/57932-full.gif`,
      main: "",
      temp: "",
      temp_max: "",
      temp_min: "",

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }

  componentDidMount() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${API_key}`)
      .then(res => {
        this.setState(state => (
          {
            icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
            main: res.data.weather[0].main,
            temp: res.data.main.temp,
            temp_max: res.data.main.temp_max,
            temp_min: res.data.main.temp_min
          }
        ));
      })
  }



  handleClick() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${API_key}`)
      .then(res => {
        this.setState(state => (
          {
            icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
            main: res.data.weather[0].main,
            temp: res.data.main.temp,
            previous: this.state.city,
            temp_max: res.data.main.temp_max,
            temp_min: res.data.main.temp_min
          }
        ));
      })
  }

  handleChange(event) {
    this.setState({ city: event.target.value })
  }





  render() {

    return (
      <div className="meteo">
        <span className="itemsTitle">Météo</span>
        <div className="meteoComponent">
          <div className="cityTemp">{this.state.previous}</div>
          <div className="meteoTemp">{this.state.temp}°C</div>
          <div className="mainTemp">{this.state.main}</div>
          <img src={this.state.icon} alt="forecast" />
          <div className="minmaxTemp">
            <div className="minTemp"><div>Min.</div><div>{this.state.temp_min}°C</div></div>
            <div className="maxTemp"><div>Max.</div><div>{this.state.temp_max}°C</div></div>
          </div>
          <input type="text" placeholder="Où es-tu ?" onChange={event => this.handleChange(event)} />
          <button onClick={this.handleClick}>Avoir la météo</button>
        </div>
      </div>
    )
  }
}
