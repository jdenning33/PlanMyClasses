import React from 'react';
import ClickableContainer from '../Clickable/ClickableContainer';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'
import SectionsContainer from '../Section/SectionsContainer'
import style from '../../style'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';


const CourseCard = ( {course, courseID, expanded,
  cardClicked, toggleDesiredCourse} ) => (

  <Card expanded={expanded} onExpandChange={() => cardClicked(courseID)}>
    <CardHeader
      title={course.title}
      subtitle={course.number}
      actAsExpander={true}
      // showExpandableButton={true}
    />
    <CardText style={style.courseBrowserCard} expandable={true}>
      {course.description}
      <SectionsContainer sectionIDs={course.sectionIDs} />
    </CardText>
    <CardActions expandable={true}>
      <FlatButton label="Add to Schedule"
        onTouchTap={() => toggleDesiredCourse(course)} />
    </CardActions>
  </Card>

);

const LoadingComponent = ( ) => (
  <div>
    loading
  </div>
);
const FailedComponent = ( ) => (
  <div>
    failed
  </div>
);


class CourseComponent extends React.Component{
  constructor({course, courseID, expanded, fetchingIDs,
                    cardClicked, toggleDesiredCourse, getData}){
    super();
  }

  componentWillMount(){
    let my = this.props;
    if(!my.course){
      if(!my.fetchingIDs.length || !my.fetchingIDs.some(id=>id===my.courseID)) {
        if(my.courseID) my.getData(my.courseID, COLLECTIONS_ENUM.COURSES)
      };
    }
  }

  render(){
    let my = this.props;
    if(!my.course) return <LoadingComponent />
    return CourseCard(this.props);
  }
}


export default CourseComponent
