import React, { PropTypes } from 'react'
import LinkContainer from '../../domains/Link/LinkContainer'
import { setRoute, ROUTE_ENUM } from '../routesDuck'

const HomeComponent = ( { todos,
                          scheduleBuilderClick,
                          courseBrowserClick } ) => (
  <div>
    <div>
      <h1> Plan My Classes </h1>
      <h2> What would you like to do? </h2>
      <LinkContainer text='Build My Schedule'
                      clickAction={setRoute(ROUTE_ENUM.SCHEDULE_BUILDER)} />
      <br />
      <LinkContainer text='Browse Courses'
                      clickAction={setRoute(ROUTE_ENUM.COURSE_BROWSER)} />
    </div>
  </div>
)

HomeComponent.propTypes = {
  scheduleBuilderClick: PropTypes.func.isRequired
}

export default HomeComponent
