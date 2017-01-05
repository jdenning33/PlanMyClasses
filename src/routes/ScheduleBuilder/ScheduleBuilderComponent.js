import React from 'react'
import SchedPrefContainer from '../../domains/SchedulePreferences/SchedPrefContainer'
import CoursesContainer from '../../domains/Course/CoursesContainer'
// import SchedulesContainer from '../../domains/Schedule/SchedulesContainer'
import ScheduleStackContainer from '../../domains/ScheduleStack/ScheduleStackContainer'
import BottomNavigationContainer from '../../domains/Navigation/BottomNavigationContainer'
import style from '../../style'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';


let SchedulePreferencesCard = ({}) => (
  <Card expanded={true} onExpandChange={() => null}>
    <CardHeader
      title={'Preferences'}
      actAsExpander={false}
      // showExpandableButton={true}
    />
    <CardText expandable={true}>
      <SchedPrefContainer />
    </CardText>
  </Card>
)

let DesiredCoursesCard = ({courseIDs, stackMap}) => (
  <Card expanded={true} onExpandChange={() => null}>
    <CardHeader
      title={'Desired Courses'}
      actAsExpander={false}
      // showExpandableButton={true}
    />
    <CardText expandable={true}>
      {stackMap.relationships.map( (relationship) => (
        <div>
          <CoursesContainer  courseIDs={relationship} />
          <br />
        </div>
      ))}
    </CardText>
    <CardActions expandable={true}>
      <FlatButton label="New Relationship"
        onTouchTap={() => null} />
      <FlatButton label="Add Courses"
        onTouchTap={() => null} />
    </CardActions>
  </Card>
)

let ScheduleStackCard = ({stackMap, courseIDs}) => (
  <Card expanded={true} onExpandChange={() => null}>
    <CardHeader
      title={'Schedule Stack'}
      actAsExpander={false}
      // showExpandableButton={true}
    />
    <CardText expandable={true}>
      <ScheduleStackContainer stackMap={stackMap}
                              courseIDs={courseIDs} />
    </CardText>
  </Card>
)

const ScheduleBuilderComponent = ( {courseIDs, stackMap} ) => (

  <div style={style.appPage}>
    <div>
      <SchedulePreferencesCard />
    </div>

    <br />

    <div>
      <DesiredCoursesCard courseIDs={courseIDs}
                          stackMap={stackMap}/>
    </div>

    <br />

    <div>
      <ScheduleStackCard stackMap={stackMap}
                              courseIDs={courseIDs} />
    </div>

    <BottomNavigationContainer />
  </div>
)

export default ScheduleBuilderComponent
