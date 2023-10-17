import React, {useEffect, useState} from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {PropsMain} from "../../feature/routing/Routing";
import {useSelector} from "react-redux";
import {getCompletedTodos} from "../../feature/redux/selectors/todosSelector";

const Main = ({navigation, route}: PropsMain) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todosDeleted, setTodosDeleted] = useState<Todo[]>([])

  useEffect(()=>{
    if (route.params?.post){
      setTodos((prevState)=>[route.params?.post || {key:"", text:""}, ...prevState  ])
    }
  }, [route.params?.post])
  const clearList = () => {
    setTodos([])
    setTodosDeleted(prevState => [...prevState, ...todos])
  }
  const deleteTodo = (key: string) => {
    const newTodo = todos.filter(item => item.key !== key)
    const deleteTodo = todos.find(item => item.key === key )
    setTodos([...newTodo])
    if (deleteTodo) setTodosDeleted(prevState => [...prevState, deleteTodo])
  }
  return <View style={styles.container}>
    <Text style={styles.title}>{Boolean(todos.length)? "Ваш список дел:":"Список дел пуст... Добавьте дело!"}</Text>
    <View>{todos.map((todo, key)=>{
      return <Text key={key}> <Text style={styles.text}>{todo.text}</Text>
        <Pressable style={styles.button} onPress={() => deleteTodo(todo.key)}>
          <Text style={styles.text}>Удалить</Text>
        </Pressable>
      </Text>
    })}</View>
    <Pressable style={styles.button} onPress={() => navigation?.navigate("CreateTodo")}>
      <Text style={styles.text}>Добавить дело</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={() => navigation?.navigate("DeleteTodos", { Todos: todosDeleted, setTodosDeleted })}>
      <Text style={styles.text}>Корзина</Text>
    </Pressable>
    <Pressable onPress={() => navigation?.navigate("CompletedTodos")}>
      <Text style={styles.text}>Выполненные дела</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={clearList}>
      <Text style={styles.text}>Очистить список дел!</Text>
    </Pressable>
  </View>
}
export default Main

const styles = StyleSheet.create({
  container: {
    color: "white",
    flex: 1,
    backgroundColor: "#031507",
    alignItems: "center"
  },
  title:{
    color: "#9a9595",
    textTransform: 'uppercase',
    fontWeight: "bold"
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  button: {
    padding: 5,
  }
})
export type Todo = {
  text: string
  key:string
}
