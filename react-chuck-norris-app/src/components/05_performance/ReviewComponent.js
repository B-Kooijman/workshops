import { memo } from "react";

// this is deprecated, never use in production! Just included here for demo purposes.
// This was used in earlier versions of React. Now its included in PureComponent/React.memo
import shallowCompare from 'react-addons-shallow-compare' 

function areEqual(prevProps, nextProps) {
  console.log("prevProps", prevProps)
  console.log("nextProps", nextProps)

    // reference comparer
    var isEqual = prevProps === nextProps;

    // value comparer
    //var isEqual = prevProps.message === nextProps.message;

    // former react comparer now baked in to React
    //var isEqual = shallowCompare(prevProps, nextProps); 

  console.log("isEqual", isEqual)
  return isEqual;
}

const ReviewComponent = ({message}) => (
    <>
    {/* Notice this get rerended when the prevProps and nextProps are not equal in comparison. */}
      {console.log("Rerendered:  ReviewComponent")}
      <p>
        {message}
      </p>
    </>
  );

 export default memo(ReviewComponent);
  //export default memo(ReviewComponent, areEqual);
