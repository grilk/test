import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Test } from './components/Test';
import { StarGame } from './components/StarGame';
import { BlizzardFetcher } from './components/BlizzardFetcher';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/test' component={Test} />
        <Route path='/stargame' component={StarGame} />
        <Route path='/blizzardfetcher' component={BlizzardFetcher} />
      </Layout>
    );
  }
}
