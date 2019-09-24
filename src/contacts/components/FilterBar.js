import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTermAction } from '../actions';

const FilterBar = ({ updateSearchTermAction }) => (
	<div>
		<div>Search by your contact name:</div>
		<input
			placeholder='Name...'
			type='text'
			onChange={ev => {
				updateSearchTermAction(ev.target.value);
			}}
		/>
	</div>
);

const mapDispatchToProps = dispatch => ({
	updateSearchTermAction: str => dispatch(updateSearchTermAction(str))
});

export default connect(
	null,
	mapDispatchToProps
)(FilterBar);
