import React from 'react';
import ClickableContainer from '../../domains/Clickable/ClickableContainer';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'


const Title = ( {course, cardClicked} ) => {
  let text = (
    <div>
      <span>--{course.number}: {course.title}</span>
    </div>
  )
  return (<ClickableContainer node={text}
                             active={false}
                             clickAction={()=>cardClicked(course._id)} />)
}

const ExpandedCourseComponent = ( {course, cardClicked} ) => (
  <div>
    <Title  course={course}
            cardClicked={cardClicked} />
    <span>display courses</span>
  </div>
);

const LoadingComponent = ( ) => (
  <div>
    loading
  </div>
);



const Component = ( {course, courseID, expanded, fetchingIDs,
                            cardClicked, getData} ) => {
  if(!course) return ( <LoadingComponent /> )
  else if(expanded){
    return (<ExpandedCourseComponent course={course}
                              cardClicked={cardClicked} />);
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
