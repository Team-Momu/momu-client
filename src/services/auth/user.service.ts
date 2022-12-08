import { AuthApi } from "../base.service";

const UserService = {
  auth: async () => {
    try {
      const { data } = await AuthApi.get("/auth/token");
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  authRefresh: async () => {
    try {
      const result = await AuthApi.patch("/auth/token/refresh");
    } catch (e) {
      console.error(e);
    }
  },
};
export default UserService;
