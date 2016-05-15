export const addTree = (treeType) => {
  return {
    type: 'ADD_TREE',
    tree: {
      treeType: treeType
    }
  }
}

export const updateProfile = (userName) => {
  console.log("Update profile called");
  return {
    type: 'UPDATE_PROFILE',
    userName: 'Tom Jones'
  }
}