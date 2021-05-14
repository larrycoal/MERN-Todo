import React from "react";
import Header from "../Header/header";
import LandingPage from './LandingPage'
import CreateTodo from '../Todo/CreateTodo'
import { Route, Switch } from "react-router";
import AddItem from "../Todo/AddItem"

const index = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <CreateTodo/>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/additem/:id" component={AddItem}/>
      </Switch>
    </div>
  );
};

export default index;
