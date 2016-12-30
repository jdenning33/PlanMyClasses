import React from 'react';
import ClickableContainer from '../../domains/Clickable/ClickableContainer';


const Title = ( {subject, subjectClicked} ) => {
  let text = (
    <div>
      <span>{subject.code}: {subject.name}</span>
    </div>
  )
  return (<ClickableContainer node={text}
                             active={false}
                             clickAction={()=>subjectClicked(subject._id)} />)
}

const ExpandedSubjectComponent = ( {subject, subjectClicked} ) => (
  <div>
    <Title  subject={subject}
            subjectClicked={subjectClicked} />
    <span>display courses</span>
  </div>
);

const SubjectComponent = ( {subject, expanded, subjectClicked} ) => {
  if(expanded){
    return (<ExpandedSubjectComponent subject={subject}
                              subjectClicked={subjectClicked} />);
  }
  else{
    return (<Title subject={subject} subjectClicked={subjectClicked} />);
  }
};

export default SubjectComponent
