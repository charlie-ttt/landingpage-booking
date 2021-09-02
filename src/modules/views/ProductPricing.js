import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import PricingCard from "../components/PricingCard"
import PropTypes from "prop-types"
import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.dark,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
  },
})

function ProductValues(props) {
  const { classes } = props

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <PricingCard
              title="Free"
              price="FREE"
              description={
                <div>
                  - ตารางเวลาออนไลน์
                  <br />- ดูข้อมูลการจองย้อนหลัง
                  <br />
                  <br />
                  - Online Schedule Display
                  <br />- Manage and View Previous Bookings
                </div>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PricingCard
              title="Standard"
              price="600"
              description={
                <div>
                  - ตารางเวลาออนไลน์
                  <br />- ดูข้อมูลการจองย้อนหลัง
                  <br />- จองออนไลน์พร้อมระบบจ่ายเงิน
                  <br />
                  <br />
                  - Online Schedule Display
                  <br />- Manage and View Previous Bookings
                  <br />- Payment System (all methods)
                </div>
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PricingCard
              title="Pro"
              price="Contact Us"
              description={
                <div>
                  - ตารางเวลาออนไลน์
                  <br />- ดูข้อมูลการจองย้อนหลัง
                  <br />- จองออนไลน์พร้อมระบบจ่ายเงิน
                  <br />- ไม่จำกัดจำนวนคอร์ท
                  <br />
                  <br />
                  - Online Schedule Display
                  <br />- Manage and View Previous Bookings
                  <br />- Payment System (all methods)
                  <br />- Unlimited Court
                </div>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductValues)
