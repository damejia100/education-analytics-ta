import React from 'react';
import './App.css';
import SchoolInfo from './SchoolInfo'
import Pdf from "react-to-pdf";

const ref = React.createRef();

const App = () => {
  return (
    <div className="app">
      <Pdf
        targetRef={ref}
        filename="uw-madison-metrics.pdf">
        {({ toPdf }) => <button className="button" onClick={toPdf}>Generate PDF</button>}
      </Pdf>
      <button className="button" onClick={() => window.print()}>Print Page</button>
      <div ref={ref}>
        <SchoolInfo/>
      </div>
    </div>
  );
}

export default App;
