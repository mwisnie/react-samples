import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import TaskList from './../TaskList/TaskList';
import SignIn from './../auth/SignIn';

const Layout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Route path="/tasks" exact component={TaskList} />
      <Route path="/signin" exact component={SignIn} />
    </React.Fragment>
  )
};

export default Layout;