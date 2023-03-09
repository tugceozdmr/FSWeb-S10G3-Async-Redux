import { createStore } from "redux";

//initialState

const initialState = {
  completedActions: [],
};


const DONE="done"

function myReducer(state = initialState, action) {
  switch (action.type) {
    case DONE:
      return {
        ...state,
        completedActions: [...state.completedActions, action.payload]
      };
      case "delete":
        const newA=state.completedActions.filter(item=>item.id!== action.payload);
      return {
        ...state,
        completedActions:newA
      };
    default:
      return state;
  }
}

export function ComplaitAct(act) {
  return {
    type: "done",
    payload: {
      id: Date.now(),
      text: act,
    },
  };
}

export function deleteAct(actId){
  return{
    type:DELETE,
    payload:actId
  }
}




const depo = createStore(myReducer);
export default depo;
