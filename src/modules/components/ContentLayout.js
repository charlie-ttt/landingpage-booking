import * as React from "react"

import AppAppBar from "../views/AppAppBar"
import { Link } from "gatsby"
import withRoot from "../withRoot"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
  },
  content: {
    margin: [[0, 148, 0, 148]],
    // padding: 24,
  },
})

const Layout = ({ location, title, children, classes }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {/* <header className="global-header">{header}</header> */}
      <AppAppBar />
      <main className={classes.root}>
        {/* <div className={classes.content}> */}
        {children}
        {/* </div> */}
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default withRoot(withStyles(styles)(Layout))
