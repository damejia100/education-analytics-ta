import React from 'react'
import Axios from 'axios'

class SchoolInfo extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      city: '',
      state: '',
      zip: '',
      link: '',
      enrolled: 0
    }
  }

  async componentDidMount() {
    try {
      const {data} = await Axios.get('https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=rhGsGbQ56RKjRUHdUIDah3PfBYPWfFhPucGPhYb6')

      const results = data.results[0]


      this.setState({
        name: results.school.name,
        city: results.school.city,
        state: results.school.state,
        zip: results.school.zip,
        link: results.school.school_url,
        enrolled: results.latest.student.enrollment.grad_12_month + results.latest.student.enrollment.undergrad_12_month
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.city}, {this.state.state}, {this.state.zip}</h3>
        Total Enrolled (undergrad + grad): {this.state.enrolled}
      </div>
    )
  }

}

export default  SchoolInfo;
