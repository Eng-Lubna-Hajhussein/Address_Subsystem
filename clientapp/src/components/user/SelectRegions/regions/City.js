import { useContext, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { AppContext } from "./../../../../contextapi/contexts/AppContext";
import Town from "./Town";

const City = ({ appRegionsID, PID, regionName }) => {
  const { appDispatch } = useContext(AppContext);
  const citiesID = Object.keys(appRegionsID[PID]);
  const [checked, setChecked] = useState({});

  const handleChecked = (e, ID) => {
    const isChecked = e.target.checked;
    setChecked({ ...checked, [ID]: isChecked });
    appDispatch({
      type: isChecked ? "ADD_CITY" : "REMOVE_CITY",
      ID,
      PID,
    });
  };
  return (
    <div>
      {!!citiesID.length &&
        citiesID.map((ID) => (
          <div key={ID}>
            <Grid xs={12} item>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={(e) => handleChecked(e, ID)} />}
                  label={regionName[ID]}
                />
              </FormGroup>
            </Grid>
            {checked[ID] && (
              <Card
                style={{
                  maxWidth: 650,
                  padding: "20px 5px",
                  margin: "0 auto",
                }}
              >
                <CardContent>
                  <Town
                    PID={ID}
                    countryID={PID}
                    appRegionsID={appRegionsID}
                    regionName={regionName}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      {!citiesID.length && (
        <div>
          #{PID} {regionName[PID]} has no cities added
        </div>
      )}
    </div>
  );
};

export default City;
