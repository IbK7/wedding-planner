import React from "react";
import { makeStyles, Button, Grid, Box, Typography } from "@material-ui/core";
import Header from "../Navigation/Header/Header";
import jwr from "../../assets/Images/jewellery.jpg";

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

export default function Jewellery() {
  const classes = useStyles();

  const data = [
    {
      Name: "Ruby Rose",
      Image: jwr,
      Location: "Bedfordshire, England",
      Number: "0123456789",
      Email: "abc@example.com",
    },
    {
      Name: "Ruby Rose",
      Image: jwr,
      Location: "Bedfordshire, England",
      Number: "0123456789",
      Email: "abc@example.com",
    },
    {
      Name: "Ruby Rose",
      Image: jwr,
      Location: "Bedfordshire, England",
      Number: "0123456789",
      Email: "abc@example.com",
    },
    {
      Name: "Ruby Rose",
      Image: jwr,
      Location: "Bedfordshire, England",
      Number: "0123456789",
      Email: "abc@example.com",
    },
    {
      Name: "Ruby Rose",
      Image: jwr,
      Location: "Bedfordshire, England",
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
            Wedding Jewellery
          </Typography>
        </div>
        {/* Body of the page with the list of items */}
        {data.map((item) => {
          return (
            <Box border={1} borderColor="#CBCBCB" className={classes.box}>
              <Grid
                container
                alignItems="center"
                justify="space-around"
                spacing={2}
              >
                <Grid item lg={3}>
                  <img src={item.Image} style={{ width: "90%" }} />
                </Grid>

                {/* Name/Title */}
                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Name:</span> <br />
                    {item.Name}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Location:</span> <br />
                    {item.Location}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Contact:</span> <br />
                    {item.Number}
                  </Typography>
                </Grid>

                {/* Email*/}
                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Email:</span> <br />
                    {item.Email}
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
