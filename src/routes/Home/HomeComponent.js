import React, { PropTypes } from 'react'
import LinkContainer from '../../domains/Link/LinkContainer'
import { ROUTE_ENUM } from '../AppRouter'

const HomeComponent = ( { todos, changeRoute, addSubject, eraseDB, populateDB } ) => (
  <div>
    <div>
      <h1> Plan My Classes </h1>
      <h2> What would you like to do? </h2>
      <LinkContainer text='Build My Schedule'
                clickAction={() => changeRoute(ROUTE_ENUM.SCHEDULE_BUILDER)} />
      <br />
      <LinkContainer text='Browse Courses'
                clickAction={() => changeRoute(ROUTE_ENUM.COURSE_BROWSER)} />
      <br />
      <br />
      <LinkContainer text='Erase the DataBase'
                clickAction={() => eraseDB()} />
      <br />
      <LinkContainer text='Populate the DataBase'
                clickAction={() => populateDB()} />
      <br />
      <LinkContainer text='Test add subject'
                clickAction={() => addSubject()} />
  </div>
  </div>
)

HomeComponent.propTypes = {
  changeRoute: PropTypes.func.isRequired
}

export default HomeComponent
