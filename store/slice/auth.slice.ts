import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/User.model";
import { decrypt } from "../../utils/codec.utils";
import { getLocalStorage } from "../../utils/common.utils";

/**
 * AuthStore interface
 */
export interface AuthStore {
  token: string | undefined
  authUser: User | undefined
  authenticated: boolean
  authenticating: boolean
  loadingProfile:boolean
  error: any;
}

/**
 * Initial state
 */
const token = getLocalStorage("token")
  ? getLocalStorage("token")
  : undefined;

const initialState: AuthStore = {
  authUser: undefined,
  authenticated: token ? true : false,
  authenticating: false,
  loadingProfile:false,
  token: token,
  error: undefined,
};

/**
 * Auth slice
 */
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginRequest(state) {
      state.authenticating = true;
    },

    loginSuccess(state, action) {
      state.authUser = action.payload.user;
      state.token = action.payload.token;
      state.authenticating = false;
      state.authenticated = true;
    },

    loginFailure(state, action) {
      state.authenticated = false;
      state.token = undefined;
      state.authUser = undefined;
      state.error = action.payload;
      state.authenticating = false;
    },

    fetchUserProfileRequest(state){
        state.loadingProfile = true
    },

    fetchUserProfileSuccess(state,action){
        state.authUser = action.payload
        state.loadingProfile = false
    },

    fetchingProfileFail(state,action){
        state.authUser = undefined
        state.loadingProfile = false
        state.error = action.payload
    },

    logoutSuccess(state){
      state.authenticated = false;
      state.token = undefined;
      state.authUser = undefined;
      state.authenticating = false;
    }
  },
});

export default authSlice;
