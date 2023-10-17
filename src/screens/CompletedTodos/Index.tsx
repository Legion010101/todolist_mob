import React from "react";
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {getCompletedTodos} from "../../feature/redux/selectors/todosSelector";

const CompletedTodos = () =>{
  const completedTodos = useSelector(getCompletedTodos)

  return <View>Hi i'm Completed todos Page</View>

}
export default CompletedTodos
