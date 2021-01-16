import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import IconButton from '@material-ui/core/IconButton'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'

const styles = {
  movieCard: {
    position: 'relative',
    width: '300px',
    marginBottom: '10px'
  },

  media: { 
    height: '450px'
  },

  movieTitle: {
    marginTop: '15px'
  },

  releaseDate: {
    fontWeight: 'bold',
    marginTop: '10px'
  },

  iconButton: {
    position: 'absolute',
    top: '455px',
    left: '245px'
  },

  starIcon: {
    verticalAlign: 'middle'
  }
}

class MovieCard extends Component {
  
  handleFavorite = () => {
    const { id } = this.props

    const favorite = localStorage.getItem('favoriteIds')
    const favoriteArr = favorite ? JSON.parse(favorite) : []

    if(favoriteArr.includes(id)) {
      const favoriteArrNew = favoriteArr.filter((el) => el !== id)

      localStorage.setItem('favoriteIds', JSON.stringify(favoriteArrNew))
    } else {    
      const favoriteArrNew = [...favoriteArr, id]

      localStorage.setItem('favoriteIds', JSON.stringify(favoriteArrNew))
    } 
    this.forceUpdate()
  }

  checkIsFavorite = () => {
    const { id } = this.props

    const favorite = localStorage.getItem('favoriteIds')
    const favoriteArr = favorite ? JSON.parse(favorite) : []

    return favoriteArr.includes(id) ? true : false
  }

  render() {
    const { classes } = this.props

    return(
      <Card className={classes.movieCard}>
        <CardActionArea>
          <CardMedia
            className={classes.media}         
            image={this.props.poster ? `//image.tmdb.org/t/p/w300_and_h450_bestv2/${this.props.poster}` : 'https://cutt.ly/khhDmYX'}
            title={this.props.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <StarIcon className={classes.starIcon} color='primary' /> {this.props.rating}
            </Typography>
            <Typography className={classes.movieTitle} gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.overview}
            </Typography>
            <Typography className={classes.releaseDate} variant="body2" color="textSecondary" component="p">
              Release date: {this.props.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton className={classes.iconButton} onClick={this.handleFavorite} aria-label="add to favorites">
            {this.checkIsFavorite() ? <FavoriteIcon color='primary' /> : <FavoriteBorderIcon />}
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(MovieCard)