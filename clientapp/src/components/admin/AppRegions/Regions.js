import { useState } from "react";
import { Grid } from "@mui/material";
import { orderRegions } from "../../../helpers/AppFunctions";
import Country from "./regions/Country";
import City from "./regions/City";
import Town from "./regions/Town";

const Regions = ({ regionsDB, refresh }) => {
  const { appRegionsID, regionName } = orderRegions(regionsDB);
  // console.log('orderRegions(regionsDB)',appRegionsID);

  const [countryID, setCountryID] = useState("");
  
  const [cityID, setCityID] = useState("");
  const [townID, setTownID] = useState("");

  const [openCountry, setOpenCountry] = useState(false);
  const handleOpenCountry = () => setOpenCountry(true);
  const handleCloseCountry = () => setOpenCountry(false);
  const [openCity, setOpenCity] = useState(false);
  const handleOpenCity = () => setOpenCity(true);
  const handleCloseCity = () => setOpenCity(false);
  const [openTown, setOpenTown] = useState(false);
  const handleOpenTown = () => setOpenTown(true);
  const handleCloseTown = () => setOpenTown(false);

  const selectCountry = (e) => {
    setCountryID(e.target.value);
    setCityID("");
  };
  
  const selectCity = (e) => {
    setCityID(e.target.value);
    setTownID("");
  };
  const selectTown = (e) => {
    setTownID(e.target.value);
  };

  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={12} style={{ height: "10%" }}></Grid>
      {/* country */}
      <Country
        selectCountry={selectCountry}
        appRegionsID={appRegionsID}
        regionName={regionName}
        handleClose={handleCloseCountry}
        refresh={refresh}
        open={openCountry}
        countryID={countryID}
        handleOpen={handleOpenCountry}
      />
      {/* city */}
      {countryID !== "" && (
        <City
          selectCity={selectCity}
          appRegionsID={appRegionsID}
          regionName={regionName}
          handleClose={handleCloseCity}
          refresh={refresh}
          open={openCity}
          cityID={cityID}
          PID={countryID}
          handleOpen={handleOpenCity}
        />
      )}
      {/* town */}
      {countryID !== "" && cityID !== "" && (
        <Town
          selectTown={selectTown}
          appRegionsID={appRegionsID}
          regionName={regionName}
          handleClose={handleCloseTown}
          refresh={refresh}
          open={openTown}
          townID={townID}
          PID={cityID}
          countryID={countryID}
          handleOpen={handleOpenTown}
        />
      )}
    </Grid>
  );
};

export default Regions;
