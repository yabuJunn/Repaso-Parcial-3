import { Action, AppState, Observer } from "../types/store";
import { reducer } from "./reducer";

const observers: Observer[] = [];

export let state: AppState = {
    recordatorios: []
};

export const dispatch = (action: Action) => {
  const clone = JSON.parse(JSON.stringify(state));
  state = reducer(action, clone);
  observers.forEach((o) => o.render());
  console.log("Actualizacion en el storage")
  console.log(state)
};

export const addObserver = (observer: Observer) => {
  observers.push(observer);
};
