import React from 'react'
import Axios from 'axios'
import './App.css';
import ProgramPie from './ProgramPie'
import RaceEthnicityPie from './RaceEthnicityPie'
import GenderGraph from './GenderGraph'

const apiLink = 'https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=lWKocdu0x0mLqDjupgrI873ZV2Nxtdde29bvOdSz'

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
    this.removeNulls = this.removeNulls.bind(this)
  }

  // removes null values
  removeNulls(obj) {
    for (let key in obj) {
      if (obj[key] === null) {
        delete obj[key]
      }
    }
    return obj
  }

  async componentDidMount() {
    try {
      const {data} = await Axios.get(apiLink)

      //isolate school details
      const schoolInfo = data.results[0].school
      //isolate data from the latest year
      const latestData = data.results[0].latest

      //removes null values from race-ethnicity
      const race_demographics = this.removeNulls(latestData.student.demographics.race_ethnicity)

      this.setState({
        name: schoolInfo.name,
        city: schoolInfo.city,
        state: schoolInfo.state,
        zip: schoolInfo.zip,
        link: schoolInfo.school_url,
        enrolled: latestData.student.enrollment.grad_12_month + latestData.student.enrollment.undergrad_12_month,
        programs: Object.entries(latestData.academics.program_percentage),
        race_ethnicity: Object.entries(race_demographics),
        gender: data.results[0]
      })

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="school-info">
        <h1>{this.state.name}</h1>
        <h2>{this.state.city}, {this.state.state}, {this.state.zip}</h2>
        <p>Total Enrolled (undergrad + grad): {this.state.enrolled}</p>
        <a
          className="school-link"
          href={this.state.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit School Site
        </a>

        <div className="cta-buttongs">
          <button
            className="button"
            type="submit"
            onclick="window.open('file.doc')">
              Download!
          </button>
        </div>

        <div className="pie-charts">
          <ProgramPie programs={this.state.programs}/>
          <RaceEthnicityPie race_ethnicity={this.state.race_ethnicity}/>
        </div>

        <div className="graph">
          <GenderGraph gender={this.state.gender}/>
        </div>

      </div>
    )
  }

}

export default  SchoolInfo;
