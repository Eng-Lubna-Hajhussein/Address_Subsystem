import { useContext } from "react";
import { Grid } from "@mui/material";
import { AppContext } from "./../../../../contextapi/contexts/AppContext";

const Town = ({ PID, countryID }) => {
  const { appState } = useContext(AppContext);
  const { regionName, sub } = appState.info;
  const townsID = appState[countryID][PID];

  return (
    <div>
      {!!townsID.length &&
        townsID.map((ID) => (
          <Grid key={ID} container>
            <Grid xs={12} style={{ padding: "5px 5px" }} item>
              {regionName[ID]}
            </Grid>
          </Grid>
        ))}
      {!townsID.length && (
        <div>
          #{PID} {regionName[PID]} has no towns selected
        </div>
      )}
    </div>
  );
};

export default Town;
