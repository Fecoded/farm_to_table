import {
  GET_ALL_SUBSCRIPTION,
  GET_SUBSCRIPTION,
  UPDATE_STATUS,
  SUBSCRIPTION_ERROR,
  CREATE_SUBSCRIPTION,
} from "./subscription.types";

const INITIALSTATE = {
  subscriptions: [],
  subscription: [],
  error: {},
  loading: true,
};

const Subscription = (state = INITIALSTATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: payload,
        loading: false,
      };
    case GET_SUBSCRIPTION:
      return {
        ...state,
        subscription: payload,
        loading: false,
      };
    case CREATE_SUBSCRIPTION:
      return {
        ...state,
        subscription: [payload, ...state.subscription],
        loaing: false,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        subscriptions: state.subscriptions.map((subscription) =>
          subscription._id === payload._id ? payload : subscription
        ),
        loading: false,
      };
    case SUBSCRIPTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default Subscription;
