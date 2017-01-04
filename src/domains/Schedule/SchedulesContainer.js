import { connect } from 'react-redux'
import SchedulesComponent from './SchedulesComponent'
import { dataCache } from '../../dataHandling/dataCache'


const getSchedulePermutations = (courses, courseIDs) => {
  let schedules = [ [] ];

  if(courseIDs) courseIDs.forEach( (courseID) => {
    let sectionIDs = courses[courseID].sectionIDs;
    let newSchedules = [];
    sectionIDs.forEach( (sectionID) => {
      schedules.forEach( (schedule) => {
        let newSchedule = schedule.concat(sectionID);
        newSchedules.push(newSchedule);
      });
    });
    schedules = newSchedules;
  });

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
        if(!start) conflict = true;
        if(scheduleTimes[day]) scheduleTimes[day].push({ start , end });
        else scheduleTimes[day] = [{start, end}];
      });
    });
  });
  if(conflict) return 0;
  else return scheduleTimes;
}

const compareTimes = (times1, times2) => {

  //Try to compare the lecture time, not the lab time
  let time1;
  times1.forEach( time => {
    if(!time1 || time.days.length > time1.days.length) time1 = time;
  });
  let time2;
  times2.forEach( time => {
    if(!time2 || time.days.length > time2.days.length) time2 = time;
  });

  if(!time1 || !time2) return false;
  if(time1.days.length !== time2.days.length) return false;
  if(time1.start  !==  time2.start ) return false;
  if(time1.end    !==  time2.end   ) return false;

  if(!time1.days.some( (day1) => (
    time2.days.some( (day2) => (
      day1 === day2
    ))
  ))) return false;

  return true;
}

const getScheduleJSON = (sections, courses, courseIDs) => {
  let scheduleJSON = {};

  courseIDs.forEach( (courseID) => {
    scheduleJSON[courseID] = {};
    let course = courses[courseID];
    let sectionIDs = [];
    sectionIDs = sectionIDs.concat(course.sectionIDs);
    while(sectionIDs.length){
      let primarySectionID = sectionIDs.pop();
      let primarySection = sections[primarySectionID];
      scheduleJSON[courseID][primarySectionID] = [];

      // eslint-disable-next-line
      sectionIDs.forEach( (sectionID) => {
        let section = sections[sectionID];
        if( compareTimes(section.times, primarySection.times) ){
          scheduleJSON[courseID][primarySectionID].push(sectionID);
          sectionIDs = sectionIDs.filter((id)=> sectionID!==id);
        }
      })
    }
  });
  return scheduleJSON;
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
  let scheduleJSON;
  let scheduleIDs = 1111;
  if(ready && sectionIDs.every(sectionID => sections[sectionID])){

    scheduleJSON = getScheduleJSON(sections, courses, courseIDs);
    let schedulePermutations = getSchedulePermutations(courses, courseIDs);


    //Don't even need these //just if we want to initially align a preferred schedule
    schedulePermutations.forEach((schedulePerm) => {
      let times = getScheduleTime(schedulePerm, sections);
      if(times) schedules.push(
        { scheduleJSON: scheduleJSON,
          times:times,
          id:scheduleIDs++
        });
    });

  } else ready = false;

  return {
    ready: ready,
    courses: courses, //need to sort the courses
    scheduleJSON: scheduleJSON,   //used to make the schedule
    courseIDs: courseIDs      //just need these so we can load them
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getData: (dataIDs, collection) => {
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
