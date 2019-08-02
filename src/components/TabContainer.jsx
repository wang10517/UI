import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import PropTypes from 'prop-types';

const TabContainer = (props) => {
	return (
		<Tabs defaultTab="price" vertical>
			<TabList>
				<Tab tabFor="price">Price</Tab>
				<Tab tabFor="title">Title</Tab>
				<Tab tabFor="avail">Availability</Tab>
			</TabList>
			<TabPanel tabId="price">{props.priceView}</TabPanel>
			<TabPanel tabId="title">{props.titleView}</TabPanel>
			<TabPanel tabId="avail">{props.availView}</TabPanel>
		</Tabs>
	);
};

export default TabContainer;

TabContainer.propTypes = {
	priceView: PropTypes.element.isRequired,
	titleView: PropTypes.element.isRequired,
	availView: PropTypes.element.isRequired
};
