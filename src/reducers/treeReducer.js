const trees = (state = [], action) => {
  switch (action.type) {
    case 'REPLACE_TREES':
      return action.payload;
    case 'ADD_TREE':
      return Object.assign([
        ...state, {
          treetype: action.payload.treetype,
          fulltype: action.payload.fulltype,
          verified: action.payload.verified,
          publiclocation: action.payload.publiclocation,
          allowpick: action.payload.allowpick,
          season: action.payload.season,
          source: action.payload.source,
          marker: action.payload.marker,
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      ]);
    default:
      return state
  }
}

export default trees