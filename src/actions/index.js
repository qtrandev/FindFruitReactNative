export const addTree = (treeType) => {
  return {
    type: 'ADD_TREE',
    tree: {
      treeType: treeType
    }
  }
}

export const updateProfile = (userName) => {
  return {
    type: 'UPDATE_PROFILE',
    userName
  }
}