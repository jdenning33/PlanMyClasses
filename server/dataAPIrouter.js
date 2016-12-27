var CommentSchema       = require('../model/CommentSchema');
var commentAPIrouter    = require('./dataAPIrouters/commentAPIrouter');
var subjectAPIrouter    = require('./dataAPIrouters/subjectAPIrouter');
var courseAPIrouter     = require('./dataAPIrouters/courseAPIrouter');
var sectionAPIrouter    = require('./dataAPIrouters/sectionAPIrouter');
var instructorAPIrouter = require('./dataAPIrouters/instructorAPIrouter');

var dataAPIrouter = {
  //  Helper class to reduce code on the server script. Simply adds each of the
  //  data related routers to the passed in router
  addToRouter: (router) => {
    commentAPIrouter.addToRouter(router);
    subjectAPIrouter.addToRouter(router);
    courseAPIrouter.addToRouter(router);
    sectionAPIrouter.addToRouter(router);
    instructorAPIrouter.addToRouter(router);
  }
};

module.exports = dataAPIrouter;
