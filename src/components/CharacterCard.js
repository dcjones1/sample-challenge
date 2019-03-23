import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing.unit,
  },
  media: {
    objectFit: 'cover',
  },
})

const CharacterCard = (props) => {
  const { classes } = props
  const { name, species, gender, origin, image } = props.character ? props.character : {}

  console.log(image)

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="character avatar"
        className={classes.media}
        image={image ? image : "https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
        title="character avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          <strong>Name:</strong> {name}
        </Typography>
        <Typography gutterBottom variant="body1">
          <strong>Gender:</strong> {gender}
        </Typography>
        <Typography gutterBottom variant="body1">
          <strong>Species</strong> {species}
        </Typography>
        <Typography gutterBottom variant="body1">
          <strong>Origin:</strong> {origin.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

CharacterCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(CharacterCard))
