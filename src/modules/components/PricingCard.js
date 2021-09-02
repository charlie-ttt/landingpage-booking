import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 350,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  description: {
    marginBottom: 12,
  },
  price: {
    fontSize: 30,
    textAlign: "center",
  },
})

export default function PricingCard({ title, description, price }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography className={classes.description} color="textSecondary">
          {description}
        </Typography>
        <Typography className={classes.price} variant="body2">
          {price}
        </Typography>
      </CardContent>
    </Card>
  )
}
