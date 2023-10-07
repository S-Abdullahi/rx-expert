import { IUser } from "./admin/page";
import axios from "axios";
import { IUserLogin } from "./interfaces";

const baseUrl = 'https://rxpert-api.up.railway.app/api'

export const useCreateUser = () => {
  let data;
  const createUser = async (user: IUser) => {
    try {
      const res = await axios.post(`${baseUrl}/user/register`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    createUser,
    data,
  };
};

export const useLoginUser = () => {
  let data;
  const loginUser = async (user: IUserLogin) => {
    try {
      const res = await axios.post(`${baseUrl}/user/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = res.data;
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loginData: data,
    loginUser,
  };
};
