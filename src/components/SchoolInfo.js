import React from 'react'
import Axios from 'axios'
import './../App.css'
import { apiLink } from '../Helpers.js'
import ProgramPie from './ProgramPie'
import RaceEthnicityPie from './RaceEthnicityPie'
import GenderGraph from './GenderGraph'

class SchoolInfo extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      city: '',
      state: '',
      zip: '',
      link: '',
      enrolled: 0,
      programs: [],
      race_ethnicity: [],
      gender: []
    }
  }

  async componentDidMount() {
    try {
      const {data} = await Axios.get(apiLink)

      //isolate school details
      const schoolInfo = data.results[0].school

      //isolate data from the latest year
      const latestData = data.results[0].latest

      this.setState({
        name: schoolInfo.name,
        city: schoolInfo.city,
        state: schoolInfo.state,
        zip: schoolInfo.zip,
        link: schoolInfo.school_url,
        enrolled: latestData.student.enrollment.grad_12_month + latestData.student.enrollment.undergrad_12_month,
        programs: latestData.academics.program_percentage,
        race_ethnicity: latestData.student.demographics.race_ethnicity,
        gender: data.results[0]
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="school-data">
        <div className="school-details">
          <h1>{this.state.name}</h1>
          <h2>{this.state.city}, {this.state.state}, {this.state.zip}</h2>
          <p>Total Enrolled: {this.state.enrolled}</p>
          <a
            className="school-link"
            href={`//${this.state.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit School Site
          </a>
        </div>

        <div className="school-visuals">
          <div className="pie-charts">
            <ProgramPie programs={this.state.programs}/>
            <RaceEthnicityPie race_ethnicity={this.state.race_ethnicity}/>
          </div>

          <div className="graph">
            <GenderGraph gender={this.state.gender}/>
          </div>
        </div>
      </div>
    )
  }
}

export default  SchoolInfo;
