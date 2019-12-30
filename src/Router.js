import React from "react";
import { Route, Switch } from "react-router-dom";
import PostForm from "./components/PostForm";
import AllPost from "./components/AllPost";
import Inbox from "./components/Inbox";
import { UserComponent } from "./modules/users/components";
import Count from "./components/Counter";
import Table from './components/Table';
export default function SidebarRouter() {
  return (
    <div>
      <Switch>
        <Route path="/users" component={UserComponent} />
        <Route path="/PostForm" component={PostForm} />
        <Route path="/Allpost" component={AllPost} />
        <Route exact path="/Inbox" component={Inbox} />
        <Route exact path="/counter" component={Count} />
        <Route path="/table" component={Table} />
      </Switch>
    </div>
  );
}
