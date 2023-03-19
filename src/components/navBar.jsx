import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../layauts/main';
import About from '../layauts/about';
import Info from '../layauts/info';
import ItemsCategoryPage from './ItemsCategoryPage';

const NavBar = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/dress" component={ItemsCategoryPage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/info" component={Info}/>
      </Switch>
    </>
  );
};

export default NavBar;
