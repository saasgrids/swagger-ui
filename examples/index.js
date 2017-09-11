import React from 'react';
import ReactDOM from 'react-dom';

import Example from './Example';
import './index.css';

import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
// AppContainer is a necessary wrapper component for HMR


const MainRouter =()=>(
  <Switch>
      <Route path="/" component={Example}/>)}/> 
  </Switch>
);

const App =()=>(
  <Router>
    <MainRouter/>
  </Router>
)


ReactDOM.render(
  
  <App/>,
document.getElementById('root')
);
