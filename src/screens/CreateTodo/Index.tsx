import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {PropsCreateTodo} from "../../feature/routing/Routing";
import { customAlphabet } from 'nanoid/non-secure';
const CreateTodo = ({ navigation}:PropsCreateTodo) =>{
  const [postText, setPostText] = useState("")
  const id = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);
  return <View style={styles.container}>
    <TextInput
    multiline
    placeholder="Какое у тебя опять дело?"
    style={{ height: 200, padding: 10, backgroundColor: "white" }}
    value={postText}
    onChangeText={setPostText}
  />
    <Button
      title="создать пост"
      onPress={() => {
        navigation.navigate({
          name: "Main",
          params: { post: {text:postText, key: id()} },
          merge: true
        })
      }}
    />
  </View>

}
export default CreateTodo
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }})
