import { Grid } from "@mui/material";
import Country from "./regions/Country";

const Regions = () => {
  return (
    <Grid
    container
    sx={{
      paddingLeft: "150px",
      paddingTop: "100px",
    }}>
      <Country />
    </Grid>
  );
};

export default Regions;

