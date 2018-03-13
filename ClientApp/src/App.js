import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
<<<<<<< HEAD
import { Test } from './components/Test';

=======
import { StarGame } from './components/StarGame';
>>>>>>> 4e6defd9daec7a5688feb1cbe59c9deaacc0259c

export default class App extends Component {
  displayName = App.name

  render() {
    return (
<<<<<<< HEAD
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/test' component={Test} />
=======
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
            <Route path='/stargame' component={StarGame} />
>>>>>>> 4e6defd9daec7a5688feb1cbe59c9deaacc0259c
      </Layout>
    );
  }
}
