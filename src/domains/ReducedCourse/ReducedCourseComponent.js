import React from 'react';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'
import SectionContainer from '../Section/SectionContainer'
import { dataCache } from '../../dataHandling/dataCache'
import style from '../../style'


const Title = ( {course, cardClicked} ) => {
  return (
    <div>
      <span> ~ {course.number}: {course.title}</span>
    </div>
  )
}

const SectionCarousel = ( {sectionIDs} ) => (
  <div style={style.carousel}>
    {sectionIDs.map( (sectionID) => {
      return <SectionContainer  style={style.courseBox}
                                key={sectionID}
                                sectionID={sectionID} />
    })}
  </div>
);

const SectionChunk = ( {sectionChunk, active} ) => {
  let sectionIDs = Object.keys(sectionChunk.sectionIDs);
  sectionIDs = sectionIDs.sort( (id1, id2) => {
    return  (sectionChunk.sectionIDs[id1].secondaryTimes[0].start -
             sectionChunk.sectionIDs[id2].secondaryTimes[0].start)
  });

  return(
    <div>
      {sectionChunk.primaryTime.start} - {sectionChunk.primaryTime.end}
      {active ? <SectionCarousel sectionIDs={sectionIDs} /> : null}

    </div>
  )
}

const ExpandedCourseComponent = ( {course, reducedCourseJSON, active} ) => {

  console.log(reducedCourseJSON);

  let sortedChunks = reducedCourseJSON.sort( (chunk1, chunk2) => (
    chunk1.primaryTime.start - chunk2.primaryTime.start
  ));

  return(
    <div>
      <Title  course={course} />

      {sortedChunks.map( (sectionChunk) => {
          return <SectionChunk  key={sectionChunk.primaryTime.start}
                                sectionChunk={sectionChunk}
                                active={true} />
      })}
    </div>
  )
}


class ReducedCourseComponent extends React.Component{
  constructor({course, courseID, expanded, fetchingIDs,
                              cardClicked, getData}){
    super();
  }

  componentWillMount(){
    let my = this.props;
    dataCache.deepLoadCourses([my.courseID], my.getData);
  }


  render(){
    let my = this.props;
    if(!my.ready) return (<div>loading</div>);
    return (<ExpandedCourseComponent  course={my.course}
                                      reducedCourseJSON={my.reducedCourseJSON}
                                      active={my.active} />);

  }
}


export default ReducedCourseComponent
