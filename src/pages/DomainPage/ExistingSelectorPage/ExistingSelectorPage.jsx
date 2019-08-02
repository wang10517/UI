import React from 'react';
import TabListSearchBar from '../../../templates/TabListSearchBar';
import data from '../../../data/processedData';

// This page displays the existing selectors pulled from database

const ExistingSelectorPage = (props) => {
	// Retrieve the proper link to the selector page. Used later in forming linked cells
	let getPathName = (selInfo) => {
		let pathName = `/domainPage/${domainID}/existingSelectors/${selInfo['category']}/${selInfo['id']}`;
		return {
			pathname: pathName,
			// Passing the selector to the selector page as part of state object
			state: { sel: selInfo['selector'] }
		};
	};

	var domainID = props.match.params.id;

	let info = data.filter((domain) => domain['domainID'] === domainID)[0];
	let priceResults = info['price_results'];
	let titleResults = info['name_results'];
	let availResults = info['availability_results'];
	let totalUrls = info['parsed_doms'];

	// Headers to be displayed in this page
	let headerInfo = [
		{
			field: 'selector',
			title: 'Selector',
			sortable: false
		},
		{
			field: 'urls',
			title: 'Successful Urls',
			sortable: true
		},
		{
			field: 'effectiveRate',
			title: 'Success Rate',
			sortable: true
		},
		{
			field: 'category',
			title: 'Category',
			sortable: true
		}
	];

	// Format the data to match with the header info
	let processData = (results, category) => {
		return Object.keys(results).map((sel) => {
			let activeUrls = Object.keys(results[sel]).length;
			let id = sel.hashCode().toString();
			return {
				id: id,
				selector: sel,
				urls: activeUrls,
				effectiveRate: (activeUrls / totalUrls).toFixed(2),
				category: category
			};
		});
	};

	// Pass down the data to griddata with search bar and side tabs
	return (
		<TabListSearchBar
			id={domainID}
			sideItems={[ 'Home Page', 'Domain Summary', 'Existing Selectors', 'New Selectors' ]}
			title="Existing Selectors Match"
			getPathName={getPathName}
			headerInfo={headerInfo}
			linkCol="selector"
			initSort="url"
			priceData={processData(priceResults, 'price')}
			titleData={processData(titleResults, 'title')}
			availData={processData(availResults, 'availability')}
		/>
	);
};

export default ExistingSelectorPage;
