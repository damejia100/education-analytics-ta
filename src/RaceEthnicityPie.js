import React from 'react'
import './App.css';
import { VictoryPie } from 'victory';

const RaceEthnicityPie = (props) => {
  return (
    <div className="race-ethnicity-pie">
        <h3>Race and Ethnicity</h3>
        <svg width={300} height={300}>
        <circle cx={150} cy={150} r={25} fill="#c43a31"/>
          <VictoryPie
          standalone={false}
          width={300} height={300}
          innerRadius={50}
            data={[
              { x: "white", y: 0.028 },
              { x: "asian", y: 0.0266 },
              { x: "spanish", y: 0.1419 }
            ]}
            animate={{
              duration: 2000
            }}
          />
        </svg>
    </div>
  );
}

export default RaceEthnicityPie;
