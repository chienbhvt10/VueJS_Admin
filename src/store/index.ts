import { otherModule } from "./orther-store/index";
import { userModule } from "./user-store/index";
import { createStore } from "vuex";

export default createStore({
  modules: {
    userModule,
    otherModule,
  },
});
