import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import GridContainer from '../components/GridContainer';
import { Ripple } from '@progress/kendo-react-ripple';
import PropTypes from 'prop-types';

const filterData = (data, searchField) => {
	return data.filter((item) => {
		let hasKey = false;
		Object.keys(item).forEach((key) => {
			if (item[key].toString().includes(searchField)) {
				hasKey = true;
			}
		});
		return hasKey;
	});
};

const ListSearchBar = (props) => {
	let [ searchField, onSearchChange ] = useState('');

	const { id, data, title, sideItems, headerInfo, getPathName, linkCol, initSort } = props;

	return (
		<Ripple>
			<SideBar title={title} handleSearch={onSearchChange} sideItems={sideItems} id={id} />
			<div className="app-container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<GridContainer
							data={searchField === '' ? data : filterData(data, searchField)}
							initSort={initSort}
							headerInfo={headerInfo}
							getPathName={getPathName}
							linkCol={linkCol}
						/>
					</div>
				</div>
			</div>
		</Ripple>
	);
};

export default ListSearchBar;

ListSearchBar.propTypes = {
	data: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	sideItems: PropTypes.array.isRequired,
	headerInfo: PropTypes.array.isRequired,
	getPathName: PropTypes.func,
	linkCol: PropTypes.string,
	initSort: PropTypes.string.isRequired
};
