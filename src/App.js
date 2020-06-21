import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SchoolInfo from './SchoolInfo'
import ProgramPie from './ProgramPie'
import RaceEthnicityPie from './RaceEthnicityPie'


function App() {
  return (
    <div className="app">
        <SchoolInfo/>
        <ProgramPie />
        <RaceEthnicityPie />
    </div>
  );
}

export default App;
