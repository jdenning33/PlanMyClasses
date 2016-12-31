import React from 'react';
import ClickableContainer from '../../domains/Clickable/ClickableContainer';
import CoursesContainer from '../Course/CoursesContainer';


const Title = ( {subject, cardClicked} ) => {
  let text = (
    <div>
      <span><b>{subject.code}: {subject.name}</b></span>
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
    <span />
    <CoursesContainer courseIDs={subject.courseIDs} />
  </div>
);

const SubjectComponent = ( {subject, expanded, cardClicked} ) => {
  if(expanded){
    return (<ExpandedSubjectComponent subject={subject}
                              cardClicked={cardClicked} />);
  }
  else{
    return (<Title subject={subject} cardClicked={cardClicked} />);
  }
};

export default SubjectComponent
