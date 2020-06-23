import React from 'react'
import './App.css';
import { ResponsivePie } from '@nivo/pie'

const ProgramPie = props => {

  const program_data = props.programs.map(element => {
    //removes _ from label
    const formattedLabel = element[0].replace('_', ' ')
    return { id: formattedLabel, label: formattedLabel, value: element[1] };
  })

  return (
    <div className="program-pie">
      <h3>Academic Programs</h3>
      <ResponsivePie
        data={program_data}
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
export default ProgramPie;
