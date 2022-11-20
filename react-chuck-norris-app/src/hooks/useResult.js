import { useState } from "react";

// This is a simple example of Encapsulation.
// Shareable.
// Testable. 
// Optimized for change.

const useResult = () => {
  const [result, setResult] = useState(null);

  return [result, setResult];
};

export default useResult;