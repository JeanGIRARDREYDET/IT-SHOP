
type IAction = {
  type: string
  payload: string,

}

export const initialSessionState = {
  userID: '',
  role: ''
};

export const sessionReducer = (state: any, action: IAction) => {
 switch (action.type) {
     case 'setUserID':
     return {
         ...state,
         userID: action.payload
     };
     case 'setRole':
      return {
        ...state,
        role: action.payload
      }
     default:
     return state;
 }
};