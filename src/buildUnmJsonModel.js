import axios from 'axios';
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
  });

  return courses;
};

const handleSubjects = ( campus ) => {
  let subjects = {};

  $(campus).find('subject')
  .filter( (index, subject) => {
    return 1;
  })
  .each( (index, subject) => {
    let courses = handleCourses( subject );

    subjects[$(subject).attr('code')] = {
      code: $(subject).attr('code'),
      name: $(subject).attr('name'),
      courses: courses
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
    return 1;
  })
  .each( (index, campus) => {
    let subjects = handleSubjects(campus);

    campuses[$(campus).attr('code')] = {
      code: $(campus).attr('code'),
      name: $(campus).attr('name'),
      subjects: subjects
    }
  });

  return campuses;
};

//  loads the raw xml unm file then parses it to our json object that we'll
//  use to populate the unm data db
const buildUnmJsonModel = () => new Promise( (resolve, reject) => {
  axios.get('https://gist.githubusercontent.com/jdenning33/b7f33f04d96fe8012016f98bf231fc12/raw/d9d30cd28d246e8cf097dae79708f364334222b1/current.xml')
    .then( res => {

      var xmlDoc = res.data;
      let jsonSchedules = handleCampus( xmlDoc );
      resolve(jsonSchedules);
    })
    .catch( err => {
      reject(err);
    });
});

export default buildUnmJsonModel;
