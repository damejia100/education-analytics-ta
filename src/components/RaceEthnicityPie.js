import React from 'react'
import './../App.css';
import { ResponsivePie } from '@nivo/pie'
import { formatLabel, percentage, makeEntries } from '../Helpers.js'

const RaceEthnicityPie = props => {

  const race_ethnicity_data = makeEntries(props.race_ethnicity).map(element => {

    return {
      id: formatLabel(element[0]),
      label: formatLabel(element[0]),
      value: percentage(element[1])
    };
  })

  return (
    <div className="race-ethnicity-pie">
    <h3>Race and Ethnic Demographics</h3>
    <ResponsivePie
        data={race_ethnicity_data}
        margin={{ top: 0, right: 125, bottom: 0, left: 125 }}
        pixelRatio={2}
        innerRadius={0.5}
        colors={[
          '#F4511E',
          "#DCE775",
          "#8BC34A",
          "#00796B",
          "#b02792",
          "#0AADB9"
        ]}
        radialLabelsSkipAngle={8}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={8}
        radialLabelsLinkHorizontalLength={16}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        enableSlicesLabels={false}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        sortByValue={true}
    />
    </div>
  );
}

export default RaceEthnicityPie;
