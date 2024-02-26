import { useEffect, useRef, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { Box, TextField, Button, Grid } from "@mui/material";
import { Edit, ArrowBackSharp } from "@mui/icons-material";
import { updateRegionQuery } from "../../../../queries/updateRegionQuery";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  borderRadius: "2%",
  boxShadow: 24,
  p: 4,
  height: 100,
};

const EditRegion = ({ ID, strName, handleClose, refresh, regionType }) => {
  const nameInput = useRef("");
  const { data, isPending, error, setName, name } = useFetch(
    updateRegionQuery,
    true,
    ID
  );
  const [value, setValue] = useState(strName);
  const firstRender = useRef(true);
  const editRegion = (e) => {
    e.preventDefault();
    setName(nameInput.current.value);
    nameInput.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        refresh();
      }
    };
  }, []);

  return (
    <Box sx={style}>
      <div style={{ height: "100%" }}>
        {error && <div>{error}</div>}
        {!data && (
          <Grid container style={{ height: "100%" }}>
            <form onSubmit={editRegion} style={{ width: "100%" }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={nameInput}
                  label={`${regionType} Name`}
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={4} style={{ height: "10%" }}></Grid>
              <Button
                fullWidth
                disabled={isPending}
                type="submit"
                variant="outlined"
              >
                <Edit fontSize="small" /> Edit{" "}
              </Button>
            </form>
          </Grid>
        )}
        {data && (
          <Grid container direction={"column"} style={{ height: "100%" }}>
            <Grid item xs={3}>
              #{data.data.updateRegion.ID} {regionType} is edited successfully
              to {data.data.updateRegion.strName}
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                onClick={() => handleClose()}
                variant="outlined"
              >
                <ArrowBackSharp fontSize="small" /> Back{" "}
              </Button>
            </Grid>
          </Grid>
        )}
      </div>
    </Box>
  );
};

export default EditRegion;
