var SectionModel = require('../../model/CoursesData/SectionModel');

var sectionAPIrouter = {
  addToRouter: (router) => {
    //adding the /sections route to our /api router
    router.route('/sections')
      //retrieve all sections from the database
      .get(function(req, res) {
        //looks at our Section Schema
        SectionModel.find(function(err, sections) {
          if (err)
            res.send(err);
          //responds with a json object of our database sections.
          res.json(sections)
        });
      })
      //post new section to the database
      .post(function(req, res) {
        var section = new SectionModel();
        //body parser lets us use the req.body
        section.courseID = req.body.courseID;
        section.number = req.body.number;
        section.instructorIDs = req.body.instructorIDs;
        section.times = req.body.times;

        section.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'Section successfully added!' });
        });
      });

    //Adding a route to a specific section based on the database ID
    router.route('/sections/:section_id')
    //The put method gives us the chance to update our section based on the ID passed to the route
      .put(function(req, res) {
        SectionModel.findById(req.params.section_id, function(err, section) {
          if (err)
            res.send(err);
          //setting the new fields to whatever was changed. If nothing was changed
          // we will not alter the field.
          (req.body.title) ? section.courseID = req.body.courseID : null;
          (req.body.title) ? section.number = req.body.number : null;
          (req.body.title) ? section.instructorIDs = req.body.instructorIDs : null;
          (req.body.title) ? section.times = req.body.times : null;

          //save section
          section.save(function(err) {
            if (err)
              res.send(err);
            res.json({ message: 'Section has been updated' });
          });
        });
      })
      //delete method for removing a section from our database
      .delete(function(req, res) {
        //selects the section by its ID, then removes it.
        SectionModel.remove({ _id: req.params.section_id }, function(err, section) {
          if (err)
            res.send(err);
          res.json({ message: 'Section has been deleted' })
        })
      });

  }
};

module.exports = sectionAPIrouter;
