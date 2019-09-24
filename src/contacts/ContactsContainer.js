import React from 'react';
import { connect } from 'react-redux';
import FilterBar from './components/FilterBar';
import List from './components/List';
import { getData } from './utils/contactsHelpers';
import { setMyContactsAction } from './actions';

class ContactsContainer extends React.Component {
	componentDidMount() {
		getData()
			.then(this.props.setMyContactsAction)
			.catch(console.error);
	}

	render() {
		return (
			<div>
				<FilterBar />
				<List />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setMyContactsAction: arr => dispatch(setMyContactsAction(arr))
});

export default connect(
	null,
	mapDispatchToProps
)(ContactsContainer);
