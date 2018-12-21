import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        reviews: [],
        type:''
    };
  }

  getReviews() {
   
  }

  render() {
    return (
      <div>
          <h1>Test</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));