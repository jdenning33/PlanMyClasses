var SubjectModel = require('../../model/CoursesData/SubjectModel');

var subjectAPIrouter = {
  addToRouter: (router) => {
    //adding the /subjects route to our /api router
    router.route('/subjects')
      //retrieve all subjects from the database
      .get(function(req, res) {
        //looks at our Subject Schema
        SubjectModel.find(function(err, subjects) {
          if (err)
            res.send(err);
          //responds with a json object of our database subjects.
          res.json(subjects)
        });
      })
      //post new subject to the database
      .post(function(req, res) {
        var subject = new SubjectModel();
        //body parser lets us use the req.body
        subject.title = req.body.title;
        subject.code = req.body.code;
        subject.courseIDs = req.body.courseIDs;

        subject.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'Subject successfully added!' });
        });
      });

    //Adding a route to a specific subject based on the database ID
    router.route('/subjects/:subject_id')
    //The put method gives us the chance to update our subject based on the ID passed to the route
      .put(function(req, res) {
        SubjectModel.findById(req.params.subject_id, function(err, subject) {
          if (err)
            res.send(err);
          //setting the new fields to whatever was changed. If nothing was changed
          // we will not alter the field.
          (req.body.title) ? subject.title = req.body.title : null;
          (req.body.code) ? subject.code = req.body.code : null;
          (req.body.courseIDs) ? subject.courseIDs = req.body.courseIDs : null;

          //save subject
          subject.save(function(err) {
            if (err)
              res.send(err);
            res.json({ message: 'Subject has been updated' });
          });
        });
      })
      //delete method for removing a subject from our database
      .delete(function(req, res) {
        //selects the subject by its ID, then removes it.
        SubjectModel.remove({ _id: req.params.subject_id }, function(err, subject) {
          if (err)
            res.send(err);
          res.json({ message: 'Subject has been deleted' })
        })
      });

  }
};

module.exports = subjectAPIrouter;
