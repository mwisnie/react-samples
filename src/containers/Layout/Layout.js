import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import TaskList from './../TaskList/TaskList';

const Layout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Route path="/tasks" exact component={TaskList} />
    </React.Fragment>
  )
};

export default Layout;