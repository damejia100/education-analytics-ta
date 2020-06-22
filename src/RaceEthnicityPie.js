import React from 'react'
import './App.css';
import { VictoryPie, VictoryChart, VictoryLegend } from 'victory';

const RaceEthnicityPie = (props) => {

  const race_ethnicity_data = props.race_ethnicity.map(element => {
    return { x: element[0], y: element[1] };
  })

  return (
    <div className="race-ethnicity-pie">
        <h3>Race and Ethnicity</h3>

        {/* <VictoryChart domain={[0, 10]}>
          <VictoryLegend x={125} y={50}
            title="Legend"
            centerTitle
            orientation="horizontal"
            gutter={20}
            style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
            data={race_ethnicity_data}
          />
          <VictoryPie
            data={race_ethnicity_data}
            height={500}
            width={500}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
          />
        </VictoryChart> */}

        <VictoryPie
          data={race_ethnicity_data}
          colorScale={[
            "#FFF59D",
            '#F4511E',
            "#DCE775",
            "#8BC34A",
            "#00796B",
            "#006064"
          ]}
          // colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        />
    </div>
  );
}

export default RaceEthnicityPie;
