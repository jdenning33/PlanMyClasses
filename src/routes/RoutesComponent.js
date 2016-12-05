import React, { PropTypes } from 'react'
import HomeContainer from './Home/HomeContainer'
import ScheduleBuilderComponent from './ScheduleBuilder/ScheduleBuilderComponent'
import { ROUTE_ENUM } from './routesDuck'

const routesComponent = ({ routesReducer }) => {
  switch (routesReducer) {
    case ROUTE_ENUM.HOME:
      return <HomeContainer />
    case ROUTE_ENUM.SCHEDULE_BUILDER:
      return <ScheduleBuilderComponent />
    case ROUTE_ENUM.COURSE_BROWSER:
      return <div>courseBrowser</div>
    default:
      return <div>invalid route</div>
  }
}

routesComponent.propTypes = {
  routesReducer: PropTypes.string.isRequired,
}

export default routesComponent
