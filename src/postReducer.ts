export const INITIAL_STATE = {
  loading: false,
  error: false,
  post: {},
};

export interface PostObj {
  body: string;
  id: number;
  title: string;
  userId: number;
}
type State = {
  loading: boolean;
  error: boolean;
  post: PostObj;
};

interface Action {
  type: string;
  payload?: any;
}

export const postReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        loading: true,
        error: false,
        post: {},
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: true,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};
