import { createSlice } from "@reduxjs/toolkit"
import {Todo} from "../../../screens/Main";

const todos = createSlice({
  name: "todos",
  initialState: {
    completedTodos: [] as Todo[]
  },
  reducers: {
    setCompletedTodos: (state, action) => {
      state.completedTodos = [...state.completedTodos, action.payload]
    },
  }
})
export default todos.reducer
export const { setCompletedTodos } = todos.actions
