import React from 'react';
import data from '../../../data/data.json';
import TabListSearchBar from '../../../templates/TabListSearchBar';

const GeneratedSelectors = (props) => {
	let domainID = props.match.params.id;

	let priceSels = data['generatedSelectors']['priceSels'];
	let titleSels = data['generatedSelectors']['titleSels'];
	let availSels = data['generatedSelectors']['availSels'];

	let headerInfo = [
		{
			field: 'selector',
			title: 'Selector',
			sortable: false
		},
		{
			field: 'suc_rate',
			title: 'Successful Rate on parsed doms',
			sortable: true
		},
		{
			field: 'parsed_rate',
			title: 'Parsed rate',
			sortable: true
		},
		{
			field: 'suc_count',
			title: 'Successful Urls',
			sortable: true
		},
		{
			field: 'parsed_count',
			title: 'Parsed Urls',
			sortable: true
		},
		{
			field: 'total',
			title: 'Available Urls',
			sortable: true
		}
	];

	let processData = (results) => {
		return results.map((item) => {
			return {
				selector: item['selector'],
				suc_rate: `${(item['info']['suc_rate'] * 100).toString()}%`,
				parsed_rate: `${(item['info']['parsed_rate'] * 100).toFixed(2).toString()}%`,
				suc_count: item['info']['suc_count'],
				parsed_count: item['info']['parsed_count'],
				total: item['info']['total']
			};
		});
	};

	return (
		<TabListSearchBar
			id={domainID}
			sideItems={[ 'Home Page', 'Domain Summary', 'Existing Selectors', 'New Selectors' ]}
			title="New Selectors"
			headerInfo={headerInfo}
			initSort="suc_rate"
			priceData={processData(priceSels)}
			titleData={processData(titleSels)}
			availData={processData(availSels)}
		/>
	);
};

export default GeneratedSelectors;
