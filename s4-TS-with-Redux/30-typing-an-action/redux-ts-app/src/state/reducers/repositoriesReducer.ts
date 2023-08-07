interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// This Action interface may or may not have a payload prop. If so, it can have any type.
interface Action {
  type: string;
  payload?: any; 
}

// Now can annotate the action prop with the Action interface.
const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
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
