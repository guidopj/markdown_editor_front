import {
    FETCH_MARKDOWN_FILES_FAILURE, 
    FETCH_MARKDOWN_FILES_SUCCESS,
    CREATE_MARKDOWN_FILE_FAILURE,
    CREATE_MARKDOWN_FILE_SUCCESS,
    EDIT_MARKDOWN_FILE_FAILURE,
    EDIT_MARKDOWN_FILE_SUCCESS,
    DELETE_MARKDOWN_FILE_FAILURE,
    DELETE_MARKDOWN_FILE_SUCCESS
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
            markdownFiles: [...state.markdownFiles, action.payload],
        };

        case CREATE_MARKDOWN_FILE_FAILURE:
        return {
            ...state,
            error: action.payload,
        };

        case EDIT_MARKDOWN_FILE_SUCCESS:
            const ids = state.markdownFiles.map((service) => {
                return service._id;
            });
            const indexToModif = ids.indexOf(action.payload._id)
            const newState = {...state}
            newState.markdownFiles[indexToModif] = action.payload;
        return {
            ...state,
            markdownFiles: newState.markdownFiles.slice()
        };

        case EDIT_MARKDOWN_FILE_FAILURE:
        return {
            ...state,
            error: action.payload,
        };

        case DELETE_MARKDOWN_FILE_SUCCESS:
        return {
            ...state,
            markdownFiles: state.markdownFiles.filter(item => item._id !== action.payload._id),
        };

        case DELETE_MARKDOWN_FILE_FAILURE:
        return {
            ...state,
            error: action.payload,
        };
        
        default:
        return state;
    }
}