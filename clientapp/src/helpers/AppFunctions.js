export const orderRegions = ({ Regions: regions }) => {
    const appRegionsID = {};
    const ccID = {};
    const regionName = {};
    const sub = {};
    regions.forEach(({ ID, strName, PID }) => {
      regionName[ID] = strName;
      if (PID === 0) {
        appRegionsID[ID] = {};
      } else if (appRegionsID[PID]) {
        appRegionsID[PID][ID] = [];
        ccID[ID] = PID;
        sub[PID] = sub[PID] ? ++sub[PID] : 1;
      } else if (appRegionsID[ccID[PID]]) {
        appRegionsID[ccID[PID]][PID].push(ID);
        sub[PID] = sub[PID] ? ++sub[PID] : 1;
      }
    });
    return { appRegionsID, regionName, ccID, sub };
};