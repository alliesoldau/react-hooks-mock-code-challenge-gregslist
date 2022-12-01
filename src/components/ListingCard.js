import React, { useState } from "react";

function ListingCard({ listing, deleteFromList }) {

  const [toggle, setToggle] = useState(false)

  function handleButtonToggle() {
    setToggle((toggle) => !toggle)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then((r)=>r.json())
    .then(deleteFromList(listing))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {toggle ? (
          <button 
            className="emoji-button favorite active"
            onClick={handleButtonToggle}
            >
              ★
            </button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={handleButtonToggle}
            >
              ☆
            </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button 
          className="emoji-button delete"
          onClick={handleDelete}
          >
            🗑
          </button>
      </div>
    </li>
  );
}

export default ListingCard;
