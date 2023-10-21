import { createSlice } from "@reduxjs/toolkit"
import { Todo } from "../../../screens/Main"
import AsyncStorage from "@react-native-async-storage/async-storage"

const setTodo = async (todos: Todo[]) => {
  const jsonTodos = JSON.stringify(todos)
  await AsyncStorage.setItem("todos", jsonTodos)
}
const setCompletedTodo = async (todos: Todo[]) => {
  const jsonTodos = JSON.stringify(todos)
  await AsyncStorage.setItem("completedTodo", jsonTodos)
}
const todos = createSlice({
  name: "todos",
  initialState: {
    todos: [] as Todo[],
    completedTodos: [] as Todo[]
  },
  reducers: {
    getMainTodos: (state, action) => {
      state.todos = [...action.payload?.jsonTodos]
      state.completedTodos = [...action.payload?.jsonCompletedTodo]
    },
    setMainTodos: (state, action) => {
      state.todos = [action.payload, ...state.todos]
      setTodo(state.todos).then(() => undefined)
    },
    updateMainTodos: (state, action) => {
      state.todos = [...action.payload]
      setTodo(state.todos).then(() => undefined)
    },
    clearMainTodos: (state) => {
      state.todos = []
      setTodo([]).then(() => undefined)
    },
    setCompletedTodos: (state, action) => {
      state.completedTodos = [...state.completedTodos, action.payload]
      setCompletedTodo(state.completedTodos).then(() => undefined)
    }
  }
})
export default todos.reducer
export const { getMainTodos, setCompletedTodos, setMainTodos, clearMainTodos, updateMainTodos } = todos.actions
