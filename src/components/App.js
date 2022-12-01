import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data) => setListingData(data))
  }, [])

  const [listingData, setListingData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  function deleteFromList(listingRIP) {
    const updatedListings = listingData
    .filter((listing) => listing.id !== listingRIP.id)
    setListingData(updatedListings)
  }

    const filteredListings = listingData
    .filter((listing) => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <Header 
        handleSearch={setSearchTerm}
      />
      <ListingsContainer 
      listingData={filteredListings}
      deleteFromList={deleteFromList}
      />
    </div>
  );
}

export default App;
