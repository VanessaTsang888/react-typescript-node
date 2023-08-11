
/*
The only thing that we might want to change for this structure, 
as our app starts to grow, all our Action Types can be be added 
into this index.ts file. This is how we can easily expand this 
kind of pattern.
This code is from the `repositoriesReducer.ts` file.
*/

export enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}
