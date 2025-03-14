import interceptor from "../../core/services/axios";
import { ILoginForm, IRegisterForm, IUpdateProfile } from "../models/auth";

export const LoginAPI = <T>(data: ILoginForm): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .post("/auth/v1/authenticate", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const GetProfileAPI = <T>(): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .get("/user/v1/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const RegisterAPI = <T>(data: IRegisterForm): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .post("/auth/v1/register", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const UpdateProfileAPI = <T>(data: IUpdateProfile): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .patch(`/user/v1/profile`, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
