import React from 'react'
import './App.css';
import { ResponsivePie } from '@nivo/pie'

const RaceEthnicityPie = props => {

  const race_ethnicity_data = props.race_ethnicity.map(element => {
    const formattedLabel = element[0].replace('_', ' ')
    const percentage = Math.round(element[1]*100)
    return { id: formattedLabel, label: formattedLabel, value: percentage };
  })

  return (
    <div className="race-ethnicity-pie">
    <h3>Race and Ethnic Demographics</h3>
    <ResponsivePie
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
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        enableSlicesLabels={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}

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
