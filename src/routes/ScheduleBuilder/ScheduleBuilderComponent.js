import React from 'react'
import SchedPrefContainer from '../../domains/SchedulePreferences/SchedPrefContainer'
import CoursesContainer from '../../domains/Course/CoursesContainer'
import { ROUTE_ENUM } from '../../routes/AppRouter';
// import SchedulesContainer from '../../domains/Schedule/SchedulesContainer'
import ScheduleStackContainer from '../../domains/ScheduleStack/ScheduleStackContainer'
import BottomNavigationContainer from '../../domains/Navigation/BottomNavigationContainer'
import AppBarComponent from '../../domains/Navigation/AppBarComponent'

import style from '../../style'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';


let SchedulePreferencesCard = ({activeLinks} ) => (
  <Card>
    <CardHeader
      title={'Preferences'}
      actAsExpander={true}
      showExpandableButton={true}
    />

  <CardText style={style.wrapper} expandable={false}>
      {activeLinks.map((link) =>
        <Chip labelStyle={style.chipLabel}
              style={style.chip}>{link.name}</Chip>)}
    </CardText>

    <CardText expandable={true}>
      <SchedPrefContainer />
    </CardText>
  </Card>
)

let DesiredCoursesCard = ({courseIDs, courses, stackMap, setRelationship,
                                  toggleSetRelationship, changeRoute}) => (
  <Card initiallyExpanded={false}>
    <CardHeader
      title={'Desired Courses'}
      actAsExpander={true}
      showExpandableButton={true}
    />

   <CardText style={style.wrapper} expandable={false}>
      {courses? stackMap.relationships.map( (relationship) => (
        <Chip labelStyle={style.chipLabel} style={style.chip}>
          {(courses[relationship[0]])?courses[relationship[0]].number : null}
          {relationship.map(courseID => (
            (courseID === relationship[0]) ? null :
            <span> or {courses[courseID] ? courses[courseID].number : null}</span>
            )
          )}
        </Chip>
      )) : null}
    </CardText>

    <CardText expandable={true}>
      {stackMap.relationships.map( (relationship) => (
        <div>
          <CoursesContainer
            setRelationship={setRelationship}
            courseIDs={relationship}
            toggleSetRelationship={toggleSetRelationship}/>
          <br />
        </div>
      ))}
    </CardText>
    <CardActions expandable={true}>
      <FlatButton label={!setRelationship?
          "Set Relationship " : "Save Relationship"}
        onTouchTap={() => toggleSetRelationship()} />
      <FlatButton label="Add Courses"
        onTouchTap={() => changeRoute(ROUTE_ENUM.COURSE_BROWSER)} />
    </CardActions>
  </Card>
);

let ScheduleStackCard = ({stackMap, courseIDs}) => (
  <Card style={style.scheduleStackCard} expanded={true} onExpandChange={() => null}>
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
);

const ScheduleBuilderComponent = ( {
    helpActive, courseIDs, stackMap, courses, activeLinks, setRelationship,
              openHelp, closeHelp, toggleSetRelationship, changeRoute} ) => (

  <div style={style.window}>
    <div style={style.contentHiderLeft} />

    <div style={style.appPage}>
        <AppBarComponent  helpActive={helpActive}
                          openHelp={openHelp}
                          closeHelp={closeHelp}
                          title={'Schedule Builder'}
                          helpText={'How to use the schedule builder:'}/>
      <br />
      <div>
        <SchedulePreferencesCard activeLinks={activeLinks} />
      </div>
      <br />
      <div>
        <DesiredCoursesCard courseIDs={courseIDs}
                            setRelationship={setRelationship}
                            stackMap={stackMap}
                            courses={courses}
                            changeRoute={changeRoute}
                            toggleSetRelationship={toggleSetRelationship}/>
      </div>
      <br />
      <div>
        <ScheduleStackCard stackMap={stackMap}
                                courseIDs={courseIDs} />
      </div>
      <div>
        <BottomNavigationContainer />
      </div>

      <br />
    </div>

    <div style={style.contentHiderRight} />
  </div>
)

export default ScheduleBuilderComponent
