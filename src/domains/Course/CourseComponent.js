import React from 'react';
import ClickableContainer from '../Clickable/ClickableContainer';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'
import SectionsContainer from '../Section/SectionsContainer'


const Title = ( {course, cardClicked} ) => {
  let text = (
    <div>
      <span> ~ {course.number}: {course.title}</span>
    </div>
  )
  return (<ClickableContainer node={text}
                             active={false}
                             clickAction={()=>cardClicked(course._id)} />)
}

const ToggleDesiredButton = ( {courseID, isDesired, toggleDesired} ) => {
  let node = (
    <div><b>{
        isDesired?
        'Remove from Course Load' :
        'Add to Course Load'
    }</b></div>
  )
  return (<ClickableContainer
    node={node}
    active={false}
    clickAction={()=>toggleDesired(courseID, COLLECTIONS_ENUM.COURSES)} /> )
}

const ExpandedCourseComponent = ( {course, cardClicked,
                                    isDesired, toggleDesired} ) => (
  <div>
    <Title  course={course}
            cardClicked={cardClicked} />
    <ToggleDesiredButton courseID={course._id}
            isDesired={isDesired}
            toggleDesired={toggleDesired} />
    <span />
    <SectionsContainer sectionIDs={course.sectionIDs} />
  </div>
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


const Component = ( {course, courseID, expanded, isDesired, fetchingIDs,
                            cardClicked, toggleDesired, getData} ) => {
  if(!course){
    if(fetchingIDs.length && fetchingIDs.some(id=>id===courseID)) {
      return ( <LoadingComponent /> );
    }else{
      return ( <FailedComponent /> );
    }
  }
  else if(expanded){
    return (<ExpandedCourseComponent course={course}
                              cardClicked={cardClicked}
                              isDesired={isDesired}
                              toggleDesired={toggleDesired} />);
  }
  else{
    return (<Title course={course} cardClicked={cardClicked} />);
  }
};


class CourseComponent extends React.Component{
  constructor({course, courseID, expanded, fetchingIDs,
                              cardClicked, getData}){
    super();
  }

  componentWillMount(){
    let my = this.props;
    if(!my.course){
      if(!my.fetchingIDs.length || !my.fetchingIDs.some(id=>id===my.courseID)) {
        my.getData(my.courseID, COLLECTIONS_ENUM.COURSES)
      };
    }
  }

  render(){
    return Component(this.props)
  }
}


export default CourseComponent
