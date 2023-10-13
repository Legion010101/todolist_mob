import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {PropsDeleteTodos} from "../../feature/routing/Routing";

const DeleteTodos = ({route}: PropsDeleteTodos) =>{
  const {Todos} =route.params
  return  <View style={styles.container}>{Todos?.map((todo, key)=>{
    return <Text style={styles.text}>{todo.text}</Text>
  })}</View>

}
export default DeleteTodos
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
