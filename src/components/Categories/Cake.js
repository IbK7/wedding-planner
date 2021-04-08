import React, { useState, useEffect } from "react";
import { makeStyles, Button, Grid, Box, Typography } from "@material-ui/core";
import Header from "../Navigation/Header/Header";
import Cakes from "../../assets/Images/cakes.jpg";
import { useSelector, useDispatch } from "react-redux"
import { business_actions } from "../../redux"

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "grey",
  },

  box: {
    width: "90%",
    margin: theme.spacing(2, 0, 0, 7),
    padding: theme.spacing(2),
    borderRadius: "20px",
    border: "3px solid #D7A7AA",
  },
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(5, 0, 5, 0),
    marginTop: "3vh",
  },
}));

export default function Cake() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const data = useSelector(state => state.business)
  useEffect(() => {
    dispatch(business_actions.fetch_business({ business_type: "cakes" }))
  }, [])

  return (
    <div>
      <Header />
      <div>
        <div style={{ marginTop: "6%" }}>
          <Typography
            variant="h3"
            style={{
              marginLeft: "2%",
              fontFamily: "DancingScript",
              fontWeight: "bold",
              color: "#8B5B6E",
            }}
          >
            Wedding Cakes
          </Typography>
        </div>
        {/* Body of the page with the list of items */}
        {data.length > 0 ? data.map((item) => {
          return (
            <Box border={1} borderColor="#CBCBCB" className={classes.box}>
              <Grid
                container
                alignItems="center"
                justify="space-around"
                spacing={2}
              >
                <Grid item lg={3}>
                  <img src={Cakes} style={{ width: "90%" }} alt="" />
                </Grid>

                {/* Name/Title */}
                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Name:</span> <br />
                    {item.name}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Location:</span> <br />
                    {item.user.address.name + ", " + item.user.address.city + ", " + item.user.address.state + " - " + item.user.address.zip + ", " + item.user.address.country}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Contact:</span> <br />
                    {item.user.phone}
                  </Typography>
                </Grid>

                {/* Email*/}
                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Email:</span> <br />
                    {item.user.email}
                  </Typography>
                </Grid>

                <Grid item lg={1}>
                  <Button
                    variant="contained"
                    className={classes.btn}
                    boxShadow={1}
                    style={{ background: "#D7A7AA", color: "white" }}
                  >
                    Wishlist
                  </Button>
                </Grid>
              </Grid>
            </Box>
          );
        }) : (
          <Box m={4}><Typography variant="h5" color="primary">There are no Cake Businesses Available</Typography></Box>
        )}
      </div>
      <div className={classes.appBar}>
        <div className={classes.footer}>
          <Typography
            variant="h4"
            style={{ fontFamily: "DancingScript", color: "white" }}
          >
            My Wedding Planner
          </Typography>
        </div>
      </div>
    </div>
  );
}
