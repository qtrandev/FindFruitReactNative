const tree = (state, action) => {
  switch (action.type) {
    case 'ADD_TREE':
      return {
        treetype: action.tree.treetype,
        fulltype: action.tree.fulltype,
        verified: action.tree.verified,
        publiclocation: action.tree.publiclocation,
        allowpick: action.tree.allowpick,
        season: action.tree.season,
        source: action.tree.source,
        marker: action.tree.marker,
        lat: action.tree.lat,
        lng: action.tree.lng
      }
    default:
      return state
  }
}

const trees = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TREE':
      return [
        ...state,
        tree(undefined, action)
      ]
    default:
      return state
  }
}

export default trees