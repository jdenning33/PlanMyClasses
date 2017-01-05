import React from 'react';
import ClickableContainer from '../../domains/Clickable/ClickableContainer';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'
import CoursesContainer from '../Course/CoursesContainer'
import style from '../../style'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';


const SubjectCard = ( {subject, subjectID, expanded, cardClicked} ) => (
  <Card style={style.courseBrowserCard}
        expanded={expanded} onExpandChange={() => cardClicked(subjectID)}>
    <CardHeader
      title={subject.name}
      subtitle={subject.code}
      actAsExpander={true}
      // showExpandableButton={true}
    />
  <CardText style={style.courseBrowserCard} expandable={true}>
      <CoursesContainer courseIDs={subject.courseIDs} />
    </CardText>
  </Card>

);

const LoadingComponent = ( ) => (
  <div>
    loading
  </div>
);

class SubjectComponent extends React.Component{
  constructor({subject, subjectID, expanded, fetchingIDs,
                              cardClicked, getData}){
    super();
  }

  componentWillMount(){
    let my = this.props;
    if(!my.subject){
      if(!my.fetchingIDs.length || !my.fetchingIDs.some(id=>id===my.subjectID)) {
        my.getData(my.subjectID, COLLECTIONS_ENUM.SUBJECTS)
      };
    }
  }

  render(){
    if(!this.props.subject) return ( <LoadingComponent /> )
    return SubjectCard(this.props);
  }
}


export default SubjectComponent
