import React from 'react';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache';
import LinkContainer from '../../domains/Link/LinkContainer';


// const SubjectComponent = ( {subject} ) => (
//   <div>
//     <span> {subject.name} </span>
//     <br />
//     <span> {subject.code} </span>
//   </div>
// );
//
// const SubjectsComponent = ( {subjects} ) => {
//   console.log(subjects);
//   // return(
//   //   <div>alsdfj;asl</div>
//   // )
//   return (
//     <span>
//       {subjects.map( (subject) => (
//           <span key={subject.code}>
//           <SubjectComponent subject={subject} />
//           </span>
//         )
//       )}
//     </span>
//   )
// };

const testRequest = {
  type: COLLECTIONS_ENUM.SUBJECTS,
  origin: 'courseBrowser',
  dataIDs: ['586477cbc5d24f47c82d20f9',
            '586477cbc5d24f47c82d20fa',
            '586477cbc5d24f47c82d20fb']
}

const CourseBrowserComponent = ( {subjects, testDataCache} ) => {
  return (
    <div>
      <div>
        <h3> Course Browser </h3>
        {/* <SubjectsComponent subjects={subjects} /> */}
        <LinkContainer  text='Test dadta cache'
                        active={false}
                        clickAction={() => testDataCache(testRequest) } />
      </div>
    </div>
  )
}

// CourseBrowserComponent.propTypes = {
//
// }

export default CourseBrowserComponent
