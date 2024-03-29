import { Action, createReducer, on } from "@ngrx/store"
import { User } from "src/app/models/user.model";
import { loadUser, loadUserError, loadUserSuccess } from "../actions";

export interface UserState {
    id: string,
    user: User,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const UserInitialState: UserState = {
    id: null!,
    user: null!,
    loaded: false,
    loading: false,
    error: null
}

const _userReducer = createReducer(UserInitialState,
    on(loadUser, (state, { id }) => ({
        ...state,
        loading: true,
        id: id,
    })),
    on(loadUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        user: { ...user }
    })),
    on(loadUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);

export function userReducer(state: UserState | undefined, action: Action) {
    return _userReducer(state, action);
}