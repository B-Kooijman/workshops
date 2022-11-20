import { useState } from "react";
import FactOnSubmit from "./FactOnSubmit";
import FactOnSubmitRefactored from "./FactOnSubmitRefactored";

function FactOnUnmount() {
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <button onClick={() => setMounted(false)}>Unmount the component!!</button>
      {mounted && <FactOnSubmit />}
      {/* {mounted && <FactOnSubmitRefactored />} */}
    </>
  );
}

export default FactOnUnmount;
