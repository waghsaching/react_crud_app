import React, { Component } from 'react';
import { Router, Route, } from 'react-router';
import history from './history';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Home } from './pages/Home';
import {Main} from './layouts/main';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Create } from './pages/Create';

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <div className="App">
          <Router history={history}>
              <div>
                <Route path='/' component={Wrapper}/>
              </div>
          </Router>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            />
          <ToastContainer />
      </div>
    );
  }
}

export default App;


class Wrapper extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <div>   
        <Main>
            <Route exact path='/' component={Home} />
            <Route exact path='/create' component={Create} />
            <Route path="/details/:id" component={Create} />
        </Main>
      </div>
    )
  }
}