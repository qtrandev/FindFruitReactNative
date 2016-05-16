const profileReducer = (state = { userName: 'Quyen Tran'}, action) => {
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