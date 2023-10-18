import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Auth from "../../screens/Auth/Index";
import {NavigationContainer} from "@react-navigation/native";
import MainRouting from "./routingStack/MainRouting";
import {useSelector} from "react-redux";
import {getCompletedTodos} from "../redux/selectors/todosSelector";

const Tab = createBottomTabNavigator()
const Routing = () => {
  const completedTodos = useSelector(getCompletedTodos)
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Главная" component={MainRouting} options={{ tabBarBadge: completedTodos.length }} />
      <Tab.Screen name="Профиль" component={Auth} />

    </Tab.Navigator>
    </NavigationContainer>
  )
}
export default Routing
