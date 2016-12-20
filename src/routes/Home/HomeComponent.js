import React, { PropTypes } from 'react'
import LinkContainer from '../../domains/Link/LinkContainer'
import { ROUTE_ENUM } from '../AppRouter'

const HomeComponent = ( { todos, changeRoute } ) => (
  <div>
    <div>
      <h1> Plan My Classes </h1>
      <h2> What would you like to do? </h2>
      <LinkContainer text='Build My Schedule'
                clickAction={() => changeRoute(ROUTE_ENUM.SCHEDULE_BUILDER)} />
      <br />
      <LinkContainer text='Browse Courses'
                clickAction={() => changeRoute(ROUTE_ENUM.COURSE_BROWSER)} />
    </div>
  </div>
)

HomeComponent.propTypes = {
  changeRoute: PropTypes.func.isRequired
}

export default HomeComponent
