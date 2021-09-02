import Toolbar, { styles as toolbarStyles } from "../components/Toolbar"

import AppBar from "../components/AppBar"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  title: {
    margin: 0,
    fontSize: 24,
    color: "white",
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
})

function AppAppBar(props) {
  const { classes } = props

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link to="/">
            <h1 className={classes.title}>Calendar Booking</h1>
          </Link>
          <div className={classes.right}></div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  )
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppAppBar)
