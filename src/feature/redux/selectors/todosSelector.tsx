import { RootState } from "../store"

export const getCompletedTodos = (state: RootState) => {
  return state.todos.completedTodos
}
export const getTodos = (state: RootState) => {
  return state.todos.todos
}

