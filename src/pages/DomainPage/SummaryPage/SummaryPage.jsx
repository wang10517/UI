import React from 'react';
import '@progress/kendo-theme-material/dist/all.css';
import PieChart from '../../../components/PieChartContainer';
import './SummaryPage.css';
import SideBar from '../../../components/SideBar';
import data from '../../../data/processedData';

const SummaryPage = (props) => {
	let domainID = props.match.params.id;
	let info = data.filter((domain) => domain['domainID'] === domainID)[0];
	let numberParsed = info['parsed_doms'];
	let numberUrls = info['available_urls'];

	// If somehow the number of parsed doms is more than that of avaiable urls, count it as 100% parseing rate
	if (numberParsed > numberUrls) {
		numberUrls = numberParsed;
	}

	const pieStyling = {
		chartArea: {
			left: 400,
			top: 300,
			width: '100%',
			height: '100%'
		}
	};

	let pieChart = (
		<PieChart
			data={[
				[ 'Category', 'Number parsed' ],
				[ 'Parsed', numberParsed ],
				[ 'Non-parsed', numberUrls - numberParsed ]
			]}
			title="Dom parsing success rate"
			options={pieStyling}
		/>
	);

	return (
		<div>
			<SideBar
				title="Summary Page"
				id={domainID}
				sideItems={[ 'Home Page', 'Domain Summary', 'Existing Selectors', 'New Selectors' ]}
			/>
			<h1>{info['domain_name']}</h1>
			<h1>Domain ID: {domainID}</h1>
			<div className="chart">{pieChart}</div>
		</div>
	);
};

export default SummaryPage;
