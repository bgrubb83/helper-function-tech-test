import React from 'react';
import './App.css';
import { getProcessingPage } from './helpers/processingHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'Waiting...',
    };
  }

  async componentDidMount() {
    getProcessingPage('test');
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;
