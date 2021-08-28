import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Matches from './Pages/Matches/Matches';
import Tours from './Pages/Tours/Tours';
import Teams from './Pages/Teams/Teams';

function App() {
  return (

      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/matches" component={Matches}/>
        <Route path="/tours" component={Tours}/>
        <Route path="/teams" component={Teams}/>
      </Switch>
    </BrowserRouter>

  
  );
}

export default App;
