appUiReducer: {
  route: 'HOME'
  homeUiState: {

  }
  courseBrowserUiState: {

  }
  schedBuildUiState: {

  }
}

schedPrefReducer: {
  semester: 'S2017'
  campus: 'unm_main'
  online: 'never'
  time: {
    desirableHours: {
      { {M,W,F} , {0900, 1600} },
      { {T,R} , {0800, 1200} }
    }
    unavailableHours: {
      { {S,U}, {0000, 2359} },
      { {M,T,W,R,F}, {1800, 0600} },
      { {R}, {1200, 1300} }
    }
    minimizeBreaks: 'encouraged'
    hourLunchBreak: 'indifferent'
  }
  professor: {
    overall_rating: 'encouraged'
    easiness_rating: 'discouraged'
    hotness_rating: 'indifferent'
  }
}

desiredCourses: {
  desiredIDs: {
    { 001235, 003457 },     //course 001235 or course 003457
    { 012310101 },          //section 012310101
    { 008476 },
    { 006784 }
  }
}

externalData: {
  subjects: {
    0123: {
      id: 0123
      subject: 'Electrical and Computer Engineering'
      code: 'ECE'
      courseIDs: { 0123101, 0123131, 0123162, 0123240, ... }
    },
    0234: {
      id: 0234
      subject: 'Mathematics'
      code: 'MATH'
      courseIDs: { 0234102, 0234142, 0234156, 0234162, ... }
    },
    ...
  }
  courses: {
    0123101: {
      id: 0123101
      title: 'Intro to electrical and computer Engineering'
      description: 'An introductory course looking into the branches of ...'
      credits: { 3, 4 }
      professorIDs: { 101378902, 101789483 }
      sectionIDs: { 012310101, 012310102, 012310103, 012310104, ... }
    },
    0123131: {
      id: 0123131
      title: 'Intermediate C Programming'
      description: 'An intermediate course in the concepts of the C progr...'
      credits: { 3 }
      professorIDs: {1014567823}
      sectionIDs: { 012313101, 012313102, 012313103, 012313104, ... }
    },
    ...
  }
  sections: {
    012310101: {
      id: 012310101
      crn: 634172
      instructors: { 101334202 }
      times: {
        { {M,W,F}, {0900, 0950}, MITCH, 121 },
        { {R}, {0800, 1015}, EECE, 214 }
      }
    },
    012310102: {
      id: 012310102
      crn: 634189
      instructors: { 101346216 }
      times: {
        { {M,W,F}, {0900, 0950}, ONLINE, 121 },
        { {R}, {0800, 1015}, EECE, 214 }
      }
    },
    ...
  }
  instructors: {
    101378920: {
      id: 101378920
      name: 'Joel Castallanos'
      courseIDs: { 0123101, 0123131 }
      rateMyProfessor: {
        api: 0123412
        overall: 5
        easiness: 3
        hotness: 2
      }
    },
    101394576: {
      id: 101394576
      name: 'Amir Neistar'
      courseIDs: { 0234260, 0234341 }
      rateMyProfessor: {
        api: 0578921
        overall: 3
        easiness: 5
        hotness: 1
      }
    },
    ...
  }
}
