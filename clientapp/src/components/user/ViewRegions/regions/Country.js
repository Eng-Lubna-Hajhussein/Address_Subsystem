import { useContext } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import {
  CheckBoxOutlined,
  CheckBoxOutlineBlank,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import City from "./City";
import { AppContext } from "../../../../contextapi/contexts/AppContext";

const Country = () => {
  const { appState } = useContext(AppContext);
  const { regionName, sub } = appState.info;
  const countriesID = Object.keys(appState).slice(0, -1);
  const allSelected = (ID) => {
    const selected = Object.keys(appState[ID]).length;
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
      {countriesID.map((ID) => (
        <div style={{ padding: 30 }} key={ID}>
          <Card style={{ maxWidth: 950, padding: "5px 5px", margin: "0 auto" }}>
            <CardContent>
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
                    padding: "5px 15px",
                    margin: "0 auto",
                  }}
                >
                  <CardContent>
                    <City PID={ID} />
                  </CardContent>
                </Card>
              }
            </CardContent>
          </Card>
        </div>
      ))}
    </Grid>
  );
};

export default Country;
