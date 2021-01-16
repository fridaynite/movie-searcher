import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Main from './pages/main'
import Favorites from './pages/favorites'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const useStyles = makeStyles(() => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  link: {    
    color: 'white',
    textDecoration: 'none'
  },

  favLink: {
    marginRight: '40px'
  }
}))


function App() {
  const classes = useStyles()

  return (
    <Router>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar className={classes.toolbar}>
          <Link to='/' className={classes.link}><Typography className={classes.navLink} variant="h5">Movie searcher</Typography></Link>
        </Toolbar>
        <Toolbar className={classes.toolbar}>
          <Link to="/favorites" className={classes.link}><Typography className={classes.favLink} variant="h6">Favorites</Typography></Link>
        </Toolbar>
      </AppBar>

      <Container>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
