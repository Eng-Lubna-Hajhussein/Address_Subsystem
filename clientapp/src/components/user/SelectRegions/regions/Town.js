import { useContext, useState } from "react";
import {
  Grid,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { AppContext } from "./../../../../contextapi/contexts/AppContext";

const Town = ({ PID, countryID, appRegionsID, regionName }) => {
  const { appDispatch } = useContext(AppContext);
  const townsID = appRegionsID[countryID][PID];
  const [checked, setChecked] = useState({});

  const handleChecked = (e, ID) => {
    const isChecked = e.target.checked;
    setChecked({ ...checked, [ID]: isChecked });
    appDispatch({
      type: isChecked ? "ADD_TOWN" : "REMOVE_TOWN",
      ID,
      PID,
      countryID,
    });
  };
  return (
    <div>
      {!!townsID.length &&
        townsID.map((ID) => (
          <Grid key={ID} container>
            <Grid xs={12} item>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={(e) => handleChecked(e, ID)} />}
                  label={regionName[ID]}
                />
              </FormGroup>
            </Grid>
          </Grid>
        ))}
      {!townsID.length && (
        <div>
          #{PID} {regionName[PID]} has no towns added
        </div>
      )}
    </div>
  );
};

export default Town;
