import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme
} from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

const Home: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container alignItems="stretch" spacing={2}>
          <Grid item xs>
            <Paper className={classes.paper}>Hi</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Hi2</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Home;
