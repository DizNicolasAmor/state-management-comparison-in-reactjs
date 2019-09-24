import React from 'react';
import { connect } from 'react-redux';
import '../styles/list.css';

const ListHeader = () => (
	<div className='list__row title'>
		<div>Name</div>
		<div>Phone</div>
	</div>
);

const Item = ({ person }) => (
	<div className='list__row body'>
		<div>{person.name}</div>
		<div>{person.phone}</div>
	</div>
);

const List = ({ myContacts, searchTerm }) => {
	const filteredContacts = myContacts.filter(c =>
		c.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className='list__wrapper'>
			<ListHeader />
			{filteredContacts.map(person => (
				<Item person={person} key={person._id} />
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	myContacts: state.myContacts,
	searchTerm: state.searchTerm
});

export default connect(
	mapStateToProps,
	null
)(List);
