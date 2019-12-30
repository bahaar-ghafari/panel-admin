import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE_POST,
  GET_MESSAGE,
  ADD_USER
} from "../action_types";
const initialState = {
  posts: [],
  messages: [],
  users:[]
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return { posts: state.posts.concat(action.payload) };
    case DELETE_POST:
      return { posts: state.posts.filter(post => post.id !== action.id) };

    case EDIT_POST:
      return {
        posts: state.posts.map(post =>
          post.id === action.id ? { ...post, editing: !post.editing } : post
        )
      };

    case UPDATE_POST:
      return {
        posts: state.posts.map(post => {
          if (post.id === action.id) {
            // console.log("actionin reducer", action);
            return {
              ...post,
              title: action.payload.newTitle,
              message: action.payload.newMessage,
              editing: !post.editing
            };
          } else return post;
        })
      };
    case GET_MESSAGE:
      return {
        ...state,
        messages: action.payload
      };
    case ADD_USER:
      return { users: state.users.concat(action.payload) };
    default:
      return state;
  }
}
