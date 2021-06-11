/*
 *
 * Error actions
 *
 */

export interface IErrorAction {
  type: string;
  payload: any;
}

export type ErrorAction = IErrorAction;
