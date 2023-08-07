/*
Define our reducer that will receive the argument of state (term) and an action that we need to process. Then we need to return some state that has these 3 props:
- data
- loading
- error
*/

// an 'Interface' that describes this state argument that has been passed into the reducer func.
interface RepositoriesState {
  loading: boolean;
  error: string | null; // error flag that will be either a String or null. If there is an error set to a String. If no error set it to null to indicate there is no error.
  data: string[]; // data will be an Array of Strings.
}

// A switch statement with 3 different cases inside of our reducer func.
const reducer = (state: RepositoriesState, action: any) => {
  switch (action.type) {
    case 'search_repositories':
      return { loading: true, error: null, data: [] };
    case 'search_repositories_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_repositories_error':
      return { loading: false, error: action.payload, data: [] }; // reset data to empty Array.
    default:
      return state;
  }
};

export default reducer;
