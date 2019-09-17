import React, { Component } from 'react';
import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <div>
        <div><Lottery /></div>
        <div><Lottery title={"Mini lotto"} maxNum={10} numBalls={4} /></div>
      </div>
    );
  }
}

export default App;
