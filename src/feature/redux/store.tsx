import { configureStore, combineReducers } from "@reduxjs/toolkit"
import todos from "./slice/todos"

const rootReducer = combineReducers({
  todos: todos
})
const store = configureStore({
  reducer: rootReducer
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
