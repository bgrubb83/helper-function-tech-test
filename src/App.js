import React from 'react';
import './App.css';
import { getProcessingPage } from './helpers/processingHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'Processing...',
    };
  }

  async componentDidMount() {
    /* Various states to be passed to the helper function */
    /* Uncomment as neceesary to try all outcomes */

    let stateObj;

    stateObj = [{ state: 'processing' }, { state: 'success' }];
    // stateObj = [{ state: 'processing' }, { state: 'error' }];
    // stateObj = [{ state: 'processing' }, { state: 'error', errorCode: 'NO_STOCK' }];
    // stateObj = [{ state: 'processing' }, { state: 'error', errorCode: 'INCORRECT_DETAILS' }];
    // stateObj = [{ state: 'processing' }, { state: 'error', errorCode: null }];
    // stateObj = [{ state: 'processing' }, { state: 'error', errorCode: undefined }];

    const result = await getProcessingPage(stateObj);
    this.setState({ result: JSON.stringify(result) });
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="App">
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;
