import React from "react";
import { Grid, Grow, Paper, Link } from "@material-ui/core";
import useStyles from "./style";

const Card = ({ blog }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper className={classes.box}>
        <h3>{blog.name}</h3>
        <Link href={`${blog.svn_url}`} color="inherit">
          Go to Repository
        </Link>
      </Paper>
    </Grid>
  );
};
export default Card;
