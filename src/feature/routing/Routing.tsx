import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import Main from "../../screens/Main/Index";
import CompletedTodos from "../../screens/CompletedTodos/Index";
import CreateTodo from "../../screens/CreateTodo/Index";
import DeleteTodos from "../../screens/DeleteTodos/Index";
import Profile from "../../screens/Profile/Index";
import Settings from "../../screens/Settings/Index";


const Stack = createNativeStackNavigator<RootStackParamList>()
const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main" component={Main}
        />
        <Stack.Screen
          name="CompletedTodos" component={CompletedTodos}
        />
        <Stack.Screen
          name="CreateTodo" component={CreateTodo}
        />
        <Stack.Screen
          name="DeleteTodos" component={DeleteTodos}
        />
        <Stack.Screen
          name="Profile" component={Profile}
        />
        <Stack.Screen
          name="Settings" component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routing

type RootStackParamList = {
  Main: undefined
  CreateTodo: undefined
  CompletedTodos: undefined
  DeleteTodos: undefined
  Profile: undefined
  Settings: undefined
  Auth: undefined
}
export type PropsMain = NativeStackScreenProps<RootStackParamList, "Main">
