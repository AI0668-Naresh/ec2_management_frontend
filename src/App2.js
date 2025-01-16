import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; // <-- Add Redirect here
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <h1>React-Flask JWT Authentication</h1>
        <Switch>
          {/* Public Route */}
          <Route path="/login" component={Login} />

          {/* Protected Routes */}
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/about" component={About} />

          {/* Redirect to login if no match */}
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
