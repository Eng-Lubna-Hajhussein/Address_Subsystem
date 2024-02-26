import { useEffect, useRef } from "react";
import useFetch from "../../../../hooks/useFetch";
import { Box, TextField, Button, Grid } from "@mui/material";
import { Add, ArrowBackSharp } from "@mui/icons-material";
import { addRegionQuery } from "../../../../queries/addRegionQuery";

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

const AddRegion = ({ PID, handleClose, refresh, regionType }) => {
  const nameInput = useRef("");

  const { data, isPending, error, setName } = useFetch(addRegionQuery,true,PID);

  const firstRender = useRef(true);

  const addRegion = (e) => {
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
            <form onSubmit={addRegion} style={{ width: "100%" }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={nameInput}
                  label={`${regionType} Name`}
                />
              </Grid>
              <Grid item xs={4} style={{ height: "10%" }}></Grid>
              <Button
                fullWidth
                disabled={isPending}
                type="submit"
                variant="outlined"
              >
                <Add fontSize="small" /> ADD{" "}
              </Button>
            </form>
          </Grid>
        )}
        {data && (
          <Grid container direction={"column"} style={{ height: "100%" }}>
            <Grid item xs={3}>
              #{data.data.addRegion.ID} {data.data.addRegion.strName}{" "}
              {regionType} is added successfully
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

export default AddRegion;
