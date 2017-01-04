import React from 'react';
import ScheduleContainer from './ScheduleContainer';
import { COLLECTIONS_ENUM } from '../../dataHandling/dataCache'


class SchedulesComponent extends React.Component{
  constructor( {ready, scheduleJSON, courseIDs, getData} ){
    super();
  }

  componentWillMount(){
    let my = this.props;
    if(my.ready) return;

    //Load anything that hasn't been loaded yet
    my.getData(my.courseIDs, COLLECTIONS_ENUM.COURSES)
    .then( (data) => {
      let courses = data;
      let sectionIDs = [];
      courses.forEach(course => {
        sectionIDs = sectionIDs.concat(course.sectionIDs)
      });
      my.getData(sectionIDs, COLLECTIONS_ENUM.SECTIONS);
    })
    .catch(err=> console.error(err));
  }

  render(){
    let my = this.props;

    if(my.ready){
      return(
        <div>
          Schedules
          <ScheduleContainer scheduleJSON={my.scheduleJSON} />
        </div>
      )
    }else{
      return(
        <div>loading</div>
      )
    }

  }
};

export default SchedulesComponent
