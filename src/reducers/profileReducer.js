const profileReducer = (state = { userName: 'Quyen Tran'}, action) => {
  console.log("Profile Reducer called. Action: "+action.userName);
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return {
        userName: action.userName
      }
    default:
      return state
  }
}

export default profileReducer