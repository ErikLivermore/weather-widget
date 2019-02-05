import React from 'react';
import { connect } from 'react-redux';
import { weatherSelector } from '../selector';
import queryString from 'query-string';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: '' };

		// This binding is necessary to make `this` work in the callback
		this.handleCityChanged = this.handleCityChanged.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		var parsedQuery = queryString.parse(this.props.location.search);
		var city = parsedQuery.city;
		if (city === undefined) {
			city = "Copenhagen";
		}
		this.props.updateWeather(city);
	}

	handleCityChanged(e) {
		this.setState({ city: e.target.value.trim() });
	}

	handleSubmit(e) {
		e.preventDefault();

		var city = this.state.city;
		this.props.updateWeather(city);

		if (window.history.replaceState) {
			//prevents browser from storing history with each change:
			window.history.replaceState({}, null, "/?city=" + city);
		}
	}

	render() {
		return (
			<div className="widget" style={{ margin: '10px', width: '300px' }}>
				<div className="panel panel-info">
					<div className="panel-heading">Weather in <b>{this.props.city}</b></div>
					<ul className="list-group">
						<li className="list-group-item">Temperature: <b>{this.props.temp}°C</b></li>
						<li className="list-group-item">Humidity: <b>{this.props.humidity}</b></li>
						<li className="list-group-item">Wind: <b>{this.props.windSpeed} m/s {this.props.windDir}</b></li>
						<li className="list-group-item">
							<form className="form-inline" method="GET" onSubmit={this.handleSubmit}>
								<div className="form-group">
									<input type="text" className="form-control" id="city" placeholder="City" name="city" value={this.state.city} onChange={this.handleCityChanged} ></input>
								</div>
								<button type="submit" className="btn btn-default">Search</button>
							</form>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

var WeatherDispatchFunctions = function (dispatch) {
	return {
		updateWeather: function (city) {
			dispatch({ type: 'refresh-weather-data', city: city });
		}
	}
}
export default connect(
	state => weatherSelector(state),
	WeatherDispatchFunctions
)(Weather);
