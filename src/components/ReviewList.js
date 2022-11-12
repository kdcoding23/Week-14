// import {useState} from "react";
// import newRating from './Stars'
// // import ReviewForm from "./ReviewForm";
// import button from "./ReviewForm"

// const ReviewList = (props) => {
//     // console.log(props);
//     // const reviews = [];
//     // const ReviewComponent = props.reviewComponent;

//     const [reviews] = useState([
//         {
//             movie: "",
//             reviews: "",
//             rating: `${newRating}`,
//         }
//     ]);

//     document.getElementsByClassName("btn-sm").addeventlistener('click', function(reviews){
//         let reviews = `${reviews}`
//         console.log(this.state);
//     });

// }

//     onSubmit = (event) => {
//             event.preventDefault()
//             this.props.addMovie()
//         }
//         handleTypeChange = (event) => {
//             console.log(event); 
//         }
//             return(
//                 <ReviewForm />
//             )
            
// export default ReviewList;
// what I originally was doing- above


import React from 'react';
import Review from './Review'
import ReviewForm from './ReviewForm'


let e = React.createElement;


export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews
    }
  }

  


// was trying to push the user input/review to the reviews array after the input was submitted and then console.log the review
  addReview = (arg) => {
    let reviews = [];
    for (let review of this.state.reviews) {
      reviews.push({...review});
    }
    reviews.push(arg);

    
    this.setState({reviews});
    // console.log(`review: ${reviews}`);

    // render(){
    // const reviews = [];
    if (this.state.reviews) {
        for (let review of this.state.reviews) {
        reviews.push(e(Review, {...review}, null));
        }
    }

    return React.createElement(
        'div',
        {className:'p-2'},
        {clasName:'mt-2'},
        reviews,
        e(ReviewForm, {...{reviews:reviews}, function:this.addReview}, null)
    )
}};