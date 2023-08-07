/*
This file is a really good example in how to set up our reducer, how to type our different Actions
how to apply those Action Types inside of our reducer, how to setup an Action Type enum and make 
use of that enum inside of a reducer, and our Action Type interfaces as well.

*/



interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// Rather than hardcoding a string to the interface, we use the enum.
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
// We just use the Action type instead so reducer func is less code and easier to read.
type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

// All our different Action Types. They all have a string value assigned to them and we can access them:
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
