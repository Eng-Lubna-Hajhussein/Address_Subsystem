import { useState } from "react";
import { Button, Grid, Modal } from "@mui/material";
import { Edit, Add } from "@mui/icons-material";
import Countries from "../selectMenu/Countries";
import AddRegion from "../forms/AddRegion";
import EditRegion from "../forms/EditRegion";

const Country = ({
  selectCountry,
  appRegionsID,
  regionName,
  handleClose,
  refresh,
  open,
  countryID,
  handleOpen,
}) => {
  const [modalForm, setModalForm] = useState("");
  const handleAdd = () => {
    setModalForm("add");
    handleOpen();
  };
  const handleEdit = () => {
    setModalForm("edit");
    handleOpen();
  };
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent={"center"}
      justifyItems={"center"}
      py={5}
    >
      <Grid item xs={4} p={1}>
        <Countries
          selectCountry={selectCountry}
          appRegionsID={appRegionsID}
          regionName={regionName}
        />
      </Grid>
      <Grid item xs={1} p={1}>
        <Button
          fullWidth
          variant="outlined"
          sx={{ height: "55px" }}
          onClick={handleAdd}
        >
          <Add fontSize="small" /> ADD{" "}
        </Button>
      </Grid>
      <Grid item xs={1} p={1}>
        {countryID !== "" && (
          <Button fullWidth sx={{ height: "55px" }} variant="outlined" onClick={handleEdit}>
            <Edit fontSize="small" /> EDIT{" "}
          </Button>
        )}
      </Grid>
      <Modal key={countryID} open={open} onClose={handleClose}>
        {
          <>
            {modalForm === "add" && (
              <AddRegion
                PID={0}
                handleClose={handleClose}
                refresh={refresh}
                open={open}
                regionType={"Country"}
              />
            )}
            {modalForm === "edit" && (
              <EditRegion
                ID={countryID}
                strName={regionName[countryID]}
                handleClose={handleClose}
                refresh={refresh}
                open={open}
                regionType={"Country"}
              />
            )}
          </>
        }
      </Modal>
    </Grid>
  );
};

export default Country;
