import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { PropsDeleteTodos } from "../../feature/routing/routingStack/MainRouting"

const DeleteTodos = ({ navigation, route }: PropsDeleteTodos) => {
  const clearTodo = () => {
    setTodosDeleted([])
    navigation.setParams({ Todos: [] })
  }

  const { Todos, setTodosDeleted } = route.params
  return (
    <View style={styles.container}>
      {Todos?.map((todo, key) => {
        return (
          <Text style={styles.text} key={key}>
            {todo.text}
          </Text>
        )
      })}
      {Boolean(Todos.length) && <Button title={"Очистит"} onPress={clearTodo} />}
    </View>
  )
}
export default DeleteTodos
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
  }
})
