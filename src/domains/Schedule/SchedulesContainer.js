import { connect } from 'react-redux'
import SchedulesComponent from './SchedulesComponent'
import { dataCache } from '../../dataHandling/dataCache'


const getSchedulePermutations = (courses, courseIDs) => {
  let schedules = [ [] ];

  if(courseIDs) courseIDs.forEach( (courseID) => {
    let sectionIDs = courses[courseID].sectionIDs;
    console.log(sectionIDs);
    let newSchedules = [];
    sectionIDs.forEach( (sectionID) => {
      schedules.forEach( (schedule) => {
        let newSchedule = schedule.concat(sectionID);
        newSchedules.push(newSchedule);
      });
    });
    schedules = newSchedules;
  });

  console.log(schedules);
  return schedules;
}

const getScheduleTime = (schedule, sections) => {
  let conflict = false;
  let scheduleTimes = { }
  schedule.forEach( (sectionID) => {
    let section = sections[sectionID];
    section.times.forEach( (time) => {
      time.days.forEach( (day) => {
        if(scheduleTimes[day] && scheduleTimes[day].some( (sTime) => (
          (sTime.start >= time.start && sTime.start <= time.end) ||
          (sTime.end >= time.start && sTime.end <= time.end)
        ))) {
          conflict = true;
        }
        let start = time.start; let end = time.end;
        if(scheduleTimes[day]) scheduleTimes[day].push({ start , end });
        else scheduleTimes[day] = [{start, end}];
      });
    });
  });
  if(conflict) return 0;
  else return scheduleTimes;
}

const mapStateToProps = (state, ownProps) => {

  let courseIDs = Object.keys(state.scheduleBuilderReducer.desiredIDs);
  let courses = state.dataCacheReducer.data.courses;
  let sections = state.dataCacheReducer.data.sections;

  let ready = false;

  let sectionIDs = [];
  //make sure all the courses are loaded
  if(courseIDs && courseIDs.every(courseID => courses[courseID])){
    //retrieve all of their sections
    courseIDs.forEach(courseID => {
      sectionIDs = sectionIDs.concat(courses[courseID].sectionIDs);
    })
    ready = true;
  }

  //sectionIDs aren't loaded until all courses are loaded
  let schedules = [];
  if(ready && sectionIDs.every(sectionID => sections[sectionID])){
    let schedulePermutations = getSchedulePermutations(courses, courseIDs);
    schedulePermutations.forEach((schedulePerm) => {
      let times = getScheduleTime(schedulePerm, sections);
      if(times) schedules.push( {sections:schedulePerm, times:times} );
    });
    console.log(schedules);
  } else ready = false;

  return {
    ready: ready,
    schedules: schedules,   //used to make the schedule
    courseIDs: courseIDs      //just need these so we can load them
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getData: (dataIDs, collection) =>{
      let promise;
      promise = dispatch( dataCache.fetchIfNeeded( {type: collection,
                                          originator: 'schedulesContainer',
                                          dataIDs: dataIDs }
                                        ));
      return promise;
    },
  }
}

const SchedulesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulesComponent)

export default SchedulesContainer
