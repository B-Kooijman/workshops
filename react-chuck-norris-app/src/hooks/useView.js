import { useState } from "react";

export const viewState = {
  SUCCESS: "success", 
  LOADING: "loading",
  ERROR: "error"
}

const useView = (initialView = viewState.LOADING) => {
  const [view, setView] = useState(initialView);
  
  const viewSetters = {
    setSuccessView: () => setView(viewState.SUCCESS),
    setLoadingView: () => setView(viewState.LOADING),
    setErrorView: (error) => {
        setView(viewState.ERROR);
        console.error(error.message);
    }
  };

  return [view, viewSetters];
};

export default useView;