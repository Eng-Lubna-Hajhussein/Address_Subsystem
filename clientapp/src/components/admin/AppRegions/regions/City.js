import { useState } from "react";
import { Button, Grid, Modal } from "@mui/material";
import { Edit, Add } from "@mui/icons-material";
import AddRegion from "../forms/AddRegion";
import EditRegion from "../forms/EditRegion";
import Cities from "../selectMenu/Cities";

const City = ({
  selectCity,
  appRegionsID,
  regionName,
  handleClose,
  refresh,
  open,
  cityID,
  PID,
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
    <Grid container item xs={12} style={{ height: "20%" }}>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Cities
          PID={PID}
          selectCity={selectCity}
          appRegionsID={appRegionsID}
          regionName={regionName}
        />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={1}>
        <Button fullWidth variant="outlined" onClick={handleAdd}>
          <Add fontSize="small" /> ADD
        </Button>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={1}>
        {cityID !== "" && (
          <Button fullWidth variant="outlined" onClick={handleEdit}>
            <Edit fontSize="small" /> EDIT
          </Button>
        )}
      </Grid>
      <Grid item xs={2}></Grid>
      <Modal key={cityID} open={open} onClose={handleClose}>
        {
          <>
            {modalForm === "add" && (
              <AddRegion
                PID={PID}
                handleClose={handleClose}
                refresh={refresh}
                open={open}
                regionType={"City"}
              />
            )}
            {modalForm === "edit" && (
              <EditRegion
                ID={cityID}
                strName={regionName[cityID]}
                handleClose={handleClose}
                refresh={refresh}
                open={open}
                regionType={"City"}
              />
            )}
          </>
        }
      </Modal>
    </Grid>
  );
};

export default City;
