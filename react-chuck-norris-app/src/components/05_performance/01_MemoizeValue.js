import { useEffect, useState, useMemo } from "react";

const MemoizeValue = () => {
  const [likes, setLikes] = useState(0);
  const [multipliedLikes, setMultipliedLikes] = useState(0);

  // #region useEffect no performanceoptimization
  const multiplier = () => {
    // this will be logged twice a time, why do you think?
    console.log("executed multiplier");
    return likes * 10; 
  };

  useEffect(() => setMultipliedLikes(multiplier));

  // #endregion

  // #region useMemo
  //2 useMemo, memorizes the value (cache), the cache logic is heavy extra work!
  // const multiplier = useMemo(() => {
  //   console.log("executed multiplier");
  //   return likes * 10;
  // }, [likes]);

  //  useEffect(() => {
  //   console.log("multiplier", multiplier);
  //   setMultipliedLikes(multiplier)
  // });
  // #endregion
  
  //#region with useEffect
  // 3 with useEffect, same result, only the side effect is just skipped, instead of checking the cache
  // const multiplier = () => {
  //   console.log("executed multiplier")
  //   return likes * 10;
  // }

  // useEffect(() => {
  //   console.log("multiplier", multiplier)
  //   setMultipliedLikes(multiplier)
  // }, [likes])
  // #endregion

  const clickHandler = () => setLikes((likes) => likes + 1);

  return (
    <div className="box">
      <div>{likes} likes</div>
      <div>{multipliedLikes} multipliedLikes</div>
      <br />
      <p>
        When Chuck Norris does a pushup, he isn't lifting himself up, he's
        pushing the Earth down.
      </p>

      <button onClick={clickHandler}>like</button>
    </div>
  );
};

export default MemoizeValue;
