import {Box,InputLabel,MenuItem,FormControl, Select} from "@mui/material";

const Cities = ({ PID, selectCity,appRegionsID, regionName  }) => {
  const citiesID = Object.keys(appRegionsID[PID]);
  const label = `${(regionName[PID]).charAt(0).toUpperCase()+(regionName[PID]).slice(1)} Cities`;
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select label={label} onChange={selectCity} defaultValue="">
      <MenuItem value="">none</MenuItem>
      {citiesID.map((ID) => (
        <MenuItem key={ID} value={ID}>
          {regionName[ID]}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
    </Box>
  );
};

export default Cities;
