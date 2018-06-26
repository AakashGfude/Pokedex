export default function reducer(state = {
    history: [],
  }, action) {
  switch (action.type) {
    case 'ADD_HISTORY': {
      return {
        ...state,
        history: [... state.history, action.payload]
      }
    }
  }
  return state;
}