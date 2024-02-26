import { useContext, useEffect } from "react";
import { AppContext } from "../contextapi/contexts/AppContext";

const useRegionInfo = (sub,regionName) => {
  const { appDispatch } = useContext(AppContext);
  useEffect(()=>{
    appDispatch({
        type: "GET_INFO",
        info:{sub,regionName}
      });
  },[])
};

export default useRegionInfo;
