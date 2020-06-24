import React from 'react'
import './App.css'
import SchoolData from './components/SchoolData'
import Pdf from "react-to-pdf"
//import DownloadButton from './components/DownloadButton'

const ref = React.createRef();

const App = () => {
  return (
    <div className="app">
      <div className="action-buttons">
        <Pdf
          targetRef={ref}
          filename="uw-madison-metrics.pdf">
          {({ toPdf }) =>
          <button className="button" onClick={toPdf}>Download PDF</button>}
        </Pdf>

        <button className="button" onClick={() => window.print()}>Print Page</button>

      </div>

        <div className="school-wrapper" ref={ref}>
          <SchoolData/>
        </div>
    </div>
  );
}

export default App;
