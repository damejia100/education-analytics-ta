import React from 'react'
import './App.css';
import { VictoryPie, VictoryTooltip } from 'victory';

const ProgramPie = props => {

  const program_data = props.programs.map(element => {
    return { x: element[0], y: element[1] };
  })

  console.log("props.programs>>", props.programs)

  return (
    <div className="program-pie">
      <h3>Programs</h3>
      <VictoryPie
        data={program_data}
        colorScale={[
          "#FFF59D",
          '#F4511E',
          "#DCE775",
          "#8BC34A",
          "#00796B",
          "#006064"
        ]}

      />

    </div>
  );
}
export default ProgramPie;
