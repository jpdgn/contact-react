import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import People from './People'
import Profile from './Profile'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'

const App = () => (
  <div>
    <Router>
      <main>
        <Switch>
          <Route exact path='/' component={People} />
          <Route path='/profile/:id' component={Profile} />
          <Route exact path='/contact' component={ContactList} />
          <Route path='/contact/:id' component={ContactDetail} />
        </Switch>
      </main>
    </Router>
  </div>
)

export default App;
