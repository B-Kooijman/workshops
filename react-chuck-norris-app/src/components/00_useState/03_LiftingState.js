import { useState } from "react";

//#region Child State
const ChildComponent = ()  => {

  const [likes, setLikes] = useState(0);
  const likeUpdater = () => setLikes((likes) => likes + 1);

  return (
  <>
    <div>{likes} likes</div>
    <p>
      When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing
      the Earth down.
    </p>
    <button onClick={likeUpdater}>like!</button>
  </>)
}

const LiftingState = () => 
    <div className="box">
      <ChildComponent />
    </div>
//#endregion 


// #region Lifting State
// const ChildComponent = ({ clickHandler }) => (
//   <>
//     <p>
//       When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing
//       the Earth down.
//     </p>
//     <button onClick={clickHandler}>like!</button>
//   </>
// );

// const LiftingState = () => {
//   const [likes, setLikes] = useState(0);
//   const likeUpdater = () => setLikes((likes) => likes + 1);

//   return (
//     <div className="box">
//       <div>{likes} likes</div>
//       <ChildComponent clickHandler={likeUpdater} />
//     </div>
//   );
// };
// #endregion

// #region Passing State and Setter
// const ChildComponent = ({ likes, likeUpdater }) => {
//   return (
//     <div>
//       {likes >= 5 && <span> Top Fact about Chuck!</span>}
//       <p>
//         When Chuck Norris does a pushup, he isn't lifting himself up, he's
//         pushing the Earth down.
//       </p>
//       <button onClick={likeUpdater}>like!</button>
//     </div>
//   );
// };

// const LiftingState = () => {
//   const [likes, setLikes] = useState(0);
//   const likeUpdater = () => setLikes((likes) => likes + 1);

//   return (
//     <div className="box">
//       <div>{likes} likes</div>
//       <ChildComponent likes={likes} likeUpdater={likeUpdater} />
//     </div>
//   );
// };
//#endregion

export default LiftingState;
