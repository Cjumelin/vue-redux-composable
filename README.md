# vue-redux-tools
Mainly inspired by `react-redux` npm package (https://github.com/reduxjs/react-redux)

Exposed function
-

-  `storeProvider(store)` Func who provide the store to a HOC (must be in a `setup()` func)

-  `storeInjector()` to inject in a HOC and use the `store` in `setup()` func of all his child

-  `useStore()` Func who return `{ store }`

-  `useSelector(selector)` Func who return a subscribed `ref()`to the store (https://composition-api.vuejs.org/api.html#ref).

-  `useDispatch()` Func that expose dispatch

Tools is used by this repo : 
-
- Here to provide the store :
    - https://github.com/Cjumelin/Vue3-vite-redux-demo/blob/master/src/App.vue

- And used here in the template :
    - https://github.com/Cjumelin/Vue3-vite-redux-demo/blob/master/src/uiComponent/thingList/thingList.ts