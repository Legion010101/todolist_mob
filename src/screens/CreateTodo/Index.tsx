import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import {PropsCreateTodo} from "../../feature/routing/routingStack/MainRouting";
import { customAlphabet } from 'nanoid/non-secure';
import {alphabet} from "../../shared/constants/textConstants";
const CreateTodo = ({ navigation}:PropsCreateTodo) =>{
  const [postText, setPostText] = useState("")
  const id = customAlphabet(alphabet, 10);
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
