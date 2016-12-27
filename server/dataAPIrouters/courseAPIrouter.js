var CourseModel = require('../../model/CoursesData/CourseModel');

var courseAPIrouter = {
  addToRouter: (router) => {
    //adding the /courses route to our /api router
    router.route('/courses')
      //retrieve all courses from the database
      .get(function(req, res) {
        //looks at our Course Schema
        CourseModel.find(function(err, courses) {
          if (err)
            res.send(err);
          //responds with a json object of our database courses.
          res.json(courses)
        });
      })
      //post new course to the database
      .post(function(req, res) {
        var course = new CourseModel();
        //body parser lets us use the req.body
        course.title = req.body.title;
        course.subjectID = req.body.subjectID;
        course.number = req.body.number;
        course.description = req.body.description;
        course.credits = req.body.credits;
        course.sectionIDs = req.body.sectionIDs;

        course.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'Course successfully added!' });
        });
      });

    //Adding a route to a specific course based on the database ID
    router.route('/courses/:course_id')
    //The put method gives us the chance to update our course based on the ID passed to the route
      .put(function(req, res) {
        CourseModel.findById(req.params.course_id, function(err, course) {
          if (err)
            res.send(err);
          //setting the new fields to whatever was changed. If nothing was changed
          // we will not alter the field.
          (req.body.title) ? course.title = req.body.title : null;
          (req.body.subjectID) ? course.subjectID = req.body.subjectID : null;
          (req.body.number) ? course.number = req.body.number : null;
          (req.body.description) ? course.description = req.body.description : null;
          (req.body.credits) ? course.credits = req.body.credits : null;
          (req.body.sectionIDs) ? course.sectionIDs = req.body.sectionIDs : null;

          //save course
          course.save(function(err) {
            if (err)
              res.send(err);
            res.json({ message: 'Course has been updated' });
          });
        });
      })
      //delete method for removing a course from our database
      .delete(function(req, res) {
        //selects the course by its ID, then removes it.
        CourseModel.remove({ _id: req.params.course_id }, function(err, course) {
          if (err)
            res.send(err);
          res.json({ message: 'Course has been deleted' })
        })
      });

  }
};

module.exports = courseAPIrouter;
