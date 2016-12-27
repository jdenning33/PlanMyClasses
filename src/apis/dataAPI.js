import axios from 'axios';

// TODO: look into using dot-env store url in .env
const dataURL = 'http://localhost:3001/api';
export const COLLECTIONS_ENUM = {
  SUBJECTS:     { key:1, url:`${dataURL}/subjects`  },
  COURSES:      { key:2, url:`${dataURL}/courses`   },
  SECTIONS:     { key:3, url:`${dataURL}/sections`  },
  INSTRUCTORS:  { key:4, url:`${dataURL}/instuctors`}
}

const dataAPI = {
  // request can be thought of as an Action passed to redux
  getAll: ( request ) => new Promise(
    (resolve, reject) => {
      axios.get(request.type.url, request.type)
        .then(res => {
          resolve(res.data);
        });
    }),

  // request needs a type (i.e. 'subject') and data to add
  add: ( request ) => new Promise(
    (resolve, reject) => {
      axios.post(request.type.url, request.data)
        .catch(err => {
          console.error(err);
        });
      return request.data;
    }),

  deleteComment: ( request ) => new Promise(
    (resolve, reject) => {
      axios.delete(`${request.type.url}/${request.id}`)
        .then(res => {
          console.log('Comment deleted');
        })
        .catch(err => {
          console.error(err);
        });
    }),

  updateComment: ( request ) => new Promise(
    (resolve, reject) => {
      //sends the data id and new author/text to our api
      axios.put(`${request.type.url}/${request.id}`, request.data)
        .catch(err => {
          console.log(err);
        })
    })
}

export default dataAPI;
