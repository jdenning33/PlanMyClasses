var InstructorModel = require('../../model/CoursesData/InstructorModel');

var instructorAPIrouter = {
  addToRouter: (router) => {
    //adding the /instructors route to our /api router
    router.route('/instructors')
      //retrieve all instructors from the database
      .get(function(req, res) {
        //looks at our Instructor Schema
        InstructorModel.find(function(err, instructors) {
          if (err)
            res.send(err);
          //responds with a json object of our database instructors.
          res.json(instructors)
        });
      })
      //post new instructor to the database
      .post(function(req, res) {
        var instructor = new InstructorModel();
        //body parser lets us use the req.body
        instructor.name       = req.body.name     ;
        instructor.email      = req.body.email    ;
        instructor.rmpID      = req.body.rmpID    ;
        instructor.courseIDs  = req.body.courseIDs;

        instructor.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'Instructor successfully added!' });
        });
      });

    //Adding a route to a specific instructor based on the database ID
    router.route('/instructors/:instructor_id')
    //The put method gives us the chance to update our instructor based on the ID passed to the route
      .put(function(req, res) {
        InstructorModel.findById(req.params.instructor_id, function(err, instructor) {
          if (err)
            res.send(err);
          //setting the new fields to whatever was changed. If nothing was changed
          // we will not alter the field.
          (req.body.title) ? instructor.name      = req.body.name       : null;
          (req.body.title) ? instructor.email     = req.body.email      : null;
          (req.body.title) ? instructor.rmpID     = req.body.rmpID      : null;
          (req.body.title) ? instructor.courseIDs = req.body.courseIDs  : null;

          //save instructor
          instructor.save(function(err) {
            if (err)
              res.send(err);
            res.json({ message: 'Instructor has been updated' });
          });
        });
      })
      //delete method for removing a instructor from our database
      .delete(function(req, res) {
        //selects the instructor by its ID, then removes it.
        InstructorModel.remove({ _id: req.params.instructor_id }, function(err, instructor) {
          if (err)
            res.send(err);
          res.json({ message: 'Instructor has been deleted' })
        })
      });

  }
};

module.exports = instructorAPIrouter;
