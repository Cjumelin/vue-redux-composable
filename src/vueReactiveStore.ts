import { ref, Ref} from 'vue';
import {Store} from "redux";


export const reactivitySelectorWrapper =
    (wrappedSelector: Function, { subscribe }:Store): Ref => {
        const reactiveValueSelector = ref(wrappedSelector());
        subscribe(() => (reactiveValueSelector.value = wrappedSelector()))
        return reactiveValueSelector
    }