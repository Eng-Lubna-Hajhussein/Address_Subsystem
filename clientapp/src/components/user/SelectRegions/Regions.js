import useRegionInfo from "../../../hooks/useRegionInfo";
import { orderRegions } from "../../../helpers/AppFunctions";
import Country from "./regions/Country";

const Regions = ({ regionsDB }) => {
  const { appRegionsID, regionName, sub } = orderRegions(regionsDB);

  useRegionInfo(sub,regionName);
  
  return (
    <div>
      <Country
        appRegionsID={appRegionsID}
        regionName={regionName}
        sub={sub}
      />
    </div>
  );
};

export default Regions;
