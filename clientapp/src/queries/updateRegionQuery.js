module.exports.updateRegionQuery = (strName, ID) =>(`mutation {
    updateRegion(strName:"${strName}",ID:${ID}){
            ID
            strName
    }
  }`);