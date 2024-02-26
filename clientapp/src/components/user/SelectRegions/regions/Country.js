import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import City from "./City";
import { AppContext } from "../../../../contextapi/contexts/AppContext";

const Country = ({ appRegionsID, regionName }) => {
  const { appDispatch } = useContext(AppContext);
  const countriesID = Object.keys(appRegionsID);
  const [checked, setChecked] = useState({});

  useEffect(()=>{
    console.log({checked})
  },[checked])


  const handleChecked = (e, ID) => {
    const isChecked = e.target.checked;
    setChecked({ ...checked, [ID]: isChecked });
    appDispatch({
      type: isChecked ? "ADD_COUNTRY" : "REMOVE_COUNTRY",
      ID,
    });
  };

  return (
    <Grid container spacing={1} direction="column">
      {countriesID.map((ID) => (
        <div style={{ padding: 30 }} key={ID}>
          <Card
            style={{ maxWidth: 950, padding: "20px 5px", margin: "0 auto" }}
          >
            <CardContent>
              <Grid xs={12} item>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={(e) => handleChecked(e, ID)} />
                    }
                    label={regionName[ID]}
                  />
                </FormGroup>
              </Grid>
              {checked[ID] && (
                <Card
                  style={{
                    maxWidth: 750,
                    padding: "20px 5px",
                    margin: "0 auto",
                  }}
                >
                  <CardContent>
                    <City
                      appRegionsID={appRegionsID}
                      PID={ID}
                      regionName={regionName}
                    />
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      ))}
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <Button
            component={Link}
            to="/viewRegions"
            variant="contained"
            color="primary"
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Country;
