import React from 'react'
import './../App.css'
import { saveAs } from 'file-saver'

const downloadFile = data => {
  const header = Object.keys(data[0])
  let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName])).join(','))
  csv.unshift(header.join(','))
  csv = csv.join('\r\n')
  const blob = new Blob([csv], { type: "application/vnd.ms-excel;charset=utf-8" });
  saveAs(blob, "uw-madison-export.csv");
}

const DownloadButton = props => {

  return (
    <button className="button" onClick={() => downloadFile(props.download_data)}>
      Download Data
    </button>
  )
}

export default DownloadButton
