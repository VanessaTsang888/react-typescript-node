/***********************************************************
The Action Creator called `searchRepositories(term)` will 
make a request off to the NPM API. We will pass to it some 
search term that's going to be a String. 
*************************************************************/

// Use axio to make our network request
import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

// Our Async Action Creator which is a func, will take the search term from the user.
const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });
// Maker our request wrapped inside of a try catch block.
// take the err object and provide it as a payload - can be a string describing what just went wrong.
    try {
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
