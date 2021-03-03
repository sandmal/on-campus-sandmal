import React, { Component } from 'react';
import './App.css';

/* import BigButton from './components/big-button/big-button';

import UserList from './components/user-list/user-list';
import UserPreview from './components/user-preview/user-preview'; */
import Home from './components/home/Home';

//only for testing purposes
const busyHome = {
	name: 'JaneBuHo',
	status: 'busy',
	place: 'home-office',
};

const busyCampus = {
	name: 'JaneBuCa',
	status: 'busy',
	place: 'on-campus',
};

const availableHome = {
	name: 'JaneAvHo',
	status: 'available',
	place: 'home-office',
};

const availableCampus = {
	name: 'JaneAvCa',
	status: 'available',
	place: 'on-campus',
};

const users = [busyHome, busyCampus, availableHome, availableCampus];

class App extends Component {
	constructor(props) {
		super(props);
		// posible values "available/busy and on-campus/home-office"
		this.state = {
			myUser: { ...users[0] },
			users: users,
		};
	}

	updateUserPlace = (onCampus) => {
		const place = onCampus ? 'on-campus' : 'home-office';
		this.setState((state) => {
			let newList = [...state.users];
			newList[0].place = place;
			return {
				myUser: {
					...state.myUser,
					place,
				},
				list: newList,
			};
		});
	};

	updateUserStatus = (available) => {
		const status = available ? 'available' : 'busy';
		this.setState((state) => {
			let newList = [...state.users];
			newList[0].status = status;
			return {
				myUser: {
					...state.myUser,
					status,
				},
				list: newList,
			};
		});
	};

	render() {
		/* 		const available = this.state.myUser.status === 'available';
		const onCampus = this.state.myUser.place === 'on-campus';
		const config = { textWhenChecked: 'on-campus', textWhenUnchecked: 'Home office' }; */
		return (
			<div className="App">
				{/* 	<Home
					user={{ name: '', status: 'available', place: 'home-office' }}
					onChange={this.updateUserStatus}
				/> */}
				<Home
					user={this.state.myUser}
					onChange={{
						place: this.updateUserPlace,
						status: this.updateUserStatus,
					}}
				/>

				{/*	<p>This is the BigButton (always enabled if not part of a switch</p>
				<BigButton text={this.state.myUser.place} />

				<p>This is the UserPreview</p>
				<UserPreview user={this.state.myUser} />

				<p>This is the UserList</p>
				<UserList users={users} /> */}
			</div>
		);
	}
}

export default App;
