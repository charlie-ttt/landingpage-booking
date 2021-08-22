import Button from "../components/Button"
import ProductHeroLayout from "./ProductHeroLayout"
import PropTypes from "prop-types"
import React from "react"
import TennisCourt from "../../../static/tennis-court.jpeg"
import Typography from "../components/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  background: {
    backgroundImage: `url(${TennisCourt})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  buttonsContainer: {
    display: "flex",
  },
  button: {
    minWidth: 200,
    textAlign: "center",
    margin: 3,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
})

function ProductHero(props) {
  const { classes } = props

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={TennisCourt}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h3" marked="center">
        เว็บจองสนามกีฬา ง่าย เร็ว เพรียบพร้อม
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Booking Management Tools for Courts: Tennis, Badminton, Soccer
      </Typography>
      <div className={classes.buttonsContainer}>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
        >
          ทดลองใช้งาน (Trial)
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="https://calendar-booking-lite.vercel.app"
          target="_blank"
        >
          ตัวอย่างเว็บไซต์ (Demo)
        </Button>
      </div>
    </ProductHeroLayout>
  )
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductHero)
