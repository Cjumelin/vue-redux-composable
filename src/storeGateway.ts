import {reactivitySelectorWrapper} from "./vueReactiveStore";
import {combineReducers, createStore, Store} from "redux";
import {inject, InjectionKey} from "vue";
import {provide} from "@vue/runtime-core";

let store:Store;

const storeSymbol: InjectionKey<Store> = Symbol()

export const storeProvider =
    (storeToProvide:Store) => {
        store = storeToProvide;
        return provide(storeSymbol, storeToProvide);
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