import React from 'react'
import Axios from 'axios'
import './../App.css'
import { saveAs } from 'file-saver'
import { apiLink } from '../Helpers.js'

async function downloadFile(){

  try {
    const {data} = await Axios.get(apiLink)
    const myJsonString = JSON.stringify(data.results);
    const blob = new Blob([myJsonString], {
      type: "application/vnd.ms-excel;charset=utf-8"
    });
    saveAs(blob, "uw-madison-export.xls");

  } catch (error) {
    console.log(error)
    }
  }

const DownloadButton = () => {

  return (
    <button className="button" onClick={() => downloadFile()}>
      Download Data
    </button>
  )

}

export default DownloadButton
