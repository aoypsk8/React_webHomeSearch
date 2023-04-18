import axios from "axios";
import { BASE_URL } from "../../components/config/globalKey";

//BASE_URL + "/user/login"
//BASE_URL + "/user/register"
const homeApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzNmE2Mzk3M2I4NmI5ODM5ZTY1NjAiLCJpYXQiOjE2ODEzMTEzMDMsImV4cCI6MTY4MTM5NzcwM30.OC2RdMLZDv4sSVNi676cNOkomMQF6ao-hpfjsWns0yg",
  },
});
export const doGetAllHome = async ()=> {
  try {
    const response = await homeApi.get("/home/getAll");
    console.log(response);
    return response.data;
  } catch (error) {
    return error
  }
};
