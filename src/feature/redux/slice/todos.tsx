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
const getTodos = async () => {
  const resTodos = await AsyncStorage.getItem("todos")
  const resCompletedTodo = await AsyncStorage.getItem("completedTodo")
  const jsonTodos = resTodos ? JSON.parse(resTodos) : []
  const jsonCompletedTodo = resCompletedTodo ? JSON.parse(resCompletedTodo) : []
  return { jsonTodos, jsonCompletedTodo }
}
const todos = createSlice({
  name: "todos",
  initialState: {
    todos: [] as Todo[],
    completedTodos: [] as Todo[]
  },
  reducers: {
    getMainTodos: (state) => {
      getTodos().then((res) => {
        state.todos = [...res.jsonTodos]
        state.completedTodos = [...res.jsonCompletedTodo]
      })
    },
    setMainTodos: (state, action) => {
      state.todos = [action.payload, ...state.todos]
      setTodo(state.todos)
    },
    updateMainTodos: (state, action) => {
      state.todos = [...action.payload]
      setTodo(state.todos)
    },
    clearMainTodos: (state) => {
      state.todos = []
      setTodo([])
    },
    setCompletedTodos: (state, action) => {
      state.completedTodos = [...state.completedTodos, action.payload]
      setCompletedTodo(state.completedTodos)
    }
  }
})
export default todos.reducer
export const { getMainTodos, setCompletedTodos, setMainTodos, clearMainTodos, updateMainTodos } = todos.actions
