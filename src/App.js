import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import EvaluationForm from './components/EvaluationForm';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={EvaluationForm} />
      </div>
    </Router>
  );
}

export default App;
