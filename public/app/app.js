import React from 'react';
import ReactDOM from 'react-dom';

class Drivers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drivers: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		var lat = this.refs.lat.value;
		var lng = this.refs.lng.value;
		fetch(`/api/drivers?lng=${lng}&lat=${lat}`).then(function(drivers){
			return drivers.json();
		}).then( json => {
			this.setState({
				drivers: json
			});
		});
	}

	render() {
		var drivers = this.state.drivers;
		drivers = drivers.map(function(driver, index){
			return(
				<li key={index}>
					<span className={driver.obj.available}></span>
					<span className="name">{driver.obj.name}</span>
					<span className="rating">{driver.obj.rating}</span>
					<span className="dist">{Math.floor(driver.dis/1000)} km</span>
				</li>
			)
		});
		return(
			<div id="driver-container">
				<form id="search" onSubmit={this.handleSubmit}>
					<label>Input latitude: </label>
					<input type="text" ref="lat" placeholder="latitude" required />
					<label>Input longitude: </label>
					<input type="text" ref="lng" placeholder="longitude" required />
					<input type="submit" value="Book" />
				</form>
				<ul>{drivers}</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<Drivers />,
	document.getElementById('drivers')
);