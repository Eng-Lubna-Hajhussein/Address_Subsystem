module.exports.addRegionQuery = (strName, PID=0) =>(`mutation {
    addRegion(strName:"${strName}",PID:${PID}){
      ID
      strName
    }
  }`);