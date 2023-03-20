const InitialState = {
    admin : {
        logged : false,
    },
    userEmail : null,
};

function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_EMAIL':
       var newState = {
            ...state,
            userEmail : action.payload
        };
        return newState;

      default:
        return state;
    }
  }
 export {
    reducer,
    InitialState
 };