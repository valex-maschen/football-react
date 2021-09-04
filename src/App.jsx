import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Matches from './Pages/Matches/Matches';
import Teams from './Pages/Teams/Teams';
import { Routes } from './Components/Navbar/Navbar';
function App() {
  return (

      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path={Routes.MATCH} component={Matches}/>
        <Route path={Routes.TEAM} component={Teams}/>
      </Switch>
    </BrowserRouter>

  
  );
}

export default App;
