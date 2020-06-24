import React from 'react'
import './../App.css'

const SchoolDetails = props => {

  const { name, city, state, zip, enrolled, link} = props.schoolInfo

  return (
    <div className="school-details">
      <h1>{name}</h1>
      <h2>{city}, {state}, {zip}</h2>
      <p>Total Enrolled: {enrolled}</p>
      <a
        className="school-link"
        href={`//${link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit School Site
      </a>
    </div>
  );
}

export default SchoolDetails;
