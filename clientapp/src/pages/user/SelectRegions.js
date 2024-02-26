import useFetch from "./../../hooks/useFetch";
import { CircularProgress, Grid } from "@mui/material";
import { RegionsQuery } from "../../queries/regionsQuery";
import Regions from "../../components/user/SelectRegions/Regions";

const SelectRegions = () => {
  
    const { data: regions, isPending, error } = useFetch(RegionsQuery);

    return (
      <div>
        {error && <div>{error}</div>}
        {isPending && (
          <Grid
            container
            alignContent={"center"}
            justifyContent={"center"}
            style={{ height: "100vh" }}
          >
            <CircularProgress />
          </Grid>
        )}
        {regions && <Regions regionsDB={regions.data} />}
      </div>
    );
}
 
export default SelectRegions;