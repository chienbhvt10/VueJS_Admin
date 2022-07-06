import { createStore } from "vuex";
import { USER_DETAIL_PATH } from "./../../common/base-router";
import { USERS_LIST_PATH } from "@/common/base-router";
import axiosClient from "@/services/apis-caller";

interface userModuleState {
  users: any;
  user: any;
}
export const userModule = createStore<userModuleState>({
  state: () => ({ users: undefined, user: undefined }),
  getters: {},
  mutations: {
    setUsers: (state, newUsers) => {
      state.users = newUsers;
    },
    setUser: (state, newUser) => {
      state.user = newUser;
    },
  },
  actions: {
    getUsers: async (data: any) => {
      const url = USERS_LIST_PATH;
      return await axiosClient.get(url, data);
    },
    getUser: async (data: any) => {
      const url = USER_DETAIL_PATH;
      return await axiosClient.get(url, data);
    },
  },
});
