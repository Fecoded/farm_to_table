import { createSelector } from "reselect";

const selectSubscription = (state) => state.subscription;

export const selectSubscriptionItems = createSelector(
  [selectSubscription],
  (subscript) => subscript.subscriptions
);

export const selectSubscriptionItem = createSelector(
  [selectSubscription],
  (subscript) => subscript.subscription
);
