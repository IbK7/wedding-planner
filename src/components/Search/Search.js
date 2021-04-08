import React from "react";
import { makeStyles, Button, Grid, Box, Typography } from "@material-ui/core";
import {useHistory } from 'react-router-dom'
import Header from "../Navigation/Header/Header";
import Cakes from "../../assets/Images/cakes.jpg";

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
  const history = useHistory();
  const data = [
    {
      Name: "Vanilla Bean",
      Type: 'Cake',
      Image: Cakes,
      Location: "Location",
      Number: "0123456789",
      Email: "abc@example.com",
    },
    {
      Name: "Vanilla Bean",
      Type: 'Cake',
      Image: Cakes,
      Location: "Location",
      Number: "0123456789",
      Email: "abc@example.com",
    },
    {
      Name: "Vanilla Bean",
      Type: "Cake",
      Image: Cakes,
      Location: "Location",
      Number: "0123456789",
      Email: "abc@example.com",
    },
    {
      Name: "Vanilla Bean",
      Type: "Cake",
      Image: Cakes,
      Location: "Location",
      Number: "0123456789",
      Email: "abc@example.com",
    },
    {
      Name: "Vanilla Bean",
      Type: "Cake",
      Image: Cakes,
      Location: "Location",
      Number: "0123456789",
      Email: "abc@example.com",
    },
  ];
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
            Search Results

          </Typography>
        </div>
        {/* Body of the page with the list of items */}
        {data.map((item) => {
          return (
            <Box border={1} borderColor="#CBCBCB" className={classes.box}>
              <Grid
                container
                direction = 'row'
                alignItems="center"
                justify="space-around"
                spacing={1}
              >
                <Grid item lg = {2} md = {2} sm = {10} xs = {10}>
                  <img src={item.Image} style={{ width: "90%" }} alt = ""/>
                </Grid>

                {/* Name/Title */}
                <Grid item>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Name:</span> <br />
                    {item.Name}
                  </Typography>
                </Grid>
                
                <Grid item>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Type:</span> <br />
                    {item.Type}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Location:</span> <br />
                    {item.Location}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Contact:</span> <br />
                    {item.Number}
                  </Typography>
                </Grid>

                {/* Email*/}
                <Grid item>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Email:</span> <br />
                    {item.Email}
                  </Typography>
                </Grid>

                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.btn}
                    boxShadow={1}
                    style={{ background: "#D7A7AA", color: "white" }}
                    onClick = {()=>{
                      history.push('/supplier')
                    }}
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Box>
          );
        })}
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
