import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { ROUTE_ENUM } from '../../routes/AppRouter';
import style from '../../style'


const recentsIcon = <FontIcon className="material-icons">build</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">add</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
const BottomNavigationComponent = ({changeRoute}) => {

  // select = (index) => this.setState({selectedIndex: index});
  let path = window.location.pathname;

  let index = -1;
  if(path === '/') index = -1;
  if(path === '/schedule-builder') index = 0;
  if(path === '/course-browser') index = 1;

  return (
    <Paper style={style.bottomNav} zDepth={1}>
      <BottomNavigation selectedIndex={index}>
        <BottomNavigationItem
          label="SCHEDULE"
          icon={recentsIcon}
          onTouchTap={() => changeRoute(ROUTE_ENUM.SCHEDULE_BUILDER)}
        />
        <BottomNavigationItem
          label="COURSES"
          icon={favoritesIcon}
          onTouchTap={() => changeRoute(ROUTE_ENUM.COURSE_BROWSER)}
        />
      </BottomNavigation>
    </Paper>
  );

}

export default BottomNavigationComponent;
