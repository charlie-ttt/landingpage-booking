import * as React from "react"

import AppAppBar from "../views/AppAppBar"
import withRoot from "../withRoot"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    paddingBottom: 20,
  },
  content: {
    margin: "auto",
    maxWidth: "42rem",
    minHeight: "95vh",
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
        <div className={classes.content}>{children}</div>
      </main>
      <footer className={classes.footer}>
        © Calendar Booking {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default withRoot(withStyles(styles)(Layout))
