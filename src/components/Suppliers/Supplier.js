import React from "react";
import {
  makeStyles,
  Typography,
  Divider,
  Grid,
  Button,
} from "@material-ui/core";
import Header from "../Navigation/Header/Header";
import Footer from "../Navigation/Footer/Footer";
import Background from "../../assets/Images/supplier-banner.png";
import Venues from "../../assets/Images/venues.jpg";
import Florists from "../../assets/Images/florists.jpg";
import Cakes from "../../assets/Images/cakes.jpg";
import Invites from "../../assets/Images/invites.jpg";
import Favours from "../../assets/Images/favours.jpg";
import DJ from "../../assets/Images/DJ.jpg";
import Photographer from "../../assets/Images/photographer.jpg";
import Jewellery from "../../assets/Images/jewellery.jpg";
import Catering from "../../assets/Images/catering.jpeg";

const useStyle = makeStyles((theme) => ({
  backgoundImage: {
    width: "100vw",
    height: "75vh",
    position: "relative",
    top: "0%",
    left: "0%",
    zIndex: "0",
    opacity: "0.75",
    overflowX: "hidden",
  },
  featuredCardGrid: {
    margin: theme.spacing(2),
  },
  card: {},
  cardImage: {
    position: "relative",
    top: "0%",
    left: "0%",
    zIndex: "0",
  },
  cardText: {
    color: "white",
    fontWeight: "bold",
    marginBottom: "-20%",
  },
  button: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    backgroundColor: "#8B5B6E",
    color: "white",
    // '&:hover':{
    //     backgroundColor: "#8B5B6E",
    // }
  },
  featured: {
    //margin: theme.spacing(0,2,0,2),
    width: "100%",
    position: "absolute",
    top: "90vh",
    overflowX: "hidden",
    height: "auto",
  },
}));

export default function Supplier() {
  const classes = useStyle();
  return (
    <div>
      <Header />
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          zIndex: "0",
          overflowX: "hidden",
        }}
      >
        <div
          style={{ position: "absolute", top: "40%", left: "10%", zIndex: "1" }}
        >
          <Typography
            variant="h3"
            style={{ fontFamily: "DancingScript", fontWeight: "bold" }}
          >
            Welcome to My Wedding Planner, Plan your weddings for free
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "bolder", width: "60%" }}
          >
            Choosing your wedding team is an important part of your planning
            journey, as your wedding suppliers will be the people bringing your
            wedding vision to life. To make your search easier, we've gathered
            the best wedding suppliers all in one place.
          </Typography>
        </div>
        <img src={Background} className={classes.backgoundImage}></img>
      </div>
      <div>
        <Typography
          variant="h3"
          align="left"
          style={{
            marginTop: "2%",
            marginLeft: "2%",
            marginBottom: "1%",
            fontFamily: "DancingScript",
            fontWeight: "bold",
          }}
        >
          Our Suppliers
        </Typography>
        <Divider />
      </div>
      <div className={classes.featured}>
        <Grid container direction="row" className={classes.featuredCardGrid}>
          <Grid item lg={6} className={classes.card}>
            <div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "2%",
                  zIndex: "2",
                  width: "auto",
                }}
              >
                <Typography variant="h5" className={classes.cardText}>
                  Venues
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.button}
                  href="/venues"
                >
                  Search
                </Button>
              </div>
              <img src={Venues} style={{ height: "70.5vh" }} />
            </div>
          </Grid>
          <Grid container direction="column" lg={3}>
            <Grid item className={classes.card}>
              <div>
                <div
                  style={{
                    position: "absolute",
                    top: "20.5%",
                    right: "42.9%",
                    zIndex: "2",
                    width: "auto",
                  }}
                >
                  <Typography variant="h5" className={classes.cardText}>
                    Florists
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    href="/florist"
                  >
                    Search
                  </Button>
                </div>
                <img
                  src={Florists}
                  className={classes.cardImage}
                  style={{ height: "35vh" }}
                />
              </div>
            </Grid>
            <Grid item className={classes.card}>
              <div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "43.5%",
                    zIndex: "2",
                    width: "auto",
                  }}
                >
                  <Typography variant="h5" className={classes.cardText}>
                    Cakes
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    href="/cake"
                  >
                    Search
                  </Button>
                </div>
                <img src={Cakes} style={{ height: "35vh" }} />
              </div>
            </Grid>
          </Grid>
          <Grid container direction="column" lg={3}>
            <Grid item className={classes.card}>
              <div>
                <div
                  style={{
                    position: "absolute",
                    top: "20%",
                    right: "18.5%",
                    zIndex: "2",
                    width: "auto",
                  }}
                >
                  <Typography variant="h5" className={classes.cardText}>
                    Invites
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    href="/invites"
                  >
                    Search
                  </Button>
                </div>
                <img
                  src={Invites}
                  style={{ height: "35vh" }}
                  className={classes.cardImage}
                />
              </div>
            </Grid>
            <Grid item className={classes.card}>
              <div>
                <div
                  style={{
                    position: "absolute",
                    top: "50.5%",
                    right: "17.5%",
                    zIndex: "2",
                    width: "auto",
                  }}
                >
                  <Typography variant="h5" className={classes.cardText}>
                    Favours
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.button}
                    href="/favour"
                  >
                    Search
                  </Button>
                </div>
                <img
                  src={Favours}
                  style={{ height: "35vh" }}
                  className={classes.cardImage}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.featuredCardGrid}
        >
          <Grid item className={classes.card} lg={3}>
            <div>
              <div
                style={{
                  position: "absolute",
                  top: "85.33%",
                  left: "3%",
                  //   right: "17.5%",
                  zIndex: "2",
                  width: "auto",
                }}
              >
                <Typography variant="h5" className={classes.cardText}>
                  Music
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.button}
                  href="/music"
                >
                  Search
                </Button>
              </div>
              <img
                src={DJ}
                style={{ height: "35vh", width: "95%" }}
                className={classes.cardImage}
              />
            </div>
          </Grid>
          <Grid item className={classes.card} lg={3}>
            <div>
              <div
                style={{
                  position: "absolute",
                  top: "85.33%",
                  left: "28.33%",
                  zIndex: "2",
                  width: "auto",
                }}
              >
                <Typography variant="h5" className={classes.cardText}>
                  Photographer
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.button}
                  style={{
                    marginTop: "23%",
                  }}
                  href="/photography"
                >
                  Search
                </Button>
              </div>
              <img
                src={Photographer}
                style={{ height: "35vh", width: "95%" }}
                className={classes.cardImage}
              />
            </div>
          </Grid>
          <Grid item className={classes.card} lg={3}>
            <div>
              <div
                style={{
                  position: "absolute",
                  top: "85.33%",
                  left: "53%",
                  //   right: "18.5%",
                  zIndex: "2",
                  width: "auto",
                }}
              >
                <Typography variant="h5" className={classes.cardText}>
                  Jewellery
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.button}
                  style={{ marginTop: "23%" }}
                  href="/jewellery"
                >
                  Search
                </Button>
              </div>
              <img
                src={Jewellery}
                style={{ height: "35vh", width: "95%" }}
                className={classes.cardImage}
              />
            </div>
          </Grid>
          <Grid item className={classes.card} lg={3}>
            <div>
              <div
                style={{
                  position: "absolute",
                  top: "85%",
                  left: "77.33%",
                  //   right: "18.5%",
                  zIndex: "2",
                  width: "auto",
                }}
              >
                <Typography variant="h5" className={classes.cardText}>
                  Catering
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.button}
                  style={{ marginTop: "23%" }}
                  href="/catering"
                >
                  Search
                </Button>
              </div>
              <img
                src={Catering}
                style={{ height: "35vh", width: "90.5%" }}
                className={classes.cardImage}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          minWidth: "90vw",
          paddingTop: "0%",
          overflowX: "hidden",
          bottom: "0",
          position: "relative",
          marginTop: "115vh",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
