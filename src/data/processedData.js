import rawData from "./results.json";

let processedData = Object.keys(rawData).map(dID => {
  return {
    domainID: dID,
    price_counts: Object.keys(rawData[dID]["price_results"]).length,
    avail_counts: Object.keys(rawData[dID]["availability_results"]).length,
    title_counts: Object.keys(rawData[dID]["name_results"]).length,
    ...rawData[dID]
  };
});

export default processedData;
