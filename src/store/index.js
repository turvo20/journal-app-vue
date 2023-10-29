import journal from "@/module/daybook/store/journal";
import { createStore } from "vuex";


const store = createStore({
    modules:{
        journal
    }
})

export default store