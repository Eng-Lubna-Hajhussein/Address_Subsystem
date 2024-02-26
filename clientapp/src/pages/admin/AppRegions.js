import useFetch from "./../../hooks/useFetch";
import { CircularProgress, Grid } from "@mui/material";
import { RegionsQuery } from "../../queries/regionsQuery";
import Regions from "../../components/admin/AppRegions/Regions";

const AppRegions = () => {

  const { data: regions, isPending, error, refresh } = useFetch(RegionsQuery);

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
      {regions && <Regions regionsDB={regions.data} refresh={refresh} />}
    </div>
  );
};

export default AppRegions;
