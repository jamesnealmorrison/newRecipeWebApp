import { ADD_INGREDIENT } from "../actionTypes";

const initialState = {
  ingredients: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_INGREDIENT: {
      const { id, content } = action.payload;
      return Object.assign({}, state, {
        ingredients: state.ingredients.concat(action.payload)
      })
    }
    default:
      return state;
  }
}
