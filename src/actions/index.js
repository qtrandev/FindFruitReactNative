export const replaceTrees = (trees) => {
  return {
    type: 'REPLACE_TREES',
    payload: trees
  }
}

export const addTree = (treeType) => {
  return {
    type: 'ADD_TREE',
    payload: {
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