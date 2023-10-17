import { RootState } from "../store"

export const getCompletedTodos = (state: RootState) => {
  return state.todos.completedTodos
}
