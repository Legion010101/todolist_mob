import React, {Dispatch, SetStateAction} from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import Main, {Todo} from "../../screens/Main/Index";
import CompletedTodos from "../../screens/CompletedTodos/Index";
import CreateTodo from "../../screens/CreateTodo/Index";
import DeleteTodos from "../../screens/DeleteTodos/Index";
import Profile from "../../screens/Profile/Index";
import Settings from "../../screens/Settings/Index";


const Stack = createNativeStackNavigator<RootStackParamList>()
const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{
        title: "список дел",
        headerStyle: {
          backgroundColor: "#1c1111"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        headerBackTitle: "Back",
        headerBackTitleVisible: true,
        headerBackTitleStyle: {
          fontSize: 20
        }
      }}
      >
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
  Main: { post?: Todo }
  CreateTodo: undefined
  CompletedTodos: undefined
  DeleteTodos: { Todos: Todo[], setTodosDeleted:Dispatch<SetStateAction<Todo[]>> }
  Profile: undefined
  Settings: undefined
  Auth: undefined
}
export type PropsMain = NativeStackScreenProps<RootStackParamList, "Main">
export type PropsCreateTodo = NativeStackScreenProps<RootStackParamList, "CreateTodo">
export type PropsDeleteTodos = NativeStackScreenProps<RootStackParamList, "DeleteTodos">


