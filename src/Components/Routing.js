import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Posts from "./Posts"
import View from "./View" 
const Routing = () => {
     return (
          <BrowserRouter>
          <Switch>
               <Route path="/" exact component={Posts} />
               <Route path="/posts/:id" exact component={View} />
          </Switch>
          </BrowserRouter>
     )
}

export default Routing
