import axios from "axios";
import { BASE_URL } from "../../components/config/globalKey";

//BASE_URL + "/user/login"
//BASE_URL + "/user/register"
const homeApi = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   token:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzNmE2Mzk3M2I4NmI5ODM5ZTY1NjAiLCJpYXQiOjE2ODE4MDY3NDMsImV4cCI6MTY4MTg5MzE0M30.Hjz7s-Upu_IkcMDq__tccRgRy2iytdbRczA84fWo0-o",
  // },
});
export const doGetAllHome = async ()=> {
  try {
    const response = await homeApi.get("/home/getAllActive");
    // console.log(response);
    return response.data;
  } catch (error) {
    return error
  }
};