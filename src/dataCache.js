// Serves as middleware to check if we have the desired data stored in the react-redux
// state already. If we do, retrieve it from there, otherwise, add it to state
// then retrieve it.
import dataAPI, { COLLECTIONS_ENUM } from './apis/dataAPI';

export COLLECTIONS_ENUM;

const dataCache = {
  get: (request) => {
    dataAPI.get(request);
  }
};

export default dataCache;
