import { combineReducers } from 'redux';
import markdownReducer from './markdownFilesReducer'

const rootReducer = combineReducers({
    markdownFiles: markdownReducer,
  });
  
  export default rootReducer;