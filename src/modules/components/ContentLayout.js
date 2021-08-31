import * as React from "react"

import AppAppBar from "../views/AppAppBar"
import { Link } from "gatsby"
import Paper from "@material-ui/core/Paper"
import productCurvyLines from "../../images/productCurvyLines.png"
import withRoot from "../withRoot"
import { withStyles } from "@material-ui/core/styles"

const styles = () => ({
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
  allpost: {
    margin: "2rem 0",
    color: "gray",
    textDecoration: "none",
    fontSize: "1rem",
  },
  footer: {
    textAlign: "center",
  },
})

const Layout = ({ location, children, classes }) => {
  const postPath = `/posts/`
  const isSinglePostPage =
    location.pathname !== postPath && location.pathname?.startsWith(postPath)

  return (
    <div className={classes.root}>
      <AppAppBar />
      <main>
        <div className={classes.content}>
          <Paper className={classes.paper}>
            {isSinglePostPage && (
              <div className={classes.allpost}>
                <Link to="/posts/" className={classes.allpost}>
                  ← All Posts
                </Link>
              </div>
            )}
            {children}
          </Paper>
        </div>
      </main>
      <footer className={classes.footer}>
        © Calendar Booking {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default withRoot(withStyles(styles)(Layout))
