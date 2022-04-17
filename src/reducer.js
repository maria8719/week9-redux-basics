/**
 * 
 *   Redux makes zero assumptions about the shape of your state. It could be an object, 
 *   or a number, or a string, or whatever you need. We have to provide a function that will
 *   return the state. This function is a reducer.
 * 
 *  A reducer is a function that takes in two things and returns a new state. :
 *     1. Copy of the current state 
 *     2. The action (info about what happened)
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */




export default function reducer(state = {count: 0}, action) {

    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1   
        };
      case "DECREMENT":
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
}

