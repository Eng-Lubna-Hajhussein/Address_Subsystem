import useRegionInfo from "../../../hooks/useRegionInfo";
import { orderRegions } from "../../../helpers/AppFunctions";
import Country from "./regions/Country";
import { Grid } from "@mui/material";

const Regions = ({ regionsDB }) => {
  const { appRegionsID, regionName, sub } = orderRegions(regionsDB);

  useRegionInfo(sub, regionName);

  return (
    <Grid
      container
      sx={{
        paddingLeft: "150px",
        paddingTop: "100px",
      }}
    >
      <Country appRegionsID={appRegionsID} regionName={regionName} sub={sub} />
    </Grid>
  );
};

export default Regions;
