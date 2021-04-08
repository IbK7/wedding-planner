import React from "react";
import { makeStyles, Button, Grid, Box, Typography } from "@material-ui/core";
import Header from "../../Navigation/BusinessHeader/BusinessHeader";
import {PDFDownloadLink} from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer';
import InvoiceDocument from './InvoiceDocument'

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
  txt: {
      margin: theme.spacing(2)
  }
}));

export default function Cake() {
  const classes = useStyles();

  const data = [
    {
      User: "Email",
      Status: "Status",
      Number: "0123456789",
      ReservationDate: "Date",
      ExpiryDate: "Date",
      Tax: "Tax Value",
      Active: true
    },
    {
        User: "Email",
        Status: "Status",
        Number: "0123456789",
        ReservationDate: "Date",
        ExpiryDate: "Date",
        Tax: "Tax Value",
        Active: false
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
            Invoices
          </Typography>
        </div>
        {/* Body of the page with the list of items */}
        <Typography variant = "body1" className = {classes.txt}>
            Active
        </Typography>
        {data.map((item) => {
          return (
            <Box border={1} borderColor="#CBCBCB" className={classes.box}>
              <Grid
                container
                alignItems="center"
                justify="space-around"
                spacing={2}
              >
                {/* Name/Title */}
                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Name:</span> <br />
                    {item.User}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Contact:</span> <br />
                    {item.Number}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Reservation Date:</span> <br />
                    {item.ReservationDate}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Expiry Date:</span> <br />
                    {item.ExpiryDate}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Tax:</span> <br />
                    {item.Tax}
                  </Typography>
                </Grid>

                <Grid item lg={1}>
                <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Status:</span> <br />
                    {item.Status}
                  </Typography>
                </Grid>

                <Grid item lg={1}>
                    <PDFDownloadLink
                    document = {<InvoiceDocument />}
                    fileName = "invoive.pdf"
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? "Loading document..." : "Download Pdf"
                        }
                    </PDFDownloadLink>
               </Grid>
              </Grid>
            </Box>
          );
        })}
        <Typography variant = "body1" className = {classes.txt}>
            Previous
        </Typography>
        {data.map((item) => {
          return (
            <Box border={1} borderColor="#CBCBCB" className={classes.box}>
              <Grid
                container
                alignItems="center"
                justify="space-around"
                spacing={2}
              >
                {/* Name/Title */}
                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Name:</span> <br />
                    {item.User}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Contact:</span> <br />
                    {item.Number}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Reservation Date:</span> <br />
                    {item.ReservationDate}
                  </Typography>
                </Grid>

                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Expiry Date:</span> <br />
                    {item.ExpiryDate}
                  </Typography>
                </Grid>

                {/* Email*/}
                <Grid item lg={2}>
                  <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Tax:</span> <br />
                    {item.Tax}
                  </Typography>
                </Grid>

                <Grid item lg={1}>
                <Typography variant="h6">
                    <span style={{ fontWeight: "bold" }}>Status:</span> <br />
                    {item.Status}
                  </Typography>
                </Grid>

              </Grid>
            </Box>
          );
        })}
      </div>
    </div>
  );
}
