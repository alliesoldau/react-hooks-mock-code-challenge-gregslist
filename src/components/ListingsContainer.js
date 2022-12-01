import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingData, deleteFromList }) {

  const listingMapping = listingData.map((listing) => {
    return(
      <ListingCard
        key={listing.id}
        listing={listing}
        deleteFromList={deleteFromList}
      />
  )
  })

  return (
    <main>
      <ul className="cards">
        {listingMapping}
      </ul>
    </main>
  );
}

export default ListingsContainer;
