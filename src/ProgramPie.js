import React from 'react'
import './App.css';
import { VictoryPie } from 'victory';

const ProgramPie = (props) => {

  const program_data = props.programs.map(element => {
    return { x: element[0], y: element[1] };
  })

  return (
    <div className="program-pie">
        <h3>Programs</h3>
        <svg width={300} height={300}>
        <circle cx={150} cy={150} r={25} fill="#c43a31"/>
          <VictoryPie
          standalone={false}
          width={300} height={300}
          innerRadius={50}
          data={program_data}
          />
        </svg>
    </div>
  );
}
export default ProgramPie;
