import React, { Component } from 'react';
import './App.scss';
import ResultsByName from './components/ResultsByName';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h2>Left Selection Top Filter</h2>
        </header> */}
        <div className="center">
          <ResultsByName />
        </div>
      </div>
    );
  }
}

export default App;
