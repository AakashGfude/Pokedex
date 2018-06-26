import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';


const DrawerComponent = (props) => {
    const { theme, classes } = props
    return (
    <Drawer
      variant="persistent"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link to="/" onClick={props.handleDrawerClose}>HomePage</Link>
      </List>
      <Divider />
      <List>
        <Link to="/mylist" onClick={props.handleDrawerClose}>My List</Link>
      </List>
    </Drawer>
  )
}

export default DrawerComponent;