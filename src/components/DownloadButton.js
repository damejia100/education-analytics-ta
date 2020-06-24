import React from 'react';
import Axios from 'axios'
import './../App.css';
import { saveAs } from 'file-saver';

const apiLink = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=${process.env.REACT_APP_DATA_GOV_API_KEY}`

async function downloadFile(){

  try {
    const {data} = await Axios.get(apiLink)
    console.log('data>>', data)
    const myJsonString = JSON.stringify(data.results);
    const blob = new Blob([myJsonString], {
      type: "application/vnd.ms-excel;charset=utf-8"
    });
    saveAs(blob, "Report.xls");

  } catch (error) {
    console.log(error)
  }
  }

const DownloadButton = () => {

  return (
    <button className="button" onClick={() => downloadFile()}>
      Download
    </button>
  )

}

export default DownloadButton
