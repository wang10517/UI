import React, { useState } from "react";
import data from "../../data/processedData";
import ListSearchBar from "../../templates/ListSearchBar";

const selectorPage = props  => {

  let headerInfo = [
    {
      field: "urlID",
      title: "URL ID",
      sortable: true
    },
    {
      field: "fetchedDef",
      title: "Fetched Definitions",
      sortable: true
    }
  ];

  
  let matchup = {
    price: "price_results",
    title: "name_results",
    availability: "availability_results"
  };

  const { id, cat } = props.match.params
  let sel = props.location.state.sel;

  let info = data.filter(domain => domain["domainID"] === id)[0][
    matchup[cat]
  ][sel];

  let processedData = Object.keys(info).map(urlID => {
    return {
      urlID: urlID,
      fetchedDef: info[urlID]
    };
  });

  
  return (<ListSearchBar 
          id={id}
          data={processedData} 
          title="Selector Page" 
          sideItems={["Home Page", "Domain Summary", "Existing Selectors", "New Selectors"]}
          headerInfo={headerInfo}
          initSort="urlID"
  />);

}

export default selectorPage;
