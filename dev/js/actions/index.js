// action creator 
export const selectUser = (user) => {
  console.log(user.first);
  // the action
  return {
    type: "USER_SELECTED",
    payload: user
  }
};
