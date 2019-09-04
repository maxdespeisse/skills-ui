import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchUserForm from './components/SearchUserForm';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SearchUserForm} />
      </div>
    </Router>
  );
}

export default App;
