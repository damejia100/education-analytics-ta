import React from 'react'
import './App.css';
import { VictoryPie } from 'victory';

const ProgramPie = (props) => {
  console.log("props.programs>>", props.programs)

  const program_data = props.programs.map(program => {
    return { x: program[0], y: program[1] };
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
