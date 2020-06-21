import React from 'react'
import './App.css';
import { VictoryPie } from 'victory';

const RaceEthnicityPie = (props) => {

  const race_ethnicity_data = props.race_ethnicity.map(element => {
    return { x: element[0], y: element[1] };
  })

  return (
    <div className="race-ethnicity-pie">
        <h3>Race and Ethnicity</h3>
        <svg width={300} height={300}>
        <circle cx={150} cy={150} r={25} fill="#c43a31"/>
          <VictoryPie
          standalone={false}
          width={300} height={300}
          innerRadius={50}
          data={race_ethnicity_data}
          />
        </svg>
    </div>
  );
}

export default RaceEthnicityPie;
