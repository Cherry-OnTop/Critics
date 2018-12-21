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

  componentDidMount(){
    this.getReviews()
  }

  getReviews(number = 101) {
   axios.get(`/movies/${number}`)
    .then((response) => {
      this.setState({reviews: response.data})
    })
    .catch((err) => {
      console.log('Failure getting reviews', err)
    })
  }

  render() {
    return (
      <div>
          <h2 class="panel-heading">Critic Reviews for Movie</h2>
          {this.state.reviews.map(r => {
            return <div>{r.movieId}</div>
          })}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));