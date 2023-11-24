export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: string | any;
}

export enum Actions {
    "EXAMPLE_ACTION" = "EXAMPLE_ACTION",
    "STORAGE_RECORDATORIOS" = "STORAGE_RECORDATORIOS"
}

export interface AppState {
    recordatorios: Array<any>
}
