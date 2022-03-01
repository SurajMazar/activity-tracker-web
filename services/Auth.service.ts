import { message } from "antd";
import { Dispatch } from "redux";
import authSlice from "../store/slice/auth.slice";
import { encrypt } from "../utils/codec.utils";
import { setLocalStorage } from "../utils/common.utils";
import http from "../utils/http.utils";
import BaseService from "./BaseService";

class AuthService extends BaseService {
  /**
   * @var
   */
  protected authActions;

  /**
   * @params
   */
  constructor() {
    super();
    this.authActions = authSlice.actions;
  }

  public login(params: FormData, callback: any = undefined) {
    return async (dispatch: Dispatch) => {
      dispatch(this.authActions.loginRequest());
      try {
        const response = await http().post("login", params);
        const responseData = response.data;

        if (responseData) {
          const authData = {
            token: responseData.data.token,
            user: responseData.data.user,
          };

          this.setAuthToken(authData.token); // sets auth token in localstorage

          dispatch(this.authActions.loginSuccess(authData));

          message.success(`Welcome ${authData.user.name}`);

          if (callback) {
            callback();
          }
        }
      } catch (e: any) {
        const formattedError = this.handleError(e);
        dispatch(this.authActions.loginFailure(formattedError));
      }
    };
  }

  /**
   * Sets token in localstorage
   * @param token
   */
  protected setAuthToken(token: string) {
    setLocalStorage("token", token);
  }

  /**
   * fetch auth user profile
   * @returns void
   */
  public loadProfile() {
    return async (dispatch: Dispatch) => {
      dispatch(this.authActions.fetchUserProfileRequest());
      try {
        const response = await http().get("profile");
        if (response.data) {
          dispatch(
            this.authActions.fetchUserProfileSuccess(response.data.data)
          );
        }
      } catch (e: any) {
        const formattedError = this.handleError(e);
        dispatch(this.authActions.fetchingProfileFail(formattedError));
      }
    };
  }

  /**
   * Logout
   * @returns 
   */
  public logout() {
    return async (dispatch: Dispatch) => {
      dispatch(this.authActions.loginRequest());
      try {
        await http().get('logout')
        dispatch(this.authActions.logoutSuccess())

        if(typeof localStorage !== undefined){
          localStorage.clear()
        }

        message.success("Logged out sucessfully!")
      } catch (e: any) {
        const formattedError = this.handleError(e);
        dispatch(this.authActions.loginFailure(formattedError));
      }
    };
  }
}

export default new AuthService();
