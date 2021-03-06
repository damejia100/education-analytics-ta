import React from 'react'
import './../App.css'
import { ResponsivePie } from '@nivo/pie'
import { formatLabel, percentage, makeEntries } from '../Helpers.js'
import DownloadButton from './DownloadButton'

const ProgramPie = props => {

  const program_data = makeEntries(props.programs).map(element => {
    return {
      id: formatLabel(element[0]),
      label: formatLabel(element[0]),
      value: percentage(element[1])
    }
  })

  return (
    <div className="program-pie" >
      <h3>Academic Programs</h3>
      <DownloadButton download_data={program_data}/>
      <ResponsivePie
        data={program_data}
        margin={{ top: 0, right: 125, bottom: 0, left: 125 }}
        pixelRatio={2}
        innerRadius={0.5}
        colors={[
          '#F4511E',
          "#DCE775",
          "#8BC34A",
          "#b02792",
          "#0AADB9",
          "#FB2F83",
          "#095CC5",
          "#00796B"
        ]}
        radialLabelsSkipAngle={5}
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
export default ProgramPie;
