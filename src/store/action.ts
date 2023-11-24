import { Action, Actions } from "../types/store";

export const actionExample = (payload: string): Action => {
  return {
    type: Actions.EXAMPLE_ACTION,
    payload
  };
};

export const storageRecordatorios = (payload: any): Action => {
    return {
      type: Actions.STORAGE_RECORDATORIOS,
      payload
    };
  };
  
