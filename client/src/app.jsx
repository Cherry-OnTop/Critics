import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReviewList from "./reviewList.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      type: ""
    };
  }

  componentDidMount() {
    this.getReviews(document.URL.substr(-3));
  }

  getReviews(number = 101) {
    axios
      .get(`http://localhost:9003/movies/${number}`)
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

        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("critics"));
