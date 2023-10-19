import { createSlice } from "@reduxjs/toolkit"
import {Todo} from "../../../screens/Main";

const todos = createSlice({
  name: "todos",
  initialState: {
    todos: [] as Todo[],
    completedTodos: [] as Todo[]
  },
  reducers: {
    setMainTodos: (state, action) => {
      state.todos = [action.payload, ...state.todos ]
    },
    updateMainTodos: (state, action) => {
      state.todos = [...action.payload]
    },
    clearMainTodos: (state, action) => {
      state.todos = []
    },
    setCompletedTodos: (state, action) => {
      state.completedTodos = [...state.completedTodos, action.payload]
    },
  }
})
export default todos.reducer
export const { setCompletedTodos, setMainTodos, clearMainTodos, updateMainTodos } = todos.actions
