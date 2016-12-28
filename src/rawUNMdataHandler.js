import axios from 'axios';
import dataAPI, { COLLECTIONS_ENUM } from '../src/apis/dataAPI';
import $ from 'jquery'

const handleSections = ( course ) => {
  let sections = {};

  $(course).find('section')
  .filter( (index, section) => {
    //  TODO: support crossover listings
    //  crossover listings are recorded as sections
    //  10 is saying that it is base 10
    return parseInt( $(section).attr('number'), 10 ) < 100;
  })
  .each( (index, section) => {

    let jsonSection =
      { number: $(section).attr('number'),
        crn:    $(section).attr('crn'),
      }

    sections[jsonSection.number] = jsonSection;
  });

  return sections;
};

const handleCourses = ( subject ) => {
  let courses = {};
  let courseIDs = [];

  $(subject).find('course')
  .filter( (index, course) => {
    return 1;
  })
  .each( (index, course) => {
    let sections = handleSections( course );

    let jsonCourse =
      { number: $(course).attr('number'),
        sections: sections
      }

    courses[jsonCourse.number] = jsonCourse;

    dataAPI.add(
      { type: COLLECTIONS_ENUM.COURSES,
        data: jsonCourse
      })
      .then( (res) => courseIDs.push(res._id) )
      .catch( (err) => console.log(err) );

  });

  return courseIDs;
};

const handleSubjects = ( campus ) => {
  let subjects = {};

  $(campus).find('subject')
  .filter( (index, subject) => {
    return 1;
  })
  .each( (index, subject) => {
    let courseIDs = handleCourses( subject );

    subjects[$(subject).attr('code')] = {
      code: $(subject).attr('code'),
      name: $(subject).attr('name'),
      courseIDs: courseIDs
    } ;

  });

  return subjects;
};

//There is a separate db for each campus i.e. /api/abq/subjects or api/abq/courses
//                                              /api/val/subjects
// only working with main campus right now
const handleCampus = ( xmlDoc ) => {
  let campuses = {};

  $(xmlDoc).find('campus')
  .filter( (index, campus) => {
    return $(campus).attr('code') === 'ABQ';
  })
  .each( (index, campus) => {
    let subjects = handleSubjects(campus);

    campuses[$(campus).attr('code')] = {
      code: $(campus).attr('code'),
      name: $(campus).attr('name'),
      subjectIDs: subjects
    }
  });

  return campuses;
};

//  loads the raw xml unm file then parses it to our json object that we'll
//  use to populate the unm data db
export const getRawUNMdata = () => {
  axios.get('https://gist.githubusercontent.com/jdenning33/b7f33f04d96fe8012016f98bf231fc12/raw/d9d30cd28d246e8cf097dae79708f364334222b1/current.xml')
    .then( res => {

      var xmlDoc = res.data;
      let jsonSchedules = handleCampus( xmlDoc );
      console.log( jsonSchedules );
    })
    .catch( err => {
      console.log(err);
    });
};
