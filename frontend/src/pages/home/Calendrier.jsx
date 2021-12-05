import React from 'react';
import axios from 'axios';

const API_key = "60a42d7c974241cab09bb73a40f9c403"

export default class Calendrier extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            city: "Paris",
            previous: "Paris",
            date0: undefined,
            date1: undefined,
            date2: undefined,
            date3: undefined,
            date4: undefined,
            date5: undefined,
            date6: undefined,
            date7: undefined,
            date8: undefined,
            date9: undefined,
            time0: undefined,
            time1: undefined,
            time2: undefined,
            time3: undefined,
            time4: undefined,
            time5: undefined,
            time6: undefined,
            time7: undefined,
            time8: undefined,
            time9: undefined

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    componentDidMount() {
        axios.get(`https://timezone.abstractapi.com/v1/current_time?api_key=${API_key}&location=${this.state.city}`)
            .then(res => {
                console.log(res.data);
                this.setState(state => (
                    {
                        date0: res.data.datetime[0],
                        date1: res.data.datetime[1],
                        date2: res.data.datetime[2],
                        date3: res.data.datetime[3],
                        date4: res.data.datetime[4],
                        date5: res.data.datetime[5],
                        date6: res.data.datetime[6],
                        date7: res.data.datetime[7],
                        date8: res.data.datetime[8],
                        date9: res.data.datetime[9],
                        time0: res.data.datetime[11],
                        time1: res.data.datetime[12],
                        time2: res.data.datetime[13],
                        time3: res.data.datetime[14],
                        time4: res.data.datetime[15],
                        time5: res.data.datetime[16],
                        time6: res.data.datetime[17],
                        time7: res.data.datetime[18],
                        time8: res.data.datetime[19],
                        time9: res.data.datetime[20]
                    }
                ));
            })
    }



    handleClick() {
        axios.get(`https://timezone.abstractapi.com/v1/current_time?api_key=${API_key}&location=${this.state.city}`)
            .then(res => {
                this.setState(state => (
                    {
                        date0: res.data.datetime[0],
                        date1: res.data.datetime[1],
                        date2: res.data.datetime[2],
                        date3: res.data.datetime[3],
                        date4: res.data.datetime[4],
                        date5: res.data.datetime[5],
                        date6: res.data.datetime[6],
                        date7: res.data.datetime[7],
                        date8: res.data.datetime[8],
                        date9: res.data.datetime[9],
                        time0: res.data.datetime[11],
                        time1: res.data.datetime[12],
                        time2: res.data.datetime[13],
                        time3: res.data.datetime[14],
                        time4: res.data.datetime[15],
                        time5: res.data.datetime[16],
                        time6: res.data.datetime[17],
                        time7: res.data.datetime[18],
                        time8: res.data.datetime[19],
                        time9: res.data.datetime[20]
                    }
                ));
            })
    }

    handleChange(event) {
        this.setState({ city: event.target.value })
    }





    render() {

        return (
            <div className="calendrier">
                <span className="itemsTitle">Calendrier</span>
                <div className="calendrierComponent">
                    <div className="cityCalendrier">
                    {this.state.previous}
                    </div>
                    <div className="calendrierContainer">
                        <div className="timeCalendrier">
                            {this.state.time0}
                            {this.state.time1}
                            {this.state.time2}
                            {this.state.time3}
                            {this.state.time4}
                            {this.state.time5}
                            {this.state.time6}
                            {this.state.time7}
                            {this.state.time8}
                            {this.state.time9}
                        </div>
                        <div className="dateCalendrier">
                            {this.state.date8}
                            {this.state.date9}
                            {this.state.date4}
                            {this.state.date5}
                            {this.state.date6}
                            {this.state.date7}
                            {this.state.date0}
                            {this.state.date1}
                            {this.state.date2}
                            {this.state.date3}
                            
                        </div>
                    </div>
                    <input type="text" placeholder="Où es-tu ?" onChange={event => this.handleChange(event)} />
                        <button onClick={this.handleClick}>Avoir la date et l'heure</button>
                </div>

            </div>
        )
    }
}
