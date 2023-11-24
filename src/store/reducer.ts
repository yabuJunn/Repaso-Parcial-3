import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {
    case Actions.STORAGE_RECORDATORIOS:
      return { 
        ...currentState,
        recordatorios: action.payload
      };
    default:
      return currentState;
  }
};
