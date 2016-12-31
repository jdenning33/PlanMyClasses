import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import HomeContainer from './Home/HomeContainer'
import ScheduleBuilderContainer from './ScheduleBuilder/ScheduleBuilderContainer'
import CourseBrowserContainer from './CourseBrowser/CourseBrowserContainer'
import PageNotFoundComponent from './PageNotFound/PageNotFoundComponent'
import { courseBrowser } from './CourseBrowser/courseBrowserDuck'


//  Render Components
const home = () => <HomeContainer />
const schedule = () => <ScheduleBuilderContainer />
const browser = () => <CourseBrowserContainer />
const notFound = () => <PageNotFoundComponent />

//  Route Names
export const ROUTE_ENUM = {
  HOME: '/',
  SCHEDULE_BUILDER: '/schedule-builder',
  COURSE_BROWSER: '/course-browser'
}

export const routes = (
  <Route path={ROUTE_ENUM.HOME}>
    <IndexRoute component={home} />
    <Route path={ROUTE_ENUM.SCHEDULE_BUILDER} component={schedule} />
    <Route path={ROUTE_ENUM.COURSE_BROWSER} component={browser} />
    <Route path='*' component={notFound} />
  </Route>
)

//  Function
export const setRoute = (filter) => {
  browserHistory.push(filter);
}

const AppRouter = () => {
  return (
    <Router history={browserHistory} routes={routes} />
  )
}
export default AppRouter
