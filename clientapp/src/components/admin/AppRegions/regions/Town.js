import { useState } from "react";
import { Button, Grid, Modal } from "@mui/material";
import { Edit, Add } from "@mui/icons-material";
import AddRegion from "../forms/AddRegion";
import EditRegion from "../forms/EditRegion";
import Towns from "../selectMenu/Towns";

const Town = ({
  selectTown,
  appRegionsID,
  regionName,
  handleClose,
  refresh,
  open,
  townID,
  PID,
  handleOpen,
  countryID,
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
        <Towns
          countryID={countryID}
          PID={PID}
          selectTown={selectTown}
          appRegionsID={appRegionsID}
          regionName={regionName}
        />
      </Grid>
      <Grid item xs={1} p={1}>
        <Button
          sx={{ height: "55px" }}
          fullWidth
          variant="outlined"
          onClick={handleAdd}
        >
          <Add fontSize="small" /> ADD{" "}
        </Button>
      </Grid>
      <Grid item xs={1} p={1}>
        {townID !== "" && (
          <Button
            sx={{ height: "55px" }}
            fullWidth
            variant="outlined"
            onClick={handleEdit}
          >
            <Edit fontSize="small" /> EDIT{" "}
          </Button>
        )}
      </Grid>
      <Modal key={townID} open={open} onClose={handleClose}>
        {
          <>
            {modalForm === "add" && (
              <AddRegion
                PID={PID}
                handleClose={handleClose}
                refresh={refresh}
                open={open}
                regionType={"Town"}
              />
            )}
            {modalForm === "edit" && (
              <EditRegion
                ID={townID}
                strName={regionName[townID]}
                handleClose={handleClose}
                refresh={refresh}
                open={open}
                regionType={"Town"}
              />
            )}
          </>
        }
      </Modal>
    </Grid>
  );
};

export default Town;
