import {reactivitySelectorWrapper} from "./vueReactiveStore";
import {combineReducers, createStore, Store} from "redux";
import {inject} from "vue";
import {provide} from "@vue/runtime-core";

let store:Store;

export const storeProvider =
    (storeToProvide:Store) => {
        store = storeToProvide;
        return provide('store', storeToProvide);
    }

const storeChecker =
    (store:any) =>
        !store && console.error('[Err src]: No store has been provided or instanciated')

export const useStore = () => {
    let store = inject<Store>('store')
    storeChecker(store)
    return store
}

export const useDispatch = () => store.dispatch

export const useSelector =
    (selector: Function) =>
        reactivitySelectorWrapper(() => selector(store.getState()), store);