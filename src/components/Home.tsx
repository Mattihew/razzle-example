import { createStyles, Grid, makeStyles, Paper, Theme, Container } from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      <Container>
        <Grid container alignItems="stretch" spacing={2}>
          <Grid item xs>
            <Paper className={classes.paper}>Hi</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Hi2</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Home;
