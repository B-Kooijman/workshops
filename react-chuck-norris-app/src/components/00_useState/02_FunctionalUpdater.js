import { useState } from "react";

const FunctionalUpdater = () => {

  const [likes, setLikes] = useState(0);

  // 1 regular state update
  const regularUpdater = () => {
    setLikes(likes + 1);
    setLikes(likes + 1);
    setLikes(likes + 1);
  }

  // 2 functional state update
  const functionalUpdater = () => {
    setLikes(likes => likes + 1);
    setLikes(likes => likes + 1);
    setLikes(likes => likes + 1);
  }

  return (
    <div className="box">
      <div>{likes} likes</div>
      <p>When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing the Earth down.</p>
      <button onClick={regularUpdater}>+3 likes with regular update</button>
      <button onClick={functionalUpdater}>+3 likes with functional update</button>
    </div>
  );
};

export default FunctionalUpdater;
