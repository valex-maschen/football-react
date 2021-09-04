import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import LeagueList from './Pages/LeagueList/LeagueList';
import Matches from './Pages/Matches/Matches';
import Teams from './Pages/Teams/Teams';
import { Routes } from "./constants/Routes";
function App() {
  return (

      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path={Routes.LEAGUES} exact component={LeagueList} />
        <Route path={Routes.MATCH} component={Matches}/>
        <Route path={Routes.TEAM} component={Teams}/>
      </Switch>
    </BrowserRouter>

  
  );
}

export default App;
