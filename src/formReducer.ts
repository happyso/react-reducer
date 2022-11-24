export const INITIAL_STATE = {
  title: '',
  desc: '',
  price: 0,
  category: '',
  tags: [],
  images: {
    sm: '',
    md: '',
    lg: '',
  },
  quantity: 0,
};

interface IState {
  title: string;
  tags: string[];
  quantity: number;
}

type Action = {
  type: any;
  payload?: any;
};

export const formReducer = (state: IState, action: Action) => {
  console.log(state);

  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'ADD_TAG':
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case 'REMOVE_TAG':
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    case 'INCREASE':
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case 'DECREASE':
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};
