/*
This file is a really good example in how to set up our reducer, how to type our different Actions
how to apply those Action Types inside of our reducer, how to setup an Action Type enum and make 
use of that enum inside of a reducer, and our Action Type interfaces as well.

Now make sure we are using the Actions in an appropriate way.
*/



interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// Rather than hardcoding a string to the interface, we use our enum of ActionType defined below. This makes our App more dynamic.
interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

// This is instead of writing out the three Actions within the 'action' prop within our reducer func.
// We just use this type of Action to represent all different possible actions as can be processed by all of our different reducers.
type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

// Instead of having so many strings in a number of locations, we write an `enum` called ActionType, then make use of these enum's within each 'case' of the reducer.
// All our different Action Types. They all have a string value assigned to them and we can access them or make use of them like this:
// ActionType.SEARCH_REPOSITORES
enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

// Now make use of the enum's within each case.
const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
