import {
    FETCH_MARKDOWN_FILES_SUCCESS,
    FETCH_MARKDOWN_FILES_FAILURE,
    CREATE_MARKDOWN_FILE_FAILURE,
    CREATE_MARKDOWN_FILE_SUCCESS,
    EDIT_MARKDOWN_FILE_FAILURE,
    EDIT_MARKDOWN_FILE_SUCCESS,
    DELETE_MARKDOWN_FILE_FAILURE,
    DELETE_MARKDOWN_FILE_SUCCESS
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

  // Actions Creators
  function createMarkdownFileFailure (error) {
    return {
      type: CREATE_MARKDOWN_FILE_FAILURE,
      payload: error
    };
  }
  
  // Actions Creators
  function createMarkdownFileSuccess (file) {
    return {
      type: CREATE_MARKDOWN_FILE_SUCCESS,
      payload: file
    };
  }

  /* CREATE MARKDOWN FILE */
  
  export function createMarkdownFile(file){
    return async (dispatch) => {
      try {
        const data = await API.createMarkdownFile(file);
        dispatch(createMarkdownFileSuccess(data.data.file));
      } catch (error) {
        dispatch(createMarkdownFileFailure(error));
      }
    }
  }

  // Actions Creators
  function editMarkdownFileFailure (error) {
    return {
      type: EDIT_MARKDOWN_FILE_FAILURE,
      payload: error
    };
  }
  
  // Actions Creators
  function editMarkdownFileSuccess (file) {
    return {
      type: EDIT_MARKDOWN_FILE_SUCCESS,
      payload: file
    };
  }

  /* EDIT MARKDOWN FILE */
  
  export function editMarkdownFile(file){
    return async (dispatch) => {
      try {
        const data = await API.editMarkdownFile(file);
        dispatch(editMarkdownFileSuccess(data.data.file));
      } catch (error) {
        dispatch(editMarkdownFileFailure(error));
      }
    }
  }

  // Actions Creators
  function deleteMarkdownFileFailure (error) {
    return {
      type: DELETE_MARKDOWN_FILE_FAILURE,
      payload: error
    };
  }
  
  // Actions Creators
  function deleteMarkdownFileSuccess (file) {
    return {
      type: DELETE_MARKDOWN_FILE_SUCCESS,
      payload: file
    };
  }

  /* DELETE MARKDOWN FILE */
  
  export function deleteMarkdownFile(file){
    return async (dispatch) => {
      try {
        await API.deleteMarkdownFile(file);
        dispatch(deleteMarkdownFileSuccess(file));
      } catch (error) {
        dispatch(deleteMarkdownFileFailure(error));
      }
    }
  }