import {Box,InputLabel,MenuItem,FormControl, Select} from "@mui/material";

const Countries = ({ selectCountry,appRegionsID, regionName }) => {
  const countriesID = Object.keys(appRegionsID);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <InputLabel>Countries</InputLabel>
    <Select label="Countries" onChange={selectCountry} defaultValue="">
      <MenuItem value="">none</MenuItem>
      {countriesID.map((ID) => (
        <MenuItem key={ID} value={ID}>
          {regionName[ID]}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
    </Box>
  );
};

export default Countries;
