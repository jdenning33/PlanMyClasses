import React from 'react';
import ClickableContainer from '../../domains/Clickable/ClickableContainer';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'
import CoursesContainer from '../Course/CoursesContainer'


const Title = ( {subject, cardClicked} ) => {
  let text = (
    <div>
      <span><b>{subject.code}:</b> {subject.name}</span>
    </div>
  )
  return (<ClickableContainer node={text}
                             active={false}
                             clickAction={()=>cardClicked(subject._id)} />)
}

const ExpandedSubjectComponent = ( {subject, cardClicked} ) => (
  <div>
    <Title  subject={subject}
            cardClicked={cardClicked} />
    <span/>
    <CoursesContainer courseIDs={subject.courseIDs} />
  </div>
);

const LoadingComponent = ( ) => (
  <div>
    loading
  </div>
);


const Component = ( {subject, subjectID, expanded, fetchingIDs,
                            cardClicked, getData} ) => {
  if(!subject) return ( <LoadingComponent /> )
  else if(expanded){
    return (<ExpandedSubjectComponent subject={subject}
                              cardClicked={cardClicked} />);
  }
  else{
    return (<Title subject={subject} cardClicked={cardClicked} />);
  }
};


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
    return Component(this.props)
  }
}


export default SubjectComponent
