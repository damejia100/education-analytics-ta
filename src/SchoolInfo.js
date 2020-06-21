import React from 'react'
import Axios from 'axios'
import './App.css';
import ProgramPie from './ProgramPie'

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
      programs: {},
      race_ethnicity: {}
    }
  }

  async componentDidMount() {
    try {
      const {data} = await Axios.get('https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=lWKocdu0x0mLqDjupgrI873ZV2Nxtdde29bvOdSz')


      const results = data.results[0]

      this.setState({
        name: results.school.name,
        city: results.school.city,
        state: results.school.state,
        zip: results.school.zip,
        link: results.school.school_url,
        enrolled: results.latest.student.enrollment.grad_12_month + results.latest.student.enrollment.undergrad_12_month,
        programs: results.latest.academics.program_percentage,
        race_ethnicity: results.latest.student.demographics.race_ethnicity
      })
      // console.log('this.state>>>', this.state)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="school-info">
        <h1>University of Wisconsin-Madison</h1>
        <h2>Madison, WI, 53706-1380</h2>
        <p>Students enrolled: 46827</p>
        {/* <h1>{this.state.name}</h1> */}
        {/* <h2>{this.state.city}, {this.state.state}, {this.state.zip}</h2> */}
        {/* <p>Total Enrolled (undergrad + grad): {this.state.enrolled}</p> */}
        <a
          className="school-link"
          href={this.state.link}
          target="_blank"
        >
          Visit School Site
        </a>
        <div className="program-pie">
          <ProgramPie programs={this.state.programs}/>
        </div>
      </div>
    )
  }

}

export default  SchoolInfo;
