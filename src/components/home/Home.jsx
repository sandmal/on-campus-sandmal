import React, { Component } from 'react';

import StatusButton from '../status-button/status-button';
import StatusImage from '../status-image/status-image';
import BigSwitch from '../big-switch/big-switch';

import './Home.css';

class Home extends Component {
	handleOnChangeStatus = (newValue) => {
		this.updateUserStatus(newValue);
	};

	handleOnChangeSwitch = (newValue) => {
		this.updateUserPlace(!newValue);
	};

	updateUserStatus = (newStatus) => {
		this.props.onChange.status(newStatus);
	};

	updateUserPlace = (newPlace) => {
		this.props.onChange.place(!newPlace);
	};

	render() {
		const available = this.props.user.status === 'available';
		const onCampus = this.props.user.place === 'on-campus';
		const config = { textWhenChecked: 'on-campus', textWhenUnchecked: 'Home office' };
		return (
			<div className="Home">
				<StatusButton available={available} onChange={this.handleOnChangeStatus} />
				<StatusImage available={available} onCampus={onCampus} />
				<BigSwitch
					config={config}
					checked={onCampus}
					onChange={this.handleOnChangeSwitch}
				/>
			</div>
		);
	}
}

export default Home;
