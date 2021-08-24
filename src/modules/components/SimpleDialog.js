import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import PropTypes from "prop-types"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = () => ({
  center: {
    textAlign: "center",
  },
  lineid: {
    maxWidth: "200px",
    marginRight: "auto",
    marginLeft: "auto",
  },
})

function SimpleDialog(props) {
  const { open, onClose, classes } = props

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      onClose={onClose}
      fullWidth
    >
      <DialogTitle id="simple-dialog-title" className={classes.center}>
        Contact Us
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="subtitle1" className={classes.center}>
            Call: 081-4466262
          </Typography>
          <Typography variant="subtitle1" className={classes.center}>
            Line: achanont
          </Typography>
          <div className={classes.lineid}>
            <StaticImage src="../../images/line-id.jpeg" alt="line-id" />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(SimpleDialog)
