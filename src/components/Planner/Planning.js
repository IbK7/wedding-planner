import React from "react";
import {
  makeStyles,
  Typography,
  Divider,
  Grid,
  Button,
  Paper,
} from "@material-ui/core";
import Header from "../Navigation/Header/Header";
import Footer from "../Navigation/Footer/Footer";
import Background from "../../assets/Images/planBack.jpg";
import Venues from "../../assets/Images/plan_image.jpeg";
import { useHistory } from "react-router";

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
    color: "#8B5B6E",
    fontWeight: "bold",
    marginBottom: "-20%",
    marginLeft: "3%",
    fontFamily: "DancingScript",
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
    top: "128vh",
    overflowX: "hidden",
    height: "auto",
  },
  budget: {
    padding: theme.spacing(6, 5, 6, 5),
    width: "72%",
    margin: theme.spacing(1, 0, 1, 0),
  },
  guest: {
    padding: theme.spacing(8, 5, 7, 5),
    width: "72%",
    margin: theme.spacing(1, 0, 1, 0),
  },
  supplier: {
    padding: theme.spacing(6, 5, 6, 5),
    width: "72%",
    margin: theme.spacing(1, 0, 1, 0),
  },
}));

export default function Supplier() {
  const classes = useStyle();
  const history = useHistory(); 
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
        </div>
        <img src={Background} className={classes.backgoundImage} alt=""></img>
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
          Planning Tools
        </Typography>
        <Divider />
      </div>
      <div>
        <Typography
          variant="h5"
          style={{ width: "45%", marginLeft: "30%", marginTop: "3%" }}
          align="center"
        >
          Personalised Wedding Checklist, Guestlist Manager, Budget Planner, and
          Supplier Search and Shortlist tools were designed as wedding planning
          templates specific to you. Your wedding plans will stay organised
          while you and your partner enjoy your engagement. Click the button
          below to join and you‘ll be planning in seconds!
        </Typography>
        <Button
          onClick = {() => {history.push('/signup')}}
          style={{
            backgroundColor: "#8B5B6E",
            color: "white",
            marginLeft: "46%",
            marginTop: "1%",
            width: "12vw",
          }}
        >
          Start planning
        </Button>
        <Divider style={{ marginTop: "2%" }} />
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
                <div align="center">
                  <Typography variant="h2" className={classes.cardText}>
                    Plan you Dream Wedding with us!
                  </Typography>
                </div>
              </div>
              <img
                src={Venues}
                style={{
                  marginTop: "1%",
                  height: "70vh",
                  width: "96%",
                  opacity: "40%",
                }}
                alt=""
              />
            </div>
          </Grid>
          <Grid container direction="column" lg={3}>
            <Grid item className={classes.card}>
              <div>
                <Paper
                  style={{ background: "#FFF3AA" }}
                  className={classes.supplier}
                >
                  <div>
                    <Typography
                      variant="h5"
                      style={{ color: "white", fontWeight: "bold" }}
                    >
                      Wedding Checklist
                    </Typography>
                    <Typography variant="h5">
                      Track your wedding checklist with us and find the best for
                      you.{" "}
                    </Typography>
                  </div>
                </Paper>
              </div>
            </Grid>
            <Grid item className={classes.card}>
              <div>
                <Paper
                  style={{ background: "#E5B4FD" }}
                  className={classes.supplier}
                >
                  <div>
                    <Typography
                      variant="h5"
                      style={{ color: "white", fontWeight: "bold" }}
                    >
                      Wedding Supplier
                    </Typography>
                    <Typography variant="h5">
                      Choose your team, the people who help make your dream
                      wedding come true.
                    </Typography>
                  </div>
                </Paper>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="column" lg={3}>
            <Grid item className={classes.card}>
              <div>
                <Paper
                  style={{ background: "#FDB4CC" }}
                  className={classes.guest}
                >
                  <div>
                    <Typography
                      variant="h5"
                      style={{ color: "white", fontWeight: "bold" }}
                    >
                      Wedding Guest List
                    </Typography>
                    <Typography variant="h5">
                      Track all your guests and those who RSVP.{" "}
                    </Typography>
                  </div>
                </Paper>
              </div>
            </Grid>
            <Grid item className={classes.card}>
              <div>
                <Paper
                  style={{ background: "#B2C6C0" }}
                  className={classes.budget}
                >
                  <div>
                    <Typography
                      variant="h5"
                      style={{ color: "white", fontWeight: "bold" }}
                    >
                      Wedding Budget
                    </Typography>
                    <Typography variant="h5">
                      Personalize your wedding while keeping a track of the
                      expenses.
                    </Typography>

                  </div>
                </Paper>
              </div>
            </Grid>
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
          marginTop: "82vh",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
