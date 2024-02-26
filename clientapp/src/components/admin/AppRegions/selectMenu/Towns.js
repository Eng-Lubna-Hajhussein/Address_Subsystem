import {Box,InputLabel,MenuItem,FormControl, Select} from "@mui/material";

const Towns = ({ countryID, PID, selectTown,appRegionsID, regionName  }) => {
  const townsID = appRegionsID[countryID][PID];
  const label = `${(regionName[PID]).charAt(0).toUpperCase()+(regionName[PID]).slice(1)} Towns`;
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select label={label} onChange={selectTown} defaultValue="">
      <MenuItem value="">none</MenuItem>
      {townsID.map((ID) => (
        <MenuItem key={ID} value={ID}>
          {regionName[ID]}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
    </Box>
  );
};

export default Towns;
