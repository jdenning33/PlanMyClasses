var CommentSchema    = require('../../model/CommentSchema'              );
var SubjectModel     = require('../../model/CoursesData/SubjectModel'   );
var CourseModel      = require('../../model/CoursesData/CourseModel'    );
var SectionModel     = require('../../model/CoursesData/SectionModel'   );
var InstructorModel  = require('../../model/CoursesData/InstructorModel');

const dataURL = 'http://localhost:3001/api';
var COLLECTIONS_ENUM = {
  COMMENTS:     { key:0, url:`${dataURL}/comments`  , name:'comments'   },
  SUBJECTS:     { key:1, url:`${dataURL}/subjects`  , name:'subjects'   },
  COURSES:      { key:2, url:`${dataURL}/courses`   , name:'courses'    },
  SECTIONS:     { key:3, url:`${dataURL}/sections`  , name:'sections'   },
  INSTRUCTORS:  { key:4, url:`${dataURL}/instuctors`, name:'instructors'}
}

// gets the mongoose model based on the collection name
// the name is passed in the link i.e. api/<collection.name>
const getModel = ( collection ) => {
  switch (collection) {
    case COLLECTIONS_ENUM.COMMENTS.name:
      return CommentSchema;
    case COLLECTIONS_ENUM.SUBJECTS.name:
      return SubjectModel;
    case COLLECTIONS_ENUM.COURSES.name:
      return CourseModel;
    case COLLECTIONS_ENUM.SECTIONS.name:
      return SectionModel;
    case COLLECTIONS_ENUM.INSTRUCTORS.name:
      return InstructorModel;
    default:
      return ;
  }
}

var dataAPIrouter = {
  addToRouter: (router) => {
    router.route('/:collection')
      .get(function(req, res) {
        let model = getModel(req.params.collection);
        model.find(function(err, data) {
          if (err)
            res.send(err);
          //responds with a json object of our database comments.
          res.json(data)
        });
      })

      //post new data to the specified collection
      .post(function(req, res) {
        let model = getModel(req.params.collection);
        var data = new model();

        // Lets us iterate the values in the schema
        let fields = Object.keys(data.schema.paths);
        // _id and _v are the final two fields, err if we try to set them
        for(let i=0; i<fields.length-2; i++){
          let key = fields[i];
          data[key] = req.body[key];
        };

        data.save(function(err) {
          if (err)
            res.send(err);
          res.json({ message: 'a '+req.params.collection+' item has been appended'  });
        });
      });

    router.route('/:collection/:data_id')
      .put(function(req, res) {
        let model = getModel(req.params.collection);
        model.findById(req.params.data_id, function(err, data) {
          if (err)
            res.send(err);

          // Lets us iterate the values in the schema
          let fields = Object.keys(data.schema.paths);
          // _id and _v are the final two fields, err if we try to set them
          // iterate through each field of the model, and update it if requested
          for(let i=0; i<fields.length-2; i++){
            let key = fields[i];
            (data[key]) ? data[key] = req.body[key] : null;
          };

          // save it to mongo
          data.save(function(err) {
            if (err)
              res.send(err);
            res.json({ message: 'a '+req.params.collection+' item has been updated' });
          });
        });
      })

      //removes a single item from our db
      .delete(function(req, res) {
        //selects the comment by its ID, then removes it.
        let model = getModel(req.params.collection);
        model.remove({ _id: req.params.data_id }, function(err, data) {
          if (err)
            res.send(err);
          res.json({ message: 'a '+req.params.collection+' item has been deleted' })
        })
      });

  }
};

module.exports = dataAPIrouter;
