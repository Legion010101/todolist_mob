import React, { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { PropsMain } from "../../feature/routing/routingStack/MainRouting"
import { useDispatch, useSelector } from "react-redux"
import { clearMainTodos, setCompletedTodos, setMainTodos, updateMainTodos } from "../../feature/redux/slice/todos"
import { getTodos } from "../../feature/redux/selectors/todosSelector"
import ConfirmDeleteModal from "./components/ConfirmDeleteModal"

const Main = ({ navigation, route }: PropsMain) => {
  const dispatch = useDispatch()
  const [todosDeleted, setTodosDeleted] = useState<Todo[]>([])
  const [modalVisible, setModalVisible] = useState(false)
  const [deleteKey, setDeleteKey] = useState("")
  const MainTodos = useSelector(getTodos)
  useEffect(() => {
    if (route.params?.post) {
      dispatch(setMainTodos(route.params?.post))
    }
  }, [route.params?.post])
  const clearList = () => {
    dispatch(clearMainTodos([]))
    setTodosDeleted((prevState) => [...prevState, ...MainTodos])
  }
  const finishTodo = (todo: Todo) => {
    dispatch(setCompletedTodos(todo))
    deleteTodo(todo.key, false)
  }
  const openModal = (key: string) => {
    setDeleteKey(key)
    setModalVisible(true)
  }
  const deleteTodo = (key: string, isAddBin = true) => {
    const newTodo = MainTodos.filter((item) => item.key !== key)
    const selectTodo = MainTodos.find((item) => item.key === key)
    dispatch(updateMainTodos(newTodo))
    if (selectTodo && isAddBin) setTodosDeleted((prevState) => [...prevState, selectTodo])
    setModalVisible(false)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{MainTodos.length ? "Ваш список дел:" : "Список дел пуст... Добавьте дело!"}</Text>
      <View>
        {MainTodos.map((todo, key) => {
          return (
            <Text key={key}>
              {" "}
              <Text style={styles.text}>
                {`${key + 1}  `}
                {todo.text}
              </Text>
              <Pressable style={styles.button} onPress={() => openModal(todo.key)}>
                <Text style={styles.text}>Удалить</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => finishTodo(todo)}>
                <Text style={styles.text}>Выполнено</Text>
              </Pressable>
            </Text>
          )
        })}
      </View>
      <Pressable style={styles.button} onPress={() => navigation?.navigate("CreateTodo")}>
        <Text style={styles.text}>Добавить дело</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation?.navigate("DeleteTodos", { Todos: todosDeleted, setTodosDeleted })}
      >
        <Text style={styles.text}>Корзина</Text>
      </Pressable>
      <Pressable onPress={() => navigation?.navigate("CompletedTodos")}>
        <Text style={styles.text}>Выполненные дела</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={clearList} disabled={!MainTodos.length}>
        <Text style={[styles.text, Boolean(!MainTodos.length) && styles.disabled]}>Очистить список дел!</Text>
      </Pressable>
      <ConfirmDeleteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        deleteTodo={deleteTodo}
        deleteKey={deleteKey}
      />
    </View>
  )
}
export default Main

const styles = StyleSheet.create({
  container: {
    color: "white",
    flex: 1,
    backgroundColor: "#031507",
    alignItems: "center"
  },
  title: {
    color: "#9a9595",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  text: {
    color: "white",
    fontSize: 20
  },
  button: {
    padding: 5
  },
  disabled: {
    color: "#9a9595"
  }
})
export type Todo = {
  text: string
  key: string
}
