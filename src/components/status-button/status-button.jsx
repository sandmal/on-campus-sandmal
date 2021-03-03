import './status-button.css';

function StatusButton(props) {
	const isBusy = props.available ? 'available' : 'busy';

	const handleOnClick = () => {
		updateStatus(!props.available);
	};

	const updateStatus = (newStatus) => {
		props.onChange(newStatus);
	};

	return (
		<div className="StatusButton" onClick={handleOnClick}>
			<div className="textContainer"></div>
			<div className={['dot', isBusy].join(' ')}></div>
			<p className="text">{props.available === true ? 'available' : 'busy'}</p>
		</div>
	);
}

StatusButton.defaultProps = {
	available: true,
	onChange: () => {
		console.log('StatusButton changed');
	},
};

export default StatusButton;
