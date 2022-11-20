import { useEffect, useState } from "react";

// #region unnecessary extra usestate
const ChildComponent = ({ likeState }) => {
  const [isTopfact, setTopFact] = useState();
  const fiveOrMoreLikes = likeState.likes >= 5;

  useEffect(() => {
    setTopFact(true);
  }, [fiveOrMoreLikes]);

  return (
    <div>
      {isTopfact && <span> Top Fact about Chuck!</span>}
      <p>
        When Chuck Norris does a pushup, he isn't lifting himself up, he's
        pushing the Earth down.
      </p>
      <button onClick={likeState?.likeUpdater}>like!</button>
    </div>
  );
};

const DerivedState = () => {
  const [likes, setLikes] = useState(0);
  const likeUpdater = () => setLikes((likes) => likes + 1);

  return (
    <div className="box">
      <div>{likes} likes</div>
      <ChildComponent likeState={{ likes, likeUpdater }} />
    </div>
  );
};
//#endregion

// #region Derived State
// const ChildComponent = ({ likeState }) => 
//     <div>
//       {/* Prevents out of sync bugs */}
//       {likeState?.likes >= 5 && <span>Top Fact about Chuck!</span>}
//       <p>
//         When Chuck Norris does a pushup, he isn't lifting himself up, he's
//         pushing the Earth down.
//       </p>
//       <button onClick={likeState?.likeUpdater}>like!</button>
//     </div>

// const DerivedState = () => {
//   const [likes, setLikes] = useState(0);
//   const likeUpdater = () => setLikes((likes) => likes + 1);

//   return (
//     <div className="box">
//       <div>{likes} likes</div>
//       <ChildComponent likeState={{ likes, likeUpdater }} />
//     </div>
//   );
// };
//#endregion

export default DerivedState;
