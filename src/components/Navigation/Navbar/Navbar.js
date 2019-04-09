import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = props => {
  return (
    <div className={styles.Navbar}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <nav>
            <ul className={styles.navigationItems}>
              <li>
                <Typography variant="h6" color="inherit">
                  <Link to="/tasks">Task list</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" color="inherit">
                  <Link to="/todos">TODO</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" color="inherit">
                  <Link to="/signin">Sign in</Link>
                </Typography>
              </li>
            </ul>
          </nav>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
