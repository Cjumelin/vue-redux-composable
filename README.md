# vue-redux-tools
Mainly inspired by `react-redux` npm package (https://github.com/reduxjs/react-redux)

Exposed function
-

-  `provideStore(store)`
    - Need to be call in `setup()` (https://composition-api.vuejs.org/api.html#setup)
    - Provide your store to an HOC (as `App.vue`) and to this lib.

-  `useStore()`
    - Need to be call in `setup()` (https://composition-api.vuejs.org/api.html#setup)
    - Provide the redux `store`.

-  `useSelector(selector)`
    - Return a `ref()` where the `value` property is reactively change if the state is updated.
     (https://composition-api.vuejs.org/api.html#ref)

-  `useDispatch()`
    - Return `dispatch`

Simple use case 
-
- How to provide your `store` to the lib :
    - https://github.com/Cjumelin/Vue3-vite-redux-demo/blob/master/src/App.vue

- How to use it in `setup()`:
    - https://github.com/Cjumelin/Vue3-vite-redux-demo/blob/master/src/uiComponent/thingList/thingList.ts