import { useContext } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import {
  CheckBoxOutlined,
  CheckBoxOutlineBlank,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import { AppContext } from "./../../../../contextapi/contexts/AppContext";
import Town from "./Town";

const City = ({ PID }) => {
  const { appState } = useContext(AppContext);
  const { regionName, sub } = appState.info;
  const citiesID = Object.keys(appState[PID]);
  const allSelected = (ID) => {
    const selected = Object.keys(appState[PID][ID]).length;
    if (!selected) {
      return <CheckBoxOutlineBlank />;
    }
    if (selected === sub[ID]) {
      return <CheckBoxOutlined />;
    } else {
      return <IndeterminateCheckBoxOutlined />;
    }
  };

  return (
    <Grid container spacing={1} direction="column">
      {!!citiesID.length &&
        citiesID.map((ID) => (
          <div key={ID}>
            <Grid xs={6} container style={{ padding: "5px 15px" }} item>
              <Grid item xs={1}>
                {allSelected(ID)}
              </Grid>
              <Grid item xs={5}>
                {regionName[ID]}
              </Grid>
            </Grid>
            {
              <Card
                style={{
                  maxWidth: 750,
                  padding: "10px 10px",
                  margin: "0 auto",
                }}
              >
                <CardContent>
                  <Town PID={ID} countryID={PID} />
                </CardContent>
              </Card>
            }
          </div>
        ))}
      {!citiesID.length && (
        <div>
          #{PID} {regionName[PID]} has no cities selected
        </div>
      )}
      {/* <Grid item xs={2}></Grid> */}
    </Grid>
  );
};

export default City;
