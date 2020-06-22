import React from 'react'
import './App.css';
import { ResponsivePieCanvas } from '@nivo/pie'

const RaceEthnicityPie = props => {

  const race_ethnicity_data = props.race_ethnicity.map(element => {
    return { id: element[0], label: element[0], value: element[1] };
  })

  console.log("race_ethnicity_data>>", race_ethnicity_data)

  return (
    <div className="race-ethnicity-pie">
    <h3>Race and Ethnicity Breakdown</h3>
    <ResponsivePieCanvas
        data={race_ethnicity_data}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        pixelRatio={2}
        innerRadius={0.5}
        colors={[
          "#FFF59D",
          '#F4511E',
          "#DCE775",
          "#8BC34A",
          "#00796B",
          "#006064"
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.6 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                translateX: 140,
                itemWidth: 60,
                itemHeight: 14,
                itemsSpacing: 2,
                symbolSize: 14,
                symbolShape: 'circle'
            }
        ]}
    />
    </div>
  );
}

// const RaceEthnicityPie = (props) => {

//   const race_ethnicity_data = props.race_ethnicity.map(element => {
//     return { x: element[0], y: element[1] };
//   })

//   return (
//     <div className="race-ethnicity-pie">
//         <h3>Race and Ethnicity</h3>

//         <VictoryPie
//           data={race_ethnicity_data}
//           colorScale={[
//             "#FFF59D",
//             '#F4511E',
//             "#DCE775",
//             "#8BC34A",
//             "#00796B",
//             "#006064"
//           ]}
//         />
//     </div>
//   );
// }

export default RaceEthnicityPie;
