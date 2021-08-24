import Container from "@material-ui/core/Container"
import PropTypes from "prop-types"
import React from "react"
import Typography from "../components/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: "4px solid currentColor",
    borderRadius: 0,
    height: "auto",
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
})

function ProductSmokingHero(props) {
  const { classes } = props

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" component="span">
        มีคำถามเพิ่มเติม?
      </Typography>
      <Typography variant="subtitle1" className={classes.link}>
        📞 &nbsp; 081-4466262
      </Typography>
      <Typography variant="subtitle1" className={classes.link}>
        Line: achanont
      </Typography>
    </Container>
  )
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductSmokingHero)
