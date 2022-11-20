import { useState, useCallback, useMemo } from "react";
import ReviewComponent  from "./ReviewComponent";
import CallbackReviewComponent  from "./CallbackReviewComponent";

function getRandomReview(number = 0) {
  console.log("Executed function:  getRandomReview");
  const reviews = ["No comment", "This is afwul.", "Not funny at ALL", "Heard better", ":D",  "LOL, so funny!"]

  if (number > 5) {
    number = 5;
  }

  // const randomIndex = Math.round(Math.random() * number)
  return reviews[number];
}

const MemoizeFunction = () => {
  const [number, setNumber] = useState(null);
  //const reviewHandler = () => getRandomReview(number);
  //const reviewHandler = useCallback(() => getRandomReview(number), [number]);
  
  // same result, if you dont pass a function. you can use useMemo
  //const reviewHandler = useMemo(() => getRandomReview(number), [number]); 

  return (
    <div className="box">
      <p>
        When Chuck Norris does a pushup, he isn't lifting himself up, he's
        pushing the Earth down.
      </p>

      <input type="number" max="5" min="0" placeholder="star from 0 - 5" onChange={(event) => setNumber(event.currentTarget.value || 0)}/>

      {/* First pass a static message */}
      <ReviewComponent message={"No comment"}/>

      {/* now also pass a function */}
      {/* <CallbackReviewComponent message={"your rating: "} reviewHandler={reviewHandler} /> */}
      
      {/* {console.log("this is memoized: ", reviewHandler)} */}
    </div>
  );
};

export default MemoizeFunction;
