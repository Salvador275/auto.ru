import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import { Ads } from './components/Ads';
import { SignIn } from './components/SignIn';
import { Register } from './components/Register';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/catalog' component={Ads} />
        <Route path='/signin' component={SignIn} />
        <Route path='/register' component={Register} />
      </Layout>
    );
  }
}
