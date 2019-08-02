import React from "react";
import data from "../../data/processedData";
import ListSearchBar from "../../templates/ListSearchBar";

import "./HomePage.css";

const HomePage = Props => {

  // Headers on hompage
  let headerInfo = [
    {
      field: "domainID",
      title: "Domain ID",
      sortable: true
    },
    {
      field: "domain_name",
      title: "Domain Name",
      sortable: false
    },
    {
      field: "available_urls",
      title: "Available Urls",
      sortable: true
    },
    {
      field: "parsed_doms",
      title: "Parsed Doms Urls",
      sortable: true
    },
    {
      field: "price_counts",
      title: "Price Selectors",
      sortable: true
    },
    {
      field: "avail_counts",
      title: "Availability Selectors",
      sortable: true
    },
    {
      field: "title_counts",
      title: "Title Selectors",
      sortable: true
    }
  ];

  // Retrieve link to the existing selector page. Used later in forming linked cells
  const getPathName = domainInfo => {
    let id = domainInfo["domainID"].toString();
    let pathName = `/domainPage/${id}/existingSelectors`;
    return pathName;
  };

 
  return (
    <ListSearchBar
      data={data}
      title="Home Page"
      sideItems={["Home Page"]}
      headerInfo={headerInfo}
      getPathName={getPathName}
      linkCol="domainID"
      initSort="available_urls"
    />
  );
  
}

export default HomePage;
