import React from 'react'
import './../App.css';
import { ResponsiveLine } from '@nivo/line'
import { percentage, makeEntries } from '../Helpers.js'

const GenderGraph = props => {

  const genderArr =  makeEntries(props.gender)

  //formats the gender array into required data format
  const genderDataToFeed = genderArr => {
    const gender_data = []

    const womenData = {
      id: 'women',
      color: "#8BC34A",
      data: []
    }

    const menData = {
      id: 'men',
      color: "#F4511E",
      data: []
    }

    for (let i=0; i<genderArr.length; i++) {
      let element = genderArr[i]

      if (element[1].student) {

       if (element[1].student.demographics.women && element[1].student.demographics.men) {

        let womenDataPoint = {
          x: element[0],
          y: percentage(element[1].student.demographics.women)
        }
        womenData.data.push(womenDataPoint)
        womenDataPoint = {}

        let menDataPoint = {
          x: element[0],
          y: percentage(element[1].student.demographics.men)
        }
        menData.data.push(menDataPoint)
        menDataPoint = {}
       }
      }
    }
    gender_data.push(womenData, menData)
    return gender_data
  }

  return (
    <div className="gender-pie">
      <h3>Gender Breakdown</h3>
      <ResponsiveLine
        data={genderDataToFeed(genderArr)}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 1, max: 100, stacked: false, reverse: false }}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 1,
            tickRotation: -90,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Percentage',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )

}

export default GenderGraph;
