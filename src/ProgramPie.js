import React from 'react'
import './App.css';
import { VictoryPie } from 'victory';

const ProgramPie = (props) => {
  console.log("props.programs>>", props.programs)
  return (
    <div className="program-pie">
        <h2>Programs</h2>
        <svg width={300} height={300}>
        <circle cx={150} cy={150} r={25} fill="#c43a31"/>
          <VictoryPie
          standalone={false}
          width={300} height={300}
          innerRadius={50}
            data={[
              { x: "education", y: 0.028 },
              { x: "mathematics", y: 0.0266 },
              { x: "business_marketing", y: 0.1419 }
            ]}
            animate={{
              duration: 2000
            }}
          />
        </svg>
    </div>
  );
}

//iterate over props.programs which is an object and return an array..
// props.programs.map(program => {
//   return (
//     {
//       'x': Object.key(program),
//       'y': Object.value(program)
//     }
//   )
// })

// {
// education: 0.028,
// mathematics: 0.0266,
// business_marketing: 0.1419,
// communications_technology: 0,
// language: 0.0382, …}
// agriculture: 0.0272
// architecture: 0.0016
// biological: 0.1163
// }
export default ProgramPie;
