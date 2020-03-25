import React from 'react';
import './App.css';
import { getProcessingPage } from './helpers/processingHelpers';

class App extends React.Component {

  async componentDidMount() {
    getProcessingPage('test');
  }

  render() {
    return (
      <div className="App">
        Testing
      </div>
    );
  }
}

export default App;
