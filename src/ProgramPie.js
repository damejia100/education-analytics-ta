import React from 'react'
import './App.css';
import { ResponsivePieCanvas } from '@nivo/pie'

const ProgramPie = props => {
  const program_data = props.programs.map(element => {
    return { id: element[0], label: element[0], value: element[1] };
  })

  // console.log("props.programs>>", props.programs)

  return (
    <div className="program-pie">
      <h3>Programs</h3>
      <ResponsivePieCanvas
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
                anchor: 'left',
                direction: 'column',
                translateX: -50,
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
export default ProgramPie;
