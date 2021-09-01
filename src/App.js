import './App.scss';
import React from 'react'
import Layout from './hoc/Layout'
import TrackSearch from './container/TrackSearch/TrackSearch'
import TrackShipment from './container/TrackShipment/TrackShipment'
import {Route , Switch} from 'react-router-dom';

function App() {
  return (
      <Layout>
        <Switch>
           <Route path='/Details' component={TrackShipment}/>
           <Route exact path='/' component={TrackSearch}/>
        </Switch>
      </Layout>
  );
}

export default App;
