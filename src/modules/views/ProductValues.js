import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import ProductValues1 from "../../images/productValues1.svg"
import ProductValues2 from "../../images/productValues2.svg"
import ProductValues3 from "../../images/productValues3.svg"
import ProductValues4 from "../../images/productValues4.svg"
import PropTypes from "prop-types"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Typography from "../components/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light,
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
  image: {
    height: 55,
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
        <StaticImage
          src="../../images/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ProductValues1 className={classes.image} />
              <Typography variant="h6" className={classes.title}>
                Easy to Use
              </Typography>
              <Typography variant="h5">
                สะดวก รวดเร็ว
                สามารถดูตารางการจองได้ผ่านทางเว็บไซต์โดยไม่ต้องโทรถาม
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ProductValues2 className={classes.image} />
              <Typography variant="h6" className={classes.title}>
                Instant Online Payment
              </Typography>
              <Typography variant="h5">
                ไม่ว่าจะเป็นการจ่ายเงินผ่านการโอน หรือบัตรเครดิต
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ProductValues3 className={classes.image} />
              <Typography variant="h6" className={classes.title}>
                24 Hours Availability
              </Typography>
              <Typography variant="h5">
                ถึงสนามจะปิดแล้ว ลูกค้าก็สามารถทำการจองได้ 24 ชั่วโมง
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ProductValues4 className={classes.image} />
              <Typography variant="h6" className={classes.title}>
                Book Through Line App
              </Typography>
              <Typography variant="h5">
                สามารถนำแอปเข้าไว้ในไลน์ที่มีอยู่เพื่อให้ลูกค้าใช้จองได้
              </Typography>
            </div>
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
