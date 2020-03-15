import React from 'react';

export default class HogCard extends React.Component {
	state = {
		showDetails: false
	};
	toggleShowDetails = () => {
		this.setState({
			showDetails: !this.state.showDetails
		});
	};
	render() {
		const { name, specialty, weight, greased } = this.props;
		const medal = this.props['highest medal achieved'];
		return (
			<div className="card">
				<div className="image">
					<img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)} />
				</div>
				<div className="content">
					<div className="header">{name}</div>
					<div className="description">Hog description</div>
				</div>
				{this.state.showDetails && (
					<div className="extra content">
						<span className="right floated">Weight: {weight}</span>
						<span>
							<i className="trophy icon" />
							{medal}
						</span>
						<span>
							<i className="trophy icon" />
							{greased ? 'Greased' : 'Not Greased'}
						</span>
					</div>
				)}
				<button onClick={this.toggleShowDetails} className="ui button primary">
					{this.state.showDetails ? 'Hide Details' : 'Show details'}
				</button>
			</div>
		);
	}
}
