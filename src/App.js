import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './Components/LoginForm';
import Home from './Components/Home'

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const Auth = {
  isAuthenticated : false,
  authenticate(cb){
      this.isAuthenticated = true
      setTimeout(cb,100);
    },
    signout(cb){
      this.isAuthenticated = false
      setTimeout(cb,100)
    }
}

function Root (){
  return(<div>
    Root Page
  </div>)
}

function Error(){return<div>Error</div>}


class App extends Component {
  state = {
    logged :true,
    token :""
  }

  render(){
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/home" component = {Home}/>
        <PrivateRoute exact path="/" component = {Root}/>
        <LoginRoute path= "/login" state={{Auth}} component = {LoginForm}/>
        <Route path="" component={(function Error(){return(<div>404 Page Not Found</div>)})} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({component: Component, ...rest}) =>(
  <Route {...rest} render={ (props)=>(
    Auth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to="/login" />

  )}/>
)

const LoginRoute = ({component: Component, ...rest})=>(
  <Route {...rest} render={ (props)=>(
    Auth.isAuthenticated===true
    ? <Redirect to="/" />
    : <Component {...props} />

  )}/>
)

const TopLeveLRoute = ({component: Component, ...rest}) =>(
  <Route {...rest} render={ (props)=>(
    Auth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to="/login" />

  )}/>
)

export default App;
