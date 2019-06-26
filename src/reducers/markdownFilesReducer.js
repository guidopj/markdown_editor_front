import {
    FETCH_MARKDOWN_FILES_FAILURE, FETCH_MARKDOWN_FILES_SUCCESS
    } from '../actions/types';
  import initialState from './initialState';
  
  export default function (state = initialState, action){  
    switch(action.type){
        case FETCH_MARKDOWN_FILES_SUCCESS:
            const newState = {...state}
            console.log(newState.files)
            newState.markdownFiles = newState.markdownFiles.concat(action.payload);
        return {
            ...state,
            markdownFiles: newState.markdownFiles,      
        };

        case FETCH_MARKDOWN_FILES_FAILURE:
        return {
            ...state,
            error: action.payload,
        };

        default:
        return state;
    }
}