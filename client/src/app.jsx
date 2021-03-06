import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewList from "./reviewList.jsx";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviews(window.location.search.split("?")[1]);
  }

  getReviews(number = 101) {
    axios
      .get(`/critics/${number}`) //ec2 microservice public ip
      .then(response => {
        this.setState({ reviews: response.data });
      })
      .catch(err => {
        console.log("Failure getting reviews", err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="panel-heading">
          CRITIC REVIEWS FOR MOVIE {window.location.search.substring(1)}
        </h2>

        <ReviewList reviews={this.state.reviews}/>
  
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("critics"));
//window.Critic = App;