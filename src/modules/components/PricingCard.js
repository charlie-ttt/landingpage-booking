import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  cardroot: {
    width: 350,
    height: 500,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    marginBottom: 12,
  },
  price: {
    fontSize: 30,
    textAlign: "center",
  },
  currency: {
    fontSize: 15,
  },
})

export default function PricingCard({ title, description, price }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.cardroot} variant="outlined">
        <CardContent style={{ height: "80%" }}>
          <Typography className={classes.title} gutterBottom>
            {title}
          </Typography>
          <Typography className={classes.description} color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <div className={classes.price}>
          {price}
          <Typography className={classes.currency}>
            THB/Court (Monthly)
          </Typography>
        </div>
      </Card>
    </div>
  )
}
