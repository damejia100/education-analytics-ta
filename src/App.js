import React from 'react';
import './App.css';
import SchoolInfo from './components/SchoolInfo'
import Pdf from "react-to-pdf";
import DownloadButton from './components/DownloadButton'

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

        <DownloadButton />


      </div>

      <div className="school-wrapper" ref={ref}>
        <SchoolInfo/>
      </div>
    </div>
  );
}

export default App;
