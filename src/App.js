import React from 'react';
import './App.css';
import { getProcessingPage } from './helpers/processingHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      argument: '',
      result: 'Processing...',
    };
  }

  componentDidMount = async () => {
    /*
     * See below various states which can be passed to the helper function
     * Uncomment them as neceesary to try all of the different outcomes
     */

    let stateObj;

    stateObj = [{ state: 'processing' }, { state: 'success' }];
    // stateObj = [{ state: 'processing' }, { state: 'error' }];
    // stateObj = [{ state: 'processing' }, { state: 'error', errorCode: 'NO_STOCK' }];
    // stateObj = [{ state: 'processing' }, { state: 'error', errorCode: 'INCORRECT_DETAILS' }];
    // stateObj = [{ state: 'processing' }, { state: 'error', errorCode: null }];
    // stateObj = [{ state: 'processing' }, { state: 'error', errorCode: undefined }];

    this.setState({ argument: JSON.stringify(stateObj) });

    const result = await getProcessingPage(stateObj);
    this.setState({ result: JSON.stringify(result) });
  }

  render() {
    // console.log('state', this.state);
    return (
      <div>
        <p>Argument: {this.state.argument}</p>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}

export default App;