import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Grow, Paper, Link, Button } from "@material-ui/core";
import Card from "./card";
import useStyles from "./style";

const Repos = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [limit, setLimit] = useState(3);
  const [size, setSize] = useState(0);
  const [showBtn, setShowBtn] = useState(1);

  useEffect(() => {
    axios(`https://api.github.com/users/neonshobhit/repos?per_page=${limit}`)
      .then((res) => {
        setBlogs(res.data);
        if (size === res.data.length) setShowBtn(0);
        else setSize(res.data.length);
      })
      .catch((err) => console.log(err));
  }, [limit]);

  const handleClick = () => {
    setLimit(limit + 3);
  };

  const ButtonCom = () => {
    return (
      <>
        {showBtn ? (
          <Button
            variant="contained"
            color="Secondary"
            onClick={() => {
              handleClick();
            }}
          >
            Show More
          </Button>
        ) : null}
      </>
    );
  };
  return (
    <div className={classes.root}>
      <h2>My Github Repository</h2>
      {blogs ? (
        <div>
          <Grow in className={classes.listContainer}>
            <Grid container alignItems="stretch" spacing={3}>
              {blogs.map((blog, index) => {
                return <Card key={index} blog={blog} />;
              })}
            </Grid>
          </Grow>
          <ButtonCom />
        </div>
      ) : (
        <h1>No Blogs have been written yet.</h1>
      )}
    </div>
  );
};
export default Repos;
