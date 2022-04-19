const initialState = {
    current: {},
    all: []
  }
  export default function todosReducer(state = initialState, action){
    switch(action.type) {
      case 'FETCH_TODOSS':
        return { ...state, all: action.payload }
      case 'CREATE_TODO':
        return { ...state, all: [...state.all, action.payload] }
      case 'DELETE_POTLUCK':
       // ... 
      case 'TOGGLE_COMPLETE':
       // ...
      default: return state
    }
  }