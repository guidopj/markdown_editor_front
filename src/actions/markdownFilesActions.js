import {
    FETCH_MARKDOWN_FILES_SUCCESS,
    FETCH_MARKDOWN_FILES_FAILURE
    } from './types';
  
  
  import { API } from '../api';
  
    // Actions Creators
  function fetchMarkdownFilesFailure (error) {
    return {
      type: FETCH_MARKDOWN_FILES_FAILURE,
      payload: error
    };
  }
  
  // Actions Creators
  function fetchMarkdownFilesSuccess (files) {
    return {
      type: FETCH_MARKDOWN_FILES_SUCCESS,
      payload: files
    };
  }
  
  /* GET MARKDOWN FILES */
  export function fetchMarkdownFiles(){
    return async (dispatch) => {
      try {
        const data = await API.fetchMarkdownFiles();
        dispatch(fetchMarkdownFilesSuccess(data.data.result));
      } catch (error) {
        dispatch(fetchMarkdownFilesFailure(error));
      }
    }
  }