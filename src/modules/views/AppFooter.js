import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Typography from "../components/Typography"
import { makeStyles } from "@material-ui/core/styles"

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://material-ui.com/">
        Calendar Booking System
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
}))

export default function AppFooter() {
  const classes = useStyles()

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.iconsWrapper}
          spacing={2}
        >
          <Grid item className={classes.icons}>
            <a href="https://material-ui.com/" className={classes.icon}>
              <StaticImage
                src="../../images/appFooterFacebook.png"
                alt="Facebook"
              />
            </a>
          </Grid>
          <Grid item>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}
