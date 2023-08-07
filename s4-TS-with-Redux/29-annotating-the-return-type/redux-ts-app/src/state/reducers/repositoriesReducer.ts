/**********************************************************************************
Refactor our code to better use TS to better check our code inside of our reducer.
***********************************************************************************/

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// Apply a return type annotation to our reducer func: add a colon and the name of the interface.
// Data prop can only be either an array of strings or an empty array.
const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
  switch (action.type) {
    case 'search_repositories':
      return { loading: true, error: null, data: [] };
    case 'search_repositories_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_repositories_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
