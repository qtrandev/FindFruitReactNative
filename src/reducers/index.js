'use strict';

import { combineReducers } from 'redux'
import trees from './treeReducer'
import profile from './profileReducer'

const rootReducer = combineReducers({
  trees,
  profile
})

export default rootReducer