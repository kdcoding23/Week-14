import React from "react";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import Review from "./components/Review";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import Start from "./components/Stars";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    // this.resetClicks = this.resetClicks.bind(this);
  }

  componentDidMount = () => {
    console.log("");
    this.setState();
  };

  // render = () => {
  //   console.log("render");
  //   if (this.state.clicks >= 20) {
  //     var box = (
  //       <ReallySpecialBox
  //         clicks={this.state.clicks}
  //         resetClicks={this.resetClicks}
  //       />
  //     );
  //   }
  //   return (
  //     <div>
  //     </div>
  //   );
  // };
}

export default App;