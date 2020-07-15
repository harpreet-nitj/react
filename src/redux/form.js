import * as ActionTypes from './ActionTypes';

export const Leaders = (state = { errMess: null}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
        var form = action.payload;
        return { ...state, comments: state.forms.concat(comment)};

    default:
      return state;
  }
};
