import {
  GET_ALL_SUBSCRIPTION,
  GET_SUBSCRIPTION,
  UPDATE_STATUS,
  SUBSCRIPTION_ERROR,
  CREATE_SUBSCRIPTION,
} from "./subscription.types";
import axios from "axios";
import { setAlert } from "../alert/alert.action";

// GET ALL SUBSCRIPTION
export const getSubscription = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/subscription`);

    dispatch({
      type: GET_ALL_SUBSCRIPTION,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: SUBSCRIPTION_ERROR,
    });
  }
};

// GET COMMODITY
export const getSingleSubscription = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/subscription/me`);

    dispatch({
      type: GET_SUBSCRIPTION,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: SUBSCRIPTION_ERROR,
    });
  }
};

// CREATE COMMODITY
export const createSubscription = ({
  image,
  firstName,
  lastName,
  phone,
  deliveryAddress,
  plan,
  history,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("deliveryAddress", deliveryAddress);
    formData.append("plan", plan);

    const res = await axios.post("/api/subscription", formData, config);

    dispatch({
      type: CREATE_SUBSCRIPTION,
      payload: res.data.data,
    });

    history.push("/profile");
  } catch (err) {
    const errors = err.response.data.msg;

    if (errors === "File too large") {
      dispatch(setAlert(errors, "danger"));
    } else {
      dispatch(setAlert(errors, "danger"));
    }

    dispatch({
      type: SUBSCRIPTION_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// UPDATE COMMODITY
export const updateStatus = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.put(`/api/subscription/${id}`, config);

    dispatch({
      type: UPDATE_STATUS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: SUBSCRIPTION_ERROR,
      payload: err.response.statusText,
    });
  }
};
