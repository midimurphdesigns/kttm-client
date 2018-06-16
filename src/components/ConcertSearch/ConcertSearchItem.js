import React from 'react';

export default function ConcertSearchItem({
  image,
  name,
  venue,
  date,
  time
  // description
}) {
  return (
    <span className="search-results">
    <div className="concerts-container row">
      <div className="concert-details">
        <div className="pic-info col-4">
          <img src={image} alt="concert" className="concert-image" />
        </div>
        <div className="concert-about col-8">
          <label className="info-label">Name:</label>
          <label className="concert-label">{name}</label>
          <label className="info-label">Venue:</label>
          <label className="concert-label">{venue}</label>
          <label className="info-label">Date:</label>
          <label className="concert-label">{date}</label>
          <label className="info-label">Time:</label>
          <label className="concert-label">{time}</label>
          {/* <label className="info-label">Description:</label>
          <label className="concert-label">{description}</label> */}
        </div>
      </div>
    </div>
    </span>
  );
}