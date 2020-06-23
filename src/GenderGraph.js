import React from 'react'
import './App.css';
import { ResponsiveLine } from '@nivo/line'

const GenderGraph = props => {

  const genderArr =  Object.entries(props.gender)

  const genderDataToFeed = genderArr => {

    const gender_data = []

    const womenData = {
      id: 'Women',
      color: "#FFF59D",
      data: []
    }

    const menData = {
      id: 'Men',
      color: "#F4511E",
      data: []
    }

    for (let i=0; i<genderArr.length; i++) {
      let element = genderArr[i]

      if (element[1].student) {

       let womenDataRecord = {
          x: element[0],
          y: element[1].student.demographics.women
        }
        womenData.data.push(womenDataRecord)
        womenDataRecord = {}

        let menDataRecord = {
          x: element[0],
          y: element[1].student.demographics.men
        }
        menData.data.push(menDataRecord)
        womenDataRecord = {}
      }
    }
    gender_data.push(womenData)
    gender_data.push(menData)

    return gender_data
  }

  return (
    <div className="gender-pie">
      <h3>Gender Breakdown</h3>
      <ResponsiveLine
        data={genderDataToFeed(genderArr)}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
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
