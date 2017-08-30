import React from 'react';
import ReactDOM from 'react-dom';

import Example from './Example';
import { AppContainer } from 'react-hot-loader';
import './index.css';

import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
// AppContainer is a necessary wrapper component for HMR

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Example', () => {
    render(Example)
  });
}

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
  
render(App);
