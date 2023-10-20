import React, { useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Auth from "../../screens/Auth/Index"
import { NavigationContainer } from "@react-navigation/native"
import MainRouting from "./routingStack/MainRouting"
import { useDispatch, useSelector } from "react-redux"
import { getTodos } from "../redux/selectors/todosSelector"
import { getMainTodos } from "../redux/slice/todos"

const Tab = createBottomTabNavigator()
const Routing = () => {
  const Todos = useSelector(getTodos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMainTodos())
  }, [])
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Главная" component={MainRouting} options={{ tabBarBadge: Todos.length }} />
        <Tab.Screen name="Профиль" component={Auth} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default Routing
