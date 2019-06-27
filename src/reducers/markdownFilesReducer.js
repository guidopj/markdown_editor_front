import {
    FETCH_MARKDOWN_FILES_FAILURE, 
    FETCH_MARKDOWN_FILES_SUCCESS,
    CREATE_MARKDOWN_FILE_FAILURE,
    CREATE_MARKDOWN_FILE_SUCCESS
    } from '../actions/types';
  import initialState from './initialState';
  
  export default function (state = initialState, action){  
    switch(action.type){
        case FETCH_MARKDOWN_FILES_SUCCESS:
        return {
            ...state,
            markdownFiles: action.payload,      
        };

        case FETCH_MARKDOWN_FILES_FAILURE:
        return {
            ...state,
            error: action.payload,
        };

        case CREATE_MARKDOWN_FILE_SUCCESS:
        return {
            ...state,
            markdownFiles: [...markdownFiles, action.payload],
        };

        case CREATE_MARKDOWN_FILE_FAILURE:
        return {
            ...state,
            error: action.payload,
        };

        default:
        return state;
    }
}