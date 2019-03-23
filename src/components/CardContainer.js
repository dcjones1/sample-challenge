import React from 'react'
import Grid from '@material-ui/core/Grid'
import CharacterCard from './CharacterCard'

const CardContainer = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <h3>All Characters:</h3>
      <Grid container>
        {props.characters.map((char) => {
          return (
            <Grid item xs={3} key={char.id}>
              <CharacterCard character={char} />
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default CardContainer
