import React from 'react';
import ReactDOM from 'react-dom';

class Drivers extends React.Component {
	render() {
		return(
			<div>
				<h1>Hello world</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<Drivers />,
	document.getElementById('drivers')
);