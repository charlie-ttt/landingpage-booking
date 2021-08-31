import * as React from "react"

import AppAppBar from "../views/AppAppBar"
import Paper from "@material-ui/core/Paper"
import productCurvyLines from "../../images/productCurvyLines.png"
import withRoot from "../withRoot"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    backgroundImage: `url(${productCurvyLines})`,
    backgroundColor: "#fff5f8",
    paddingBottom: 20,
  },
  content: {
    margin: "auto",
    maxWidth: "42rem",
    minHeight: "95vh",
  },
  paper: {
    padding: "5px 2rem",
    margin: "2rem 0",
  },
  footer: {
    textAlign: "center",
  },
})

const Layout = ({ location, title, children, classes }) => {
  return (
    <div className={classes.root}>
      <AppAppBar />
      <main>
        <div className={classes.content}>
          <Paper className={classes.paper}>{children}</Paper>
        </div>
      </main>
      <footer className={classes.footer}>
        © Calendar Booking {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default withRoot(withStyles(styles)(Layout))
