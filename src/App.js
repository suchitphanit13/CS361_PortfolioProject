import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEarningPage from './pages/CreateEarningPage';
import EditEarningPage from './pages/EditEarningPage';
import TotalEarningsPage from './pages/TotalEarningsPage'
import SourceWikiPage from  './pages/SourceWikiPage'
import { useState } from 'react';

function App() {
  const [earningToEdit, setEarningToEdit] = useState([]);
  
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setEarningToEdit={setEarningToEdit} />
          </Route>
          <Route path="/add-earning">
            <CreateEarningPage />
          </Route>
          <Route path="/edit-earning">
            <EditEarningPage earningToEdit={earningToEdit} />
          </Route>
          <Route path="/total-earnings">
            <TotalEarningsPage/>
          </Route>
          <Route path="/source-wiki">
            <SourceWikiPage/>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;