import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: '#fff',
    backgroundColor: '#353535',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
})

const Filter = (props) => {
  const { classes } = props

  return (
    <div>
      <Typography className={classes.title} variant="h6" color="inherit" noWrap>
        Sort Your Characters
      </Typography>
      <Button variant="outlined" className={classes.button}>
        Name
      </Button><Button variant="outlined" className={classes.button}>
        Gender
      </Button><Button variant="outlined" className={classes.button}>
        Species
      </Button>
    </div>
  )
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Filter)
