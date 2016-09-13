import React from 'react'
import {createStore} from 'redux'
import addTrack from './actions'


// Reducer
const tracks = (currentState = [], action) => {
  switch (action.type) {
    case 'ADD_TRACK':
      const nextState = [
        ...currentState,
        {
          id: action.track.id,
          key: action.track.key
        }
      ];
      return nextState;
      break;
    default:
      return currentState;
  }
}

// Root Reducer
const reduxBox = (currentState = {}, action) => {
  return {
    tracks: tracks(currentState.tracks, action)
  }
}

let store = createStore(reduxBox);

export default store;
