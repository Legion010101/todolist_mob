import { createSlice } from "@reduxjs/toolkit"

const todos = createSlice({
  name: "todos",
  initialState: {
    completedTodos: ["123"] as any[]
  },
  reducers: {
    setCompletedTodos: (state, action) => {
      state.completedTodos = [...state.completedTodos, action.payload]
    },
  }
})
export default todos.reducer
export const { setCompletedTodos } = todos.actions
