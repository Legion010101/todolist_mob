import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {getCompletedTodos} from "../../feature/redux/selectors/todosSelector";

const CompletedTodos = () =>{
  const completedTodos = useSelector(getCompletedTodos)
  if (!completedTodos.length) return <Text style={styles.title}>выполни сначала хоть одно дело...</Text>
  return <View>{completedTodos.map((item, key)=>{
    return <Text key={key}>{item.text}</Text>
  })}</View>

}
export default CompletedTodos

const styles = StyleSheet.create({
  title: {
    color: "#444343",
    textTransform: "uppercase",
    fontWeight:"900"
  },
  text:{
    color: "#0d1c0d",
    fontWeight:"bold"
  }
})
