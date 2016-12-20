import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import HomeContainer from './Home/HomeContainer'
import ScheduleBuilderContainer from './ScheduleBuilder/ScheduleBuilderContainer'
import CourseBrowserContainer from './CourseBrowser/CourseBrowserContainer'

//  Render Components
const home = () => <HomeContainer />
const schedule = () => <ScheduleBuilderContainer />
const browser = () => <CourseBrowserContainer />
const notFound = () => (<h1>404.. This page is not found!</h1>)

//  Route Names
export const ROUTE_ENUM = {
  HOME: '/',
  SCHEDULE_BUILDER: '/schedule-builder',
  COURSE_BROWSER: '/course-browser'
}

//  Function
export const setRoute = (filter) => {
  browserHistory.push(filter);
}

const AppRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path={ROUTE_ENUM.HOME} component={home} />
      <Route path={ROUTE_ENUM.SCHEDULE_BUILDER} component={schedule} />
      <Route path={ROUTE_ENUM.COURSE_BROWSER} component={browser} />
      <Route path='*' component={notFound} />
    </Router>
  )
}
export default AppRouter
