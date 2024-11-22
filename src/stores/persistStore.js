import { writable } from "svelte/store";


export const persistStore = (key,initial) => {
    const persist = localStorage.getItem(key)
    const data = persist ? JSON.parse(persist) : initial
  
    const store = writable(data, ()=> {
      const unsubcribe = store.subscribe(value => {
        localStorage.setItem(key, JSON.stringify(value))
      })
      return unsubcribe;
    })
    return store;
  }