import { listReducer } from "module/list";
import globalReducer from "globalSlice";

export interface RootState {
    globalReducer: any,
    list: Array<string>
}

export const RootReducer = {
    global: globalReducer,
    list: listReducer
};
