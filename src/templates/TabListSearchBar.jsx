import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import TabContainer from '../components/TabContainer';
import GridContainer from '../components/GridContainer';

import { Ripple } from '@progress/kendo-react-ripple';

String.prototype.hashCode = function() {
	var hash = 0,
		i,
		chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
		chr = this.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};

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

const TabListSearchBar = (props) => {
	let [ searchField, onSearchChange ] = useState('');

	const { id, title, priceData, titleData, availData, sideItems, linkCol, initSort, headerInfo, getPathName } = props;

	return (
		<Ripple>
			<SideBar title={title} handleSearch={onSearchChange} sideItems={sideItems} id={id} />
			<div className="app-container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<TabContainer
							priceView={
								<GridContainer
									data={searchField === '' ? priceData : filterData(priceData)}
									initSort={initSort}
									headerInfo={headerInfo}
									getPathName={getPathName}
									linkCol={linkCol}
								/>
							}
							titleView={
								<GridContainer
									data={searchField === '' ? titleData : filterData(titleData)}
									initSort={initSort}
									headerInfo={headerInfo}
									getPathName={getPathName}
									linkCol={linkCol}
								/>
							}
							availView={
								<GridContainer
									data={searchField === '' ? availData : filterData(availData)}
									initSort={initSort}
									headerInfo={headerInfo}
									getPathName={getPathName}
									linkCol={linkCol}
								/>
							}
						/>
					</div>
				</div>
			</div>
		</Ripple>
	);
};

export default TabListSearchBar;
