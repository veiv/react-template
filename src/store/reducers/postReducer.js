import {
  FETCH_POSTS,
  NEW_POST,
  RESET_POSTS,
  DELETE_POST,
  SEARCH_POSTS,
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case RESET_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        items: action.payload,
      };
    case SEARCH_POSTS:
      return {
        ...state,
        items: action.payload.filter(
          (post) =>
            post.body.includes(action.search) ||
            post.title.includes(action.search)
        ),
      };
    default:
      return state;
  }
}
