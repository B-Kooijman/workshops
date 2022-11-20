
import {memo} from "react";

const CallbackReviewComponent = ({message, reviewHandler}) => {
  var rating = reviewHandler;

  return (
    <>
      {console.log("Rerendered:  ReviewComponent")}
      <p>
        {message} {rating}
      </p>
    </>
  )
}

  export default memo(CallbackReviewComponent);