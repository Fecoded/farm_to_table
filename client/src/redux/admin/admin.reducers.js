import {
  ADMIN_LOADED,
  GET_USERS,
  LOGIN_SUCCESS,
  FILTER_USERS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT,
} from "./admin.types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  filtered: null,
  users: [],
};

const Admin = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case FILTER_USERS:
      return {
        ...state,
        filtered: state.users.filter((user) => {
          const regex = new RegExp(`${payload}`, "gi");
          return (
            user.first_name.match(regex) ||
            user.last_name.match(regex) ||
            user.phone.match(regex)
          );
        }),
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default Admin;
